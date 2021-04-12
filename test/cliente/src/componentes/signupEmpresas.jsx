import React from "react";
import axios from "axios";

export class SignupEmpresas extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = async(e) => {
    e.preventDefault();

    const datos = {
      
      nombre : this.nombre,
      nit : this.nit ,
      correo : this.correo,
      contraseña : this.contraseña
    };

    const user = await axios.get(`http://localhost:5000/SignupEmpresas/${this.correo}`);
    
    if (user.data === this.correo) {
      console.log('El usuario ya existe');
    } else {
     axios.post('http://localhost:5000/SignupEmpresas', datos);
    }
   
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Create account</h1>
        <input type="text" placeholder="Name"  onChange={(e) => (this.nombre = e.target.value)}/>
        <input type="text" placeholder="Nit" onChange={(e) => (this.nit = e.target.value)}/>
        <input type="email" placeholder="Email" onChange={(e) => (this.correo = e.target.value)}/>
        <input type="password" placeholder="Password" onChange={(e) => (this.contraseña = e.target.value)}/>                    
        <button type="submit">Sign up</button>
    </form>
    );
  }
}

export default SignupEmpresas;
