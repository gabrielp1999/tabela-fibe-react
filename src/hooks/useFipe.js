import axios from 'axios';
const apiBase = `https://parallelum.com.br/fipe/api/v1`;

const useFipe = () => {

  const getBrands = async () => {
    const response = await axios.get(`${apiBase}/carros/marcas`);
    if(response.data){
      const brands = response.data.map(e => {
        return { value: e.codigo, label: e.nome };
      })
      return brands;
    }
    return [];

  }

  const getModels = async (brandValue) => {
    const response = await axios
    .get(`${apiBase}/carros/marcas/${brandValue}/modelos`);

    if(response.data){
      const models = response.data.modelos.map(e => {
        return { value: e.codigo, label: e.nome };
      })
      return models;
    }
    return [];
  }

  const getYears = async (brandValue, modelValue) => {
    const response = await axios
    .get(`${apiBase}/carros/marcas/${brandValue}/modelos/${modelValue}/anos`);

    if(response.data){
      const years = response.data.map(e => {
        return { value: e.codigo, label: e.nome };
      });
      return years;
    }
    return [];
  }

  const getCar = async (brandValue, modelValue, yearsValue) => {
    const response = await axios.get(`${apiBase}/carros/marcas/${brandValue}/modelos/${modelValue}/anos/${yearsValue}`);
    if(response.data){
      return response.data;
    }
    return null;
  }

  return {
    getBrands,
    getModels,
    getYears,
    getCar
  }

}

export default useFipe;