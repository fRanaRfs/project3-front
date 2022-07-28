import { useState, useEffect } from 'react';
import { getProjectDetailsService } from '../services/project.services';
import DetallesCarousel from '../components/DetallesCarousel'
import { Link, useParams } from 'react-router-dom';
import AddTask from '../components/AddTask';
import TaskCard from '../components/TaskCard';

import { Layout } from 'antd';
import React from 'react';
import '../App.css'
import '../index.css';




const { Content, Sider } = Layout;

function ProjectDetailsPage(props) {
	const [ project, setProject ] = useState(null);
	const { id } = useParams();
	const projectId = id;

	const getProject = async () => {
		localStorage.getItem('authToken');
		try {
			const response = await getProjectDetailsService(id);
			setProject(response.data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getProject();
		// eslint-disable-next-line
	}, []);

	return (
		<div className="ProjectDetails">
			{project && (
				<div>
					
					
					<Layout>
      <Sider width={800}><img src={project.image} alt="img" width={800}/></Sider>
      <Content>
		
		<h1>Titulo del anuncio: {project.title}</h1>
	    <p>Descripción: {project.description}</p>
		<p>Descripción detallada del inmueble: {project.fulldescription}</p>
		<p>Disponibilidad: {project.date}</p>
		
	  
	  </Content>
      
    </Layout>
				</div>
				
			)}
			
			<AddTask refreshProject={getProject} projectId={projectId} />

			{project &&
				project.tasks.map((task) => {
					return <TaskCard key={task._id} {...task} />;
				})}

			<Link to="/anuncios">
				<button>Volver a anuncios</button>
			</Link>
			
		</div>
	);
}

export default ProjectDetailsPage;
