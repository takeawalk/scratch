import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleSignupSubmit, handleChange } from '../actions/actions';

const SignUp = (props) => {
  const { handleSignupSubmit } = props;
  return (
    <div>
      <form onSubmit={handleSignupSubmit}>

      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);