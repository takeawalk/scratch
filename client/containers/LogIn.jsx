import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleLoginSubmit, handleChange } from '../actions/actions';

const LogIn = (props) => {
  const { currentText, handleLoginSubmit } = props;
  return (
    <div>
      <form onSubmit={handleLoginSubmit}>
      <h1>Login</h1>
        <p>Name: </p>
        <input type="text" onChange={handleChange} value={currentText} />
        <p>Password: </p>
        <input type="text" onChange={handleChange} value={currentText} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
    password: state.password,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    handleChange,
    handleLoginSubmit
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);