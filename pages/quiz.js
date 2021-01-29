/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Head from 'next/head';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';
import AlternativesForm from '../src/components/AlternativesForm';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>
    </Widget>
  );
}

function ResultWidget({ results, totalQuestions }) {
  return (
    <Widget>
      <Widget.Header>
        <h1>Resultado final:</h1>
      </Widget.Header>

      <Widget.Content>
        <h2>
          Você acertou
          {' '}
          {results.reduce((atual, proximo) => {
            const isAcerto = proximo === true;
            if (isAcerto) {
              return atual + 1;
            }
            return atual;
          })}
          {' '}
          de
          {' '}
          {totalQuestions}
          {' '}
          perguntas
        </h2>

        <a href="/">
          <Button> Voltar para o menu </Button>
        </a>
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question,
  totalQuestions,
  questionIndex,
  onSubmit,
  addResult,
}) {
  const questionId = `question__${questionIndex}`;
  const [isQuestionSubmited, setIsQuestionSubmited] = useState();
  const [selectedAlternative, setSelectedAlternative] = useState(undefined);
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  return (
    <Widget>

      <Widget.Header>
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>

      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img
        style={{
          width: '100%',
          height: '120px',
          objectFit: 'cover',
        }}
        src={question.image}
      />

      <Widget.Content>

        <h2>
          {question.title}
        </h2>

        {/* <p>
          {question.description}
        </p> */}

        <AlternativesForm
          onSubmit={(event) => {
            event.preventDefault();
            setIsQuestionSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setIsQuestionSubmited(false);
              setSelectedAlternative(undefined);
            }, 2000);
          }}
        >

          {question.alternatives.map((item, index) => {
            const alternativeId = `alternative__${index}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === index;
            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
                key={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  type="radio"
                  name={questionId}
                  onChange={() => {
                    setSelectedAlternative(index);
                  }}
                />
                {item}
              </Widget.Topic>
            );
          })}

          <Button type="submit" disabled={!hasAlternativeSelected}>
            CONFIRMAR
          </Button>
          {isCorrect && isQuestionSubmited && <p>Você acertou! xD</p>}
          {!isCorrect && isQuestionSubmited && <p>Você errou! ;-;</p>}

        </AlternativesForm>

      </Widget.Content>

    </Widget>
  );
}

export default function QuizPage() {
  const totalQuestions = db.questions.length;
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = db.questions[questionIndex];
  const [screenState, setScreenState] = useState('LOADING');
  const [results, setResults] = useState([]);

  function addResult(result) {
    setResults([
      ...results,
      result,
    ]);
  }

  useEffect(() => {
    setTimeout(() => {
      setScreenState('QUIZ');
    }, 2000);
  }, []);

  function handleSubmit() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setScreenState('RESULTADO');
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg2}>
      <Head>
        <title>Attack On Titan - Quiz</title>
      </Head>

      <QuizContainer>
        <QuizLogo />

        {screenState === 'LOADING' && <LoadingWidget />}

        {screenState === 'QUIZ' && (
          <QuestionWidget
            question={question}
            totalQuestions={totalQuestions}
            questionIndex={questionIndex}
            onSubmit={handleSubmit}
            addResult={addResult}
          />
        )}

        {screenState === 'RESULTADO' && (
          <ResultWidget results={results} totalQuestions={totalQuestions} />
        )}

      </QuizContainer>
    </QuizBackground>
  );
}

// 01:07:00
