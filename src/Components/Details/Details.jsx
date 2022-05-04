import React from 'react';
import './Details.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Details(props) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  if(!props.show) {
    return null;
  }

  return (

    
      <div className='details'>
         <Slider className='sliderBiel' {...settings}>
        <div className='div-info'>
          <div className='card'>
            <div className='key'>Mês de referência:</div>
            <div className='value'>{props.car.MesReferencia}</div>
          </div>
          <div className='card'>
            <div className='key'>Marca:</div>
            <div className='value'>{props.car.Marca}</div>
          </div>
          <div className='card'>
            <div className='key'>Modelo:</div>
            <div className='value'>{props.car.Modelo}</div>
          </div>
          <div className='card'>
            <div className='key'>Ano do modelo:</div>
            <div className='value'>{props.car.AnoModelo}</div>
          </div>
          <div className='card'>
            <div className='key'>Combustivel:</div>
            <div className='value'>{props.car.Combustivel}</div>
          </div>
          <div className='card'>
            <div className='key'>Codigo fipe:</div>
            <div className='value'>{props.car.CodigoFipe}</div>
          </div>
          <div className='card card-value-car'>
            <div className='key'>Preço medio:</div>
            <div className='value'>{props.car.Valor}</div>
          </div>
        </div> 
        <div className='div-img'>
          <img src="http://1.bp.blogspot.com/-RtAyYJ-wDMI/UqHHITQj9dI/AAAAAAAAF5s/-MZKETwfxn0/s1600/carro_top2.png" alt="" />
        </div>

      </Slider>
    </div>

  )

}

export default Details;