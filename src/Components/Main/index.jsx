import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import ResearchField from "../ResearchField";
import Details from '../Details/Details';

function Main() {
  const apiBase = `https://parallelum.com.br/fipe/api/v1`;
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null);
  const [years, setYears] = useState([]);
  const [yearSelected, setYearSelected] = useState(null);
  const [car, setCar] = useState({});
  const [show, setShow] = useState(false);
  
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
      axios
      .get(`${apiBase}/carros/marcas/${selectedBrand.value}/modelos`)
      .then((response) => {
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
      axios
      .get(`${apiBase}/carros/marcas/${selectedBrand.value}/modelos/${selectedModel.value}/anos`)
      .then((response) => {
        if(response.data){
          const getYears = response.data.map(e => {
            return { value: e.codigo, label: e.nome };
          });
          setYears(getYears)
        }
      });
    }
  }, [selectedModel]);

  const search = () => {
    if(yearSelected){
      axios
      .get(`${apiBase}/carros/marcas/${selectedBrand.value}/modelos/${selectedModel.value}/anos/${yearSelected.value}`)
      .then((response) => setCar(response.data));
      setShow(true);
    }
  }

  const clean = () => {
    setSelectedBrand(null);
    setSelectedModel(null);
    setYearSelected(null);
  }

  return(
    <section className='main'>
       <Details car={car} show={show}/>
       <ResearchField 
         brands={brands}
         selectedBrand={selectedBrand}
         models={models}
         years={years}
         yearSelected={yearSelected}
         selectedModel={selectedModel}
         yearChange={yearChange}
         modelChange={modelChange}
         brandChange={brandChange}
         clean={clean}
         search={search}
       />
    </section>
  )
}

export default Main;