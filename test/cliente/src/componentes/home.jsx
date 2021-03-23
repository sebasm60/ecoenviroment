import React from "react";
import './styles/home.css'
import Login from "./login"
import Signup from "./signup"

export class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="container-inicio">
                <div className="container-login" id="container">
                <div className="form-container sign-up-container">
                    <Signup/>
                </div>

                <div className="form-container sign-in-container">
                    <Login/>
                </div>

                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>
                                To Keep connected with us please login with you personal info.
                            </p>
                            <button className="ghost" id="signIn" onClick={() => {
                                document.getElementById('container').classList.remove("right-panel-active");
                            }}>Sign in</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>
                                Enter your personal details and start journey with us.
                            </p>
                            <button className="ghost" id="signUp" onClick={() => {
                                document.getElementById('container').classList.add("right-panel-active");
                                }}>Sign up</button>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
  };
};
