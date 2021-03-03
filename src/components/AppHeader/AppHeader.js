import React from "react";
import styled from "styled-components";

const HeaderApp = styled.header`
  padding: 15px;
  background: #2c3e50;

  h2 {
    color: #fff;
  }
`;

const Wrapper = styled.div`
  max-width: 768px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = (props) => {
  return (
    <HeaderApp>
      <Wrapper>
        <h2>Just Jobs</h2>
        {props.children}
      </Wrapper>
    </HeaderApp>
  );
};

export default Header;
