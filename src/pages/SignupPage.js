import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { signupService } from '../services/auth.services';


function SignupPage(props) {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ name, setName ] = useState('');
  const navigate = useNavigate();
	const [ errorMessage, setErrorMessage ] = useState(undefined);

	const handleEmail = (e) => setEmail(e.target.value);
	const handlePassword = (e) => setPassword(e.target.value);
	const handleName = (e) => setName(e.target.value);

	const handleSignupSubmit = async (e) => {
		e.preventDefault();
		// Create an object representing the request body
		const requestBody = { email, password, name };
    try{
      await signupService(requestBody);
      navigate("/login");
    }catch(err){
      if(err.response?.status === 400){
        setErrorMessage(err.response.data.errorMessage);
        console.log(errorMessage);
      }
    }
  };

	return (
		<div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSignupSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Registrarse</h3>
          <div className="form-group mt-3">
            <label>Nombre completo</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
			  value={name} 
			  onChange={handleName}
            />
          </div>
          <div className="form-group mt-3">
            <label>Dirección de email</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
			  value={email} 
			  onChange={handleEmail}
            />
          </div>
          <div className="form-group mt-3">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
			  value={password} 
			  onChange={handlePassword}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Entrar
            </button>
          </div>
          <p className="text-center mt-2">
            ¿Ya tienes cuenta? <Link to={'/login'}> Entrar</Link>
          </p>
        </div>
      </form>
    </div>
	);
}

export default SignupPage;
