import axios from 'axios';

const useImageCar = () => {
  const getImage = async (termSearch) => {
    const response = await axios.get(`https://tabela-fipe-flipggs.vercel.app/api/image?q=${termSearch}`);
    if(response.data){
      return response.data.imageUrl;
    }
    return '';
  }
  return {
    getImage,
  }
}

export default useImageCar;