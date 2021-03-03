import React from "react";
import AppHeader from "../../components/AppHeader/AppHeader";
import Footer from "../../components/Footer/Footer";
import JobsList from "../../views/JobList";
import NewJob from "../../views/NewJob";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import styled from 'styled-components';

const Menu = styled.nav`
  
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 30px;

    a {
      color: white;
      text-decoration: none;
    }
  }
`

const Layout = () => {
  return (
    <div>
      <Router>
        <AppHeader>
          <Menu>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/novo">+ Novo Job</NavLink>
              </li>
            </ul>
          </Menu>
        </AppHeader>

        <Switch>
          <Route exact path="/">
            <JobsList />
          </Route>
          <Route exact path="/novo">
            <NewJob />
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
