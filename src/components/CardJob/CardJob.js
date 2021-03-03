import {React, useState} from 'react';
import styled from 'styled-components';

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

  const [counter, setCounter] = useState(0)

  const increaseCounter = (e) => {
    setCounter(counter + 1)
  }

  
  const decreaseCounter = (e) => {
    setCounter(counter - 1)
  }

  return (
    <div>
      <h2>Card Job</h2>
      { props.ctr }
      <MainButton onClick={decreaseCounter}>
        Decrease
      </MainButton>
      <MainButton onClick={increaseCounter}>
        Increase
      </MainButton>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    ctr: state.counter
  };
};

export default connect(mapStateToProps)(CardJob);