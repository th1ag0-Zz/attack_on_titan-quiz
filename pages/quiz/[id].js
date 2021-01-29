/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

// eslint-disable-next-line react/prop-types
export default function QuizDaGalera({ dbExterno }) {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <QuizScreen externalQuestions={dbExterno.questions} externalBg={dbExterno.bg} />
    </ThemeProvider>
  );
}

export async function getServerSideProps(contex) {
  const [projectName, user] = contex.query.id.split('___');
  const dbExterno = await fetch(`https://${projectName}.${user}.vercel.app/api/db`)
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }
      throw new Error('falha em pegar os dados');
    })
    .then((respostaEmJson) => respostaEmJson)
    .catch((err) => console.log(err));

  return {
    props: {
      dbExterno,
    },
  };
}

// 00:56:00
