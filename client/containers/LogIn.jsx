import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleLoginSubmit, handleChange } from '../actions/actions';

const LogIn = (props) => {
  const { currentText, handleLoginSubmit } = props;
  return (
    <div>
      <form onSubmit={handleLoginSubmit}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);