import { useState, useContext } from 'react';
// import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './../context/auth.context';
import { loginService } from '../services/auth.services';

function LoginPage(props) {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ errorMessage, setErrorMessage ] = useState(undefined);
	const navigate = useNavigate();
	const { logInUser } = useContext(AuthContext);

	const handleEmail = (e) => setEmail(e.target.value);
	const handlePassword = (e) => setPassword(e.target.value);

	const handleLoginSubmit = async (e) => {
		e.preventDefault();
		const requestBody = { email, password };

		try {
			const response = await loginService(requestBody);
			
			const token = response.data.authToken;
			logInUser(token);
			navigate('/');
		} catch (err) {
			const errorDescription = err?.response?.data?.message;
			setErrorMessage(errorDescription);
		}
	};

	return (
		<div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleLoginSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Entrar</h3>
          <div className="form-group mt-3">
            <label>Dirección de email</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Introduce un email"
			  value={email} 
			  onChange={handleEmail}
            />
          </div>
          <div className="form-group mt-3">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Introduce la contraseña"
			  value={password} 
			  onChange={handlePassword}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Siguiente
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <Link to={'/signup'}> Sign Up</Link>
          </p>
        </div>
      </form>
    </div>
	);
}

export default LoginPage;





/* <div className="LoginPage">
			<h1>Login</h1>

			<form onSubmit={handleLoginSubmit}>
				<label>Email:</label>
				<input type="text" name="email" value={email} onChange={handleEmail} />

				<label>Password:</label>
				<input type="password" name="password" value={password} onChange={handlePassword} />

				<button type="submit">Login</button>
			</form>
			{errorMessage && <p className="error-message">{errorMessage}</p>}

			<p>Don't have an account yet?</p>
			<Link to={'/signup'}> Sign Up</Link>
		</div> */