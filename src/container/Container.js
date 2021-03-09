import React from 'react';
import styled from 'styled-components';

const ContainerWrapper = styled.div`
  max-width: 768px;
  margin: auto;
  padding: 0 15px;
  // altura header + altura footer - altura da página
  height: calc(100vh - (84px + 57px));
`

const container = (props) => {
  return (
    <ContainerWrapper>
      {props.children}
    </ContainerWrapper>
  )
}

export default container;