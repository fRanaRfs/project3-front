import './App.css';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout'
import "@fontsource/manrope";



import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectListPage from './pages/ProjectListPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import AnunciosPage from './pages/AnunciosPage'
import AnunciosDetails from './pages/AnunciosDetails'


import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute'; 
import AnonRoute from './components/AnonRoute'; 
import AnunciosComponent from './components/AnunciosComponent';
import SetAnunciosDetails from './components/DetallesAnuncio'


function App() {
	return (
		<div className="App" >
			
		
			<Navbar />

			<Routes>
				<Route exact path="/" component={HomePage} element={
					<Layout />
					}
				/>

			

			<Route exact path="/anuncios/details" component={AnunciosDetails} element={
				<SetAnunciosDetails />
				}
				/>
				<Route
					exact
					path="/projects"
					element={
						<PrivateRoute>
							<ProjectListPage />
						</PrivateRoute>
					}
				/>

				<Route 
					exact 
					path="/anuncios"
					component={AnunciosPage}
					element={
						<AnunciosComponent/>
					}
				/>
				
				<Route
					exact
					path="/projects/:id"
					element={
						<PrivateRoute>
							<ProjectDetailsPage />
						</PrivateRoute>
					}
				/>

				<Route
					exact
					path="/signup"
					element={
						<AnonRoute>
							<SignupPage />
						</AnonRoute>
					}
				/>
				<Route
					exact
					path="/login"
					element={
						<AnonRoute>
							<LoginPage />
						</AnonRoute>
					}
				/>
			</Routes>
			
			
					
		</div>
	);
}

export default App;
