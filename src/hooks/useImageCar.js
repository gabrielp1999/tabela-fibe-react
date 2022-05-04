import { google } from "googleapis";

const useImageCar = () => {
  // const customSearch = google.customsearch("v1");

  const getImage = async (termSearch) => {
    console.log({ termSearch });
    return "https://cdn.autopapo.com.br/box/uploads/2020/10/08145625/carro_recusado_rejeitado_silhueta_montagem_carimbo-shutterstock_605341853-732x488.jpg"

    // const response = await customSearch.cse.list({
    //   auth: process.env.API_KEY,
    //   cx: process.env.CSE,
    //   q: `carro ${termSearch}`,
    //   searchType: "image",
    //   num: 1,
    // });

    // if (response.data.items) {
    //   const imageUrl = response.data.items[0].link;
    //   return imageUrl;
    // } else {
    //   return "https://cdn.autopapo.com.br/box/uploads/2020/10/08145625/carro_recusado_rejeitado_silhueta_montagem_carimbo-shutterstock_605341853-732x488.jpg";
    // }
  }

  return { getImage }
}

export default useImageCar;