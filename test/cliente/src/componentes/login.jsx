import React from "react";
import axios from "axios";

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = async(e) => {
    e.preventDefault();

    const datos = {
      correo : this.correo,
      contraseña : this.contraseña
    };

    const user = await axios.get(`http://localhost:5000/login/${this.correo}`);
    if (user.data === null) {
      document.getElementById("errorEmail").innerHTML = 'El usaurio no es valido, intente de nuevo.';
    } else {
      axios.post('http://localhost:5000/login', datos)
      .then( res => {
        if(res.data.message === 'Contrsaeña incorrecta'){
          document.getElementById("errorPass").innerHTML = 'La contraseña no es valida, intente de nuevo.';        
        } else {
          console.log("Contraseña correct");
        };       
    })
    .catch( err => {
      console.log(err);
    });
    };
  };
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Sign in</h1>
        <div className="social-container">
          <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
          <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
        </div>
        <span>Or use your account</span>
        <input type="email" placeholder="Email" onChange={(e) => (this.correo = e.target.value)}/>
        <label id="errorEmail"></label>
        <input type="password" placeholder="Password" onChange={(e) => (this.contraseña = e.target.value)} required/>
        <span id="errorPass"></span>
        <a href="#">Forgot your password?</a>
        <button type="submit">Sign in</button>
      </form>
    );
  };
};

export default Login;