import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Dashboard from './Dashboard';

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => ({
});

const Main = props => (

  <div>
    <SignUp />
    <LogIn />
    <Dashboard />
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Main);