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

const CardJob = (props) => {

  return (
    <div>
      { props.ctr }
      { props.parag}
    </div>
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
