import React,{ useEffect, useState } from 'react';
import Select from 'react-select';
import axios from 'axios';

function Selects() {
  const apiBase = `https://parallelum.com.br/fipe/api/v1`;
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null);
  
  useEffect(()=> {
    axios.get(`${apiBase}/carros/marcas`).then((response) =>{
      if(response.data){
        const getBrands = response.data.map(e => {
          return { value: e.codigo, label: e.nome };
        })
        setBrands(getBrands);
      }
    })
  },[]);

  const brandChange = obj => {
    setSelectedBrand(obj);
    setSelectedModel(null);
  }

  useEffect(() => {
    if(selectedBrand){
      axios.get(`${apiBase}/carros/marcas/${selectedBrand.value}/modelos`).then((response) => {
        if(response.data){
          const getModels = response.data.modelos.map(e => {
            return { value: e.codigo, label: e.nome };
          })
          setModels(getModels)
        }
      })
    }
  },[selectedBrand]);

  const modelChange = obj => {
    setSelectedModel(obj);

  }
  useEffect(() => {
    if(selectedModel){
      axios.get(`${apiBase}/carros/marcas/${selectedBrand?.value}/modelos/${selectedModel?.value}/anos`).then((response) =>{
        if(response.data){
          console.log(response.data)      
        }
      })
    }
  },[selectedModel]);
  
  
  return (
    <div>
      <Select 
        options={brands} 
        className='select' 
        placeholder='Buscar Marca'
        onChange={brandChange}
      />
      <Select
        options={models}
        className='select' 
        placeholder='Buscar Modelo'
        onChange={modelChange}
        value={selectedModel}
      />
      <Select
        className='select' 
        placeholder='Buscar Ano'
      />
    </div>    
  )
}

export default Selects;