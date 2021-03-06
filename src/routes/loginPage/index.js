import React from "react";
import { connect } from "react-redux";
import { loginReducer } from "./reducer";
import loginSaga from "./saga";
import './style.scss';
import LoginForm from "./components/LoginForm";
import { useInjectReducer }  from '../../reducers/injectReducer';
import { useInjectSaga } from '../../saga/injectSaga';

const Container = (props) =>{

  useInjectReducer({ key: 'loginReducer', reducer: loginReducer });
  useInjectSaga({ key: 'loginSaga', saga: loginSaga });

  return(
  	<div>
      <LoginForm  {...props} />
    </div>
  )
}


function mapStateToProps (props) {
  return {
    //user: props.loginReducer.user
    ...props,
  }
}
export default connect(mapStateToProps)(Container);

