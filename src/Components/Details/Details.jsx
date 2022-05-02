import React from 'react';

function Details(props) {

  return (
    <div className='details'>

      {props.show && 
      <table className='table-style'>
        <tbody>
          <tr>
            <td className='key'>Mês de referência:</td>
            <td className='value'>{props.car.MesReferencia}</td>
          </tr>
          <tr>
            <td className='key'>Marca:</td>
            <td className='value'>{props.car.Marca}</td>
          </tr>
          <tr>
            <td className='key'>Modelo:</td>
            <td className='value'>{props.car.Modelo}</td>
          </tr>
          <tr>
            <td className='key'>Ano do modelo:</td>
            <td className='value'>{props.car.AnoModelo}</td>
          </tr>
          <tr>
            <td className='key'>Combustivel:</td>
            <td className='value'>{props.car.Combustivel}</td>
          </tr>
          <tr>
            <td className='key'>Codigo fipe:</td>
            <td className='value'>{props.car.CodigoFipe}</td>
          </tr>
          <tr>
            <td className='key'>Preço medio:</td>
            <td className='value'>{props.car.Valor}</td>
          </tr>
        </tbody>
      </table> }
    </div>
  )
}

export default Details;