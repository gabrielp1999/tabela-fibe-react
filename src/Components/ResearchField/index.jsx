import React,{ useEffect, useState } from 'react';
import Select from 'react-select';
import axios from 'axios';

function ResearchField() {
  const apiBase = `https://parallelum.com.br/fipe/api/v1`;
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null);
  const [years, setYears] = useState([]);
  const [yearSelected, setYearSelected] = useState(null);
  
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
    setYearSelected(null);
  }
  useEffect(() => {
    if(selectedBrand){
      axios.get(`${apiBase}/carros/marcas/${selectedBrand.value}/modelos`).then((response) => {
        if(response.data){
          const getModels = response.data.modelos.map(e => {
            return { value: e.codigo, label: e.nome };
          })
          setModels(getModels);
          
          const getYears = response.data.anos.map(e => {
            return { value: e.codigo, label: e.nome };
          })
          setYears(getYears);
        }
      })
    }
  },[selectedBrand]);
  
  const modelChange = obj => {
    setSelectedModel(obj);
    setYearSelected(null)
    }

     const yearChange = obj => {
      setYearSelected(obj);
     }
  useEffect(() => {
    if(selectedModel) {
      axios.get(`${apiBase}/carros/marcas/${selectedBrand.value}/modelos/${selectedModel.value}/anos`).then((response) => {
        if(response.data){
          const getYears = response.data.map(e => {
            return { value: e.codigo, label: e.nome };
          });
          console.log({getYears})
          setYears(getYears)
        }
      });
    }
  }, [selectedModel]);

  
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
        options={years}
        value={yearSelected}
        onChange={yearChange}
      />
    </div>    
  )
}

export default ResearchField;