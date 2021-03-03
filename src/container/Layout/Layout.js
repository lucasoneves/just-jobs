import React from "react";
import AppHeader from "../../components/AppHeader/AppHeader";
import Footer from "../../components/Footer/Footer";
import JobsList from "../../views/JobList";
import NewJob from '../../views/NewJob';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <AppHeader></AppHeader>
      <Router>
        <Switch>
        <Route path="/novo-job">
            <NewJob />
          </Route>
          <Route path="/">
            <JobsList />
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
