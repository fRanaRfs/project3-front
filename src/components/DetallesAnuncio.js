import { Layout } from 'antd';
import React from 'react';
import '../App.css'
import '../index.css';
import DetallesCarousel from './DetallesCarousel'



const { Content, Sider } = Layout;

const setAnunciosDetails = () => (

<Layout>
      <Sider width={800}><DetallesCarousel /></Sider>
      <Content>Content</Content>
      
    </Layout>
  
);

export default setAnunciosDetails;