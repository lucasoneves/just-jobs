import React from "react";
import styled from "styled-components";

const HeaderApp = styled.header`
  padding: 30px 15px;
  background: rgba(0, 0, 0, 0.4);
`;

const Wrapper = styled.div`
  max-width: 640px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 18px;
    text-transform: lowercase;
  }
`;

const Header = (props) => {
  return (
    <HeaderApp>
      <Wrapper>
        <h2>prooffer</h2>
        {props.children}
      </Wrapper>
    </HeaderApp>
  );
};

export default Header;
