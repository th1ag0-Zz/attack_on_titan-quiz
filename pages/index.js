import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
// import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';
import Link from '../src/components/Link';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center top;
//   @media (max-width: 500px) {
//     background-position: 550px;
//   }
// `;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Attack On Titan - Quiz</title>
      </Head>

      <QuizContainer>
        <QuizLogo />

        <Widget
          as={motion.section}
          transition={{ duration: 0.2 }}
          variants={{
            show: { opacity: 1, rotate: 0, scale: 1 },
            hidden: { opacity: 0, rotate: 50, scale: 0.9 },
          }}
          initial="hidden"
          animate="show"
        >

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
              <Input
                name="nome"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Digite seu nome..."
              />
              <Button type="submit" disabled={name.length === 0}> JOGAR </Button>
            </form>
          </Widget.Content>

        </Widget>

        <Widget
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.2 }}
          variants={{
            show: { opacity: 1, rotate: 0, scale: 1 },
            hidden: { opacity: 0, rotate: 50, scale: 0.9 },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <h1>Quizes da gelera</h1>

            <ul>
              {db.external.map((item) => {
                const [projectName, user] = item
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '')
                  .split('.');

                return (
                  <li key={item}>
                    <Widget.Topic as={Link} href={`/quiz/${projectName}___${user}`}>
                      {`${user}/${projectName}`}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>
          </Widget.Content>
        </Widget>
        { /* <Footer /> */ }
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/th1ag0-Zz" />
    </QuizBackground>
  );
}
