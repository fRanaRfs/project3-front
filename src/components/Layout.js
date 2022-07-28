import { Layout } from 'antd';
import React from 'react';
import Carousel from './Carousel'
import '../App.css'
import '../index.css';
import giticon from '../images/githubicon.png'
import linkicon from '../images/linkeicon.png'


// .detailsdescription {
//   padding: 10px 250px;
//   font-size: 20px;
 
// }

// .detailstitle {
//   padding-top: 40px;
// }


const { Footer, Sider, Content } = Layout;

const setLayout = () => (

<Layout>
      <Sider width={800}><Carousel/></Sider>
      <Layout>
        <Content>
          <h1 className="parrafoLanding">Intercambia tu casa a corto plazo</h1>
          <br></br>
          <br></br>
          <br></br>
          <button className='buttonLandingPage'><a href="/signup">Descubre las oportunidades</a></button>
          <br></br>
          <br></br>
          <br></br>
          <button><a href="/login">Entra</a></button>
        </Content>
        <Footer className='layoutfooter'>
        <a href="https://github.com/fRanaRfs/" target="_blank" rel="noreferrer">
          Fran Rabassa Diaz
          <img src={giticon} alt="example" width={50} />
        </a>
        <a href="https://www.linkedin.com/in/franrabassadiaz/" target="_blank" rel="noreferrer">
            <img src={linkicon} alt="linkedinicon" width={50} />
        </a>
      
        <a href="https://github.com/danibachsl" target="_blank" rel="noreferrer">
          Daniel Bachs Lobo
          <img src={giticon} alt="example" width={50} />
        </a>
        <a href="https://www.linkedin.com/in/danielbachslobo/" target="_blank" rel="noreferrer">
            <img src={linkicon} alt="linkedinicon" width={50} />
        </a>
        </Footer>
      </Layout>
    </Layout>
  
);

export default setLayout;