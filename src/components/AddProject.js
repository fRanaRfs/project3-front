import { useState } from 'react';
import { addNewProjectService } from '../services/project.services.js';
function AddProject(props) {
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ image, setImage ] = useState();
    const [fulldescription, setFullDescription] = useState('');
    const [date, setDate] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newProject = { title, description, image, fulldescription, date };
        console.log('Date', date)
        // Send the token through the request "Authorization" Headers
        try {
            await addNewProjectService(newProject);
            setTitle('');
            setDescription('');
            setImage('');
            setFullDescription('');
            setDate('');
            props.refreshProjects();
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Añadir anuncio</h3>
          <div className="form-group mt-3">
		  	<label>Título:</label>
			<input type="text" name="title" placeholder='Título del anuncio' value={title} onChange={(e) => setTitle(e.target.value)} className="form-control mt-1"/>
            <label>Descripción:</label>
            <textarea
					placeholder='Descripción breve sobre el inmueble. Ej: Bonita casa a las afueras de Reus'
                    type="text"
					className="form-control mt-1"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>URL de Imagen:</label>
            <input type="url" name="image" placeholder='Añade una imagen via URL' onChange={(e) => setImage(e.target.value)} className="form-control mt-1"  />
          </div>
		  <div className="form-group mt-3">
            <label>Descripción detallada:</label>
            <textarea type="text" name="fulldescription" placeholder='Habitaciones, metros cuadrados, piscina, etc...' value={fulldescription} onChange={(e) => setFullDescription(e.target.value)} className="form-control mt-1"  />
          </div>
		  <div className="form-group mt-3">
            <label>Disponible desde-hasta:</label>
            <input type="text" name="date" placeholder='dd/mm/aa - dd/mm/aa' value={date} onChange={(e) => setDate(e.target.value)} className="form-control mt-1"  />
          </div>
		  <br></br>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">Añadir</button>
          </div>
        </div>
      </form>
    </div>
    );
}
export default AddProject;