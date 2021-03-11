import {React, useState} from 'react';
import styled from 'styled-components';
import * as actionTypes from '../../store/actions';

// Connect
import { connect } from 'react-redux';

const MainButton = styled.button`
  background: transparent;
  display: block;
  margin: 20px 0;
  font-size: 14px;
  padding: 10px;
  border: 0;
  background: darkred;
  color: #f1f1f1;
  border-radius: 5px;
  cursor: pointer;
  min-width: 120px;

  &:hover {
    opacity: .8;
  }
`

const Card = styled.div`
  background: #f2f2f2;
  padding: 30px;
  border-radius: 5px;
  margin: 15px 0;
  box-shadow: 0 0 10px black;
  width: 100%;
  color: #444;

  p {
    margin: 10px 0;
    font-size: 14px;
  }
`

const Logo = styled.div`
  background: url(${props => props.thumb});
  width: 70px;
  height: 70px;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
`

const Flex = styled.div`
  display: flex;
  align-items: center;

  &.header {
    gap: 10px;
    margin-bottom: 20px;
  }
`

const CardJob = (props) => {

  return (
    <Card>
      <Flex className="header">
        <Logo thumb={props.thumb}></Logo>
        <h2>{ props.companyName }</h2>
      </Flex>
      <p>{ props.role }</p>
      <p>Status: Em Andamento</p>
    </Card>
  )
}

const mapStateToProps = state => {
  return {
    ctr: state.counter,
    parag: state.offers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
    decreaseCounter: () => dispatch({type: actionTypes.DECREMENT})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CardJob);
