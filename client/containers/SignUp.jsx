import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleSignupSubmit, handleChange } from '../actions/actions';

const SignUp = (props) => {
  const { handleSignupSubmit, currentText } = props;
  return (
    <div>
      <form onSubmit={handleSignupSubmit}>
        <h1>Sign Up</h1>
        <p>UserID: </p>
        <input type="text" onChange={handleChange} value={currentText} />
        <p>Phone Number: </p>
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
    userID: state.userID,
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