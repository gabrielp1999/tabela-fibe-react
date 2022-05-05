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
  const [imgCar, setImgCar] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
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
    setShow(false)
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
    setShow(false);
  }

  const yearChange = obj => {
    setYearSelected(obj);
    setShow(false);
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
      setIsLoading(true);
      axios
      .get(`${apiBase}/carros/marcas/${selectedBrand.value}/modelos/${selectedModel.value}/anos/${yearSelected.value}`)
      .then((response) => {
        setCar(response.data);
        const term = `${response.data.Marca} ${response.data.Modelo} ${response.data.AnoModelo}`;
        // searchImageCar(term);
        setImgCar('http://1.bp.blogspot.com/-RtAyYJ-wDMI/UqHHITQj9dI/AAAAAAAAF5s/-MZKETwfxn0/s1600/carro_top2.png')
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
      setShow(true);
    }
  }

  // const searchImageCar = (termSearch) => {
  //   if(termSearch) {
  //     axios
  //       .get(`https://tabela-fipe-flipggs.vercel.app/api/image?q=${termSearch}`)
  //       .then((response) => {
  //         setImgCar(response.data.imageUrl);
  //       });
  //   }
  // }

  const clean = () => {
    setSelectedBrand(null);
    setSelectedModel(null);
    setYearSelected(null);
    setShow(false);
  }

  return(
    <section className='main'>
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
       <Details
        isLoading={isLoading}
        imgCar={imgCar}
        car={car} 
        show={show}
      />
    </section>
  )
}

export default Main;


/// 1024 px desktop 
/// 768 tablet
// conteudo centralizado e com titulo