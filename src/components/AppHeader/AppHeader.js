import React from "react";
import styled from "styled-components";

const AppHeader = styled.header`
  padding: 15px;
  background: #2c3e50;

  h2 {
    color: #fff;
  }
`;

const Header = () => {
  return (
    <AppHeader>
      <h2>Just Jobs</h2>
    </AppHeader>
  );
};

export default Header;
