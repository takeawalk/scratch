import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleSignupSubmit, handleChange } from '../actions/actions';

const SignUp = (props) => {
  const { handleSignupSubmit, name, phone, password, handleChange } = props;
  return (
    <div>
      <form onSubmit={handleSignupSubmit}>
        <h1>Sign Up</h1>
        <p>Name: </p>
        <input type="text" onChange={(e) => handleChange(e, 'name')} value={name} />
        <p>Phone Number: </p>
        <input type="text" onChange={(e) => handleChange(e, 'phone')} value={phone} />
        <p>Password: </p>
        <input type="text" onChange={(e) => handleChange(e, 'password')} value={password} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
    phone: state.phone,
    password: state.password,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    handleChange,
    handleSignupSubmit
  }, dispatch)
}



export default connect(mapStateToProps, mapDispatchToProps)(SignUp);