import { useState, useEffect } from 'react';
import { getProjectDetailsService } from '../services/project.services';
import { Link, useParams } from 'react-router-dom';
import AddTask from '../components/AddTask';
import TaskCard from '../components/TaskCard';
import DetailsDate from '../components/DetailsDate'

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
      <Sider width={800}><img src={project.image} alt="img" width={900} height={750}/></Sider>
      <Content>

		<div className='detailspage'>
		<div className='detailstitle'>
		<h1>{project.title}</h1>
		</div>
		
		<br></br>
		<br></br>
		<br></br>
		<br></br>
	    <h4>{project.description}</h4>
		<br></br>
		
		<div className='detailsdescription'>
		<p>{project.fulldescription}</p>
		</div>
		<br></br>
		
		<DetailsDate date={project.date}/>
		</div>
		<br></br>
				
		<button>Reservar</button>
	  
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
