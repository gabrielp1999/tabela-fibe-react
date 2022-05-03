import React from 'react';
import './Details.css';

function Details(props) {

  if(!props.show) {
    return null;
  }

  return (
    <div className='details'>

        <div className='div-icon'>
          <div className='icon-left' ><img alt='' src='https://cdn-icons-png.flaticon.com/128/54/54227.png'/></div>
          <div className='icon-right' ><img alt='' src='https://cdn-icons-png.flaticon.com/128/54/54366.png' /></div>
        </div>
  
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
    </div>
  )

}

export default Details;