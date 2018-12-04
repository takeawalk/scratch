import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleLoginSubmit, handleLoginChange } from '../actions/actions';

const LogIn = (props) => {
  const { handleLoginChange, handleLoginSubmit, name, password } = props;
  const style = {
    WebkitTextSecurity: 'disc'
  }
  return (
    <div>
      <form onSubmit={handleLoginSubmit}>
        <h1>Login</h1>
        <p>Name: </p>
        <input type="text" onChange={(e) => handleLoginChange(e, 'nameL')} value={name} />
        <p>Password: </p>
        <input type="text" style={style} onChange={(e) => handleLoginChange(e, 'password')} value={password} />
        <button type="submit" id="login">Submit</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    name: state.login.name,
    password: state.login.password,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    handleLoginChange,
    handleLoginSubmit
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);