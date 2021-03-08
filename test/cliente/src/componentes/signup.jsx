import React from "react";
import axios from "axios";

export class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = async(e) => {
    e.preventDefault();

    const datos = {
      
      nombres : this.nombres,
      apellidos : this.apellidos,
      identificacion : this.identificacion ,
      correo : this.correo,
      contraseña : this.contraseña
    };

    const user = await axios.get(`http://localhost:5000/signup/${this.correo}`);
    
    if (user.data === this.correo) {
      console.log('El usuario ya existe');
    } else {
     axios.post('http://localhost:5000/signup', datos);
    }
   
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Create account</h1>
        <div className="social-container">
          <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
          <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
        </div>
        <span>Or use your mail for registration</span>
        <input type="text" placeholder="Names"  onChange={(e) => (this.nombres = e.target.value)}/>
        <input type="text" placeholder="Surnames" onChange={(e) => (this.apellidos = e.target.value)}/>
        <input type="text" placeholder="Identificacion" onChange={(e) => (this.identificacion = e.target.value)}/>
        <input type="email" placeholder="Email" onChange={(e) => (this.correo = e.target.value)}/>
        <input type="password" placeholder="Password" onChange={(e) => (this.contraseña = e.target.value)}/>                    
        <button type="submit">Sign up</button>
    </form>
    );
  }
}

export default Signup;
