import axios from "axios";

const BASE_URL = "https://youtube-v3-alternative.p.rapidapi.com";

// const options = {
 
//   url: BASE_URL,

//   params: { regionCode: 'US',maxResults: '50'},

//   headers: {
//     'X-RapidAPI-Key': '5657010e6cmsh4c8e79a23c6b2acp1c4c9cjsn327ff7e1ffc8',
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   }
// };

const options = {
  url: BASE_URL,

  params: {  geo: 'US', lang: 'en'},

  headers: {
    'X-RapidAPI-Key': '5657010e6cmsh4c8e79a23c6b2acp1c4c9cjsn327ff7e1ffc8',
    'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
  }
};

export const fetchDataFromApi= async (url) =>{

    const {data} = await axios.get(`${BASE_URL}/${url}`,options)
    return data

} 
