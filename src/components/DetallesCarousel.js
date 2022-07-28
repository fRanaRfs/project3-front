import React from 'react';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';

const contentStyle = {
  height: 'auto',
  color: '#fff',
  lineHeight: 'auto',
  textAlign: 'center',
  background: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex'
};

const detallesCarousel = () => (
  <Carousel>
    <div>
      <h3 style={contentStyle}><img src="https://www.apartamentosturisticosgranada.info/templates/yootheme/cache/apartamentos_en_granada_centro_slide2-aca1659d.jpeg" alt="img" className='carouselImage'/></h3>
    </div>
      
  </Carousel>
);

export default detallesCarousel;