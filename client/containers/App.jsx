import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import LogIn from './LogIn';
import SignUp from './SignUp';

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => ({
});

const App = props => (
  <BrowserRouter>
    <div className="container">
      <SignUp />
      <LogIn />
    </div>
  </BrowserRouter>
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
