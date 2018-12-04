import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleSignupSubmit, handleChange } from '../actions/actions';


const SignUp = (props) => {
  const { handleSignupSubmit, name, phone, password, handleChange } = props;
  const style = {
    WebkitTextSecurity: 'disc'
  }
  return (
    <div>
      <form onSubmit={e => handleSignupSubmit(e, name, phone, password)}>
        <h1>Sign Up</h1>
        <p>Name: </p>
        <input type="text" onChange={(e) => handleChange(e, 'name')} value={name} />
        <p>Phone Number: </p>
        <input type="text" onChange={(e) => handleChange(e, 'phone')} value={phone} />
        <p>Password: </p>
        <input type="text" style={style} onChange={(e) => handleChange(e, 'password')} value={password} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    name: state.signup.name,
    phone: state.signup.phone,
    password: state.signup.password,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    handleChange,
    handleSignupSubmit
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);