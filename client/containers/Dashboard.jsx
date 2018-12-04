import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleSignupSubmit, handleChange } from '../actions/actions';

const Dashboard = (props) => {
  const { userName, goals } = props;
  return (
    <div>
      <form >
        <h1>Dashboard</h1>
        <p>Exercise: </p>

        <p>Sleep: </p>

        <p>Meditate/Walk: </p>

        <p>Stress Level: </p>

      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userName: state.userName,
    // Excercise: state.goals.Excercise,
    // Sleep: state.goals.Sleep,
    // Stress: state.goals['Stress Level'],
    // MeditateWalk: state.goals['Meditate/Walk'],
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    handleChange,
    handleSignupSubmit
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);