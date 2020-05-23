
import React from "react";
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { loginRequest } from "../actions";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: linear-gradient(
      45deg,
      rgba(4, 210, 200, 1) 0%,
      rgba(48, 157, 184, 1) 100%
    );
`;

  const LoginBox = styled.div`
    height: 640px;
    width: 536px;
    border-radius: 8px;
    -webkit-backdrop-filter: blur(26px);
    backdrop-filter: blur(26px);
    box-shadow: 0 1px 47px 0 rgba(0, 0, 0, 0.24);
    background-color: $color-White;
    border-top: 16px solid $color-aquamarine;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 50px;
    justify-content: center;
    background: #fff;
  `;

class LoginForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state={
      userName: '',
      password: '',
    }
  }
  
  updateValue  (e, type) {
    this.setState({
      [type]: e.target.value
    })
  }

  loginUser(){
    const {userName, password} =this.state
    if(userName==="test" && password=== "test1234" ){
      this.props.dispatch(loginRequest(this.state))
    }
  }

  render() {
    console.log(this.props)
    
    return(
      <article>
        <Helmet>
          <title>Survey</title>
        </Helmet>
        <Container>
          <LoginBox className="login-container">
            <p className="login-text heading_main"><span>LOGIN</span></p>
            <i className="LoginText">Let's get you started</i>
            <div className="fields">
              <div className="field is-fullwidth ">
                <div className="control has-icons-left has-icons-right">
                  <input
                    name="email"
                    className="input"
                    style={{'width': '100%','margin':'1px'}}
                    onInput={(e)=>this.updateValue(e, "userName")}
                    type="email"
                    placeholder="Email"
                    autoFocus
                    onKeyPress={event => {
                      if (event.key === 'Enter') {
                      console.log("Enter Pressed")
                      }
                    }}
                  />
                </div>
              </div>

              <div className="field is-fullwidth ">
                <div className="control has-icons-left has-icons-right">
                  <input
                    name="password"
                    className="input"
                    style={{'width': '100%','margin':'1px'}}
                    type="password"
                    placeholder="Password"
                    onInput={(e) => this.updateValue(e, "password")}
                    onKeyPress={event => {
                      console.log("Enter Pressed")
                    }}
                  />
                </div>
              </div>

              <button
                type="button"
                className="button is-fullwidth "
                onClick={() => this.loginUser()}
                onKeyPress={event => {
                  console.log("Enter Pressed")
                }}
              >
                Login
              </button>
            </div>
            
          </LoginBox>
        </Container>
      </article>
    )
  };
}

export default LoginForm;