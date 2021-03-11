import React from 'react';
import Container from '../container/Container';
import CardJob from '../components/CardJob/CardJob';
import styled from 'styled-components';

const Greeting = styled.h2`
  font-size: 30px;
  margin: 100px 0 50px 0;
`

const jobsList = () => {
  return (
    <div>
      <Container>
        <Greeting>Olá! Esses são seus processos seletivos cadastrados =).</Greeting>
        <CardJob></CardJob>
      </Container>
    </div>
  )
};

export default jobsList;