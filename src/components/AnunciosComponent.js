import { Card } from 'antd';
import React, { useEffect, useState } from 'react';
import {getAllProjectsService} from '../services/project.services'
import {Link} from 'react-router-dom'
const { Meta } = Card;




	//const [ title, setTitle ] = useState('');
	//const [ description, setDescription ] = useState('');
	//const [ image, setImage ] = useState();

    //const newAnuncio = { title, description, image };

		// Send the token through the request "Authorization" Headers

      const AnunciosComponent = () => {
      const [ title, setTitle ] = useState('');
	    const [ description, setDescription ] = useState('');
	    const [ image, setImage ] = useState();
      const [fulldescription, setFullDescription] = useState('');
      const [fecha, setFecha] = useState('');
      const [anunciosArr, setAnunciosArr] = useState([]);
      


        const anuncios = async() => {
            try {
                const response = await getAllProjectsService();
                setAnunciosArr(response.data)
                setTitle(response.data.title)
                setDescription(response.data.description)
                setImage(response.data.image)
                setFullDescription(response.data.fulldescription)
                setFecha(response.data.fecha)
            } catch (err) {
                console.log(err);
            }
        };  

        useEffect(() => {
            anuncios();
            // eslint-disable-next-line
        }, []);

        return (

		
            <>
    <div className='cards'>
    { anunciosArr?.map((anuncios) => {
        return (
          <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src={anuncios.image} />}
        >
          <Meta title={anuncios.title} description={anuncios.description} />
          <br></br>
          <Link to={`/projects/${anuncios._id}`}>Mas información</Link>
        </Card>

        
        

        
      ); 
    } )}
        

     </div>
     </>
          )};

          
          

export default AnunciosComponent;

/* <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={anuncios.image} />}
  >
    <Meta title={anuncios.title} description={anuncios.description} />
  </Card>
); */

/* <Card
            style={{
            maxWidth: 300,
            maxHeight: 300
            }}
            cover={
              <img
                alt="example"
                src={anuncios.image}
              />
            }
            
          >
            <Meta
              avatar={<Avatar src="https://emoji-uc.akamaized.net/orig/da/e992707498dcaecf8e11547df13c6b.png"/>}
              title={anuncios.title}
              description={anuncios.description}
            />
            <label>{anuncios.fulldescription}</label>
            <label> Posted by: {user.name}</label>
            
          </Card>) */
