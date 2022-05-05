import React,{ useEffect, useState } from 'react';
import ResearchField from "../ResearchField";
import Details from '../Details/Details';

import useFipe from '../../hooks/useFipe';
import useImageCar from '../../hooks/useImageCar';

function Main() {
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

  const fipe = useFipe();
  const imageCar = useImageCar();
  
  useEffect(()=> {
    fipe.getBrands().then((data) => {
      setBrands(data);
    });
  },[]);

  const brandChange = obj => {
    setSelectedBrand(obj);
    setSelectedModel(null);
    setYearSelected(null);
    setShow(false)
  }
  useEffect(() => {
    if(selectedBrand){
      fipe.getModels(selectedBrand.value).then((data) => {
        setModels(data);
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
      fipe.getYears(selectedBrand.value,selectedModel.value).then((data) => {
        setYears(data);
      })
    }
  }, [selectedModel]);

  const search = () => {
    if(yearSelected){
      setIsLoading(true);
      fipe.getCar(selectedBrand.value,selectedModel.value,yearSelected.value)
      .then((data) => {
        setCar(data);
        const term = `${data.Marca} ${data.Modelo} ${data.AnoModelo}`;
        searchImageCar(term);
        // setImgCar('http://1.bp.blogspot.com/-RtAyYJ-wDMI/UqHHITQj9dI/AAAAAAAAF5s/-MZKETwfxn0/s1600/carro_top2.png')
      })
      .catch(() => setIsLoading(false));
      setShow(true);
    }
  }

  const searchImageCar = (termSearch) => {
    if(termSearch) {
      imageCar.getImage(termSearch)
        .then((imageUrl) => {
          setImgCar(imageUrl);
          setIsLoading(false);
        }).catch(() => setIsLoading(false));
    }
  }

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
