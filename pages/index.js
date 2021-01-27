import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
// import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center top;
//   @media (max-width: 500px) {
//     background-position: 550px;
//   }
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media (max-width: 500px) {
    margin: auto;
    padding: 15px;
  } 
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');
  return (
    <QuizBackground backgroundImage={db.bg2}>
      <Head>
        <title>Attack On Titan - Quiz</title>
      </Head>

      <QuizContainer>
        <QuizLogo />

        <Widget>

          <Widget.Header>
            <h1>Attack on Titan</h1>
          </Widget.Header>

          <Widget.Content>
            <form onSubmit={(event) => {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <p>
                Teste os seus conhecimentos sobre o universo Attack On Titan!
              </p>
              <input
                onChange={(event) => {
                  setName(event.target.value);
                }}
                type="text"
                placeholder="Digite seu nome..."
              />
              <button type="submit" disabled={name.length === 0}> JOGAR </button>
            </form>
          </Widget.Content>

        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da gelera</h1>

            <p>Lorem ipsum is dolor...</p>
          </Widget.Content>
        </Widget>
        { /* <Footer /> */ }
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/th1ag0-Zz" />
    </QuizBackground>
  );
}
