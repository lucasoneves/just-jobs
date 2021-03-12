import React from 'react';
import Container from '../container/Container';
import CardJob from '../components/CardJob/CardJob';
import styled from 'styled-components';

const Greeting = styled.h2`
font-size: 30px;
margin: 100px 0 50px 0;
`

const Wrapper = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
gap: 20px;

&:hover {
  .card-offer {
    opacity: .6;
  }
}

.card-offer {
  &:hover {
    opacity: 1;
  }
}
`

const JobsList = () => {
  return (
    <div>
    <Container>
    <Greeting>Olá! Esses são seus processos seletivos cadastrados =).</Greeting>
    <Wrapper>
    <CardJob classList="card-offer" thumb="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIzqiZBOMa5Zz8_-7Ks3TR-0W8PBXB8922rA&usqp=CAU" companyName="McDonalds" role="Web Developer"></CardJob>
    <CardJob classList="card-offer" thumb="https://about.gitlab.com/images/press/logo/png/gitlab-logo-gray-rgb.png" companyName="Natura" role="Front-End Engineer"></CardJob>
    <CardJob classList="card-offer" thumb="https://cdn.freebiesupply.com/images/large/2x/premier-league-logo-png-transparent.png" companyName="Microsoft" role="Software Engineer"></CardJob>
    </Wrapper>
    </Container>
    </div>
    )
  };
  
  export default JobsList;