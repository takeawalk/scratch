import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => ({
});

const App = props => (
  <BrowserRouter>
    <div className="container">
      <Navigation />
      <Route path="/add" component={} />
      <Route path="/view" component={} />
    </div>
  </BrowserRouter>
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
