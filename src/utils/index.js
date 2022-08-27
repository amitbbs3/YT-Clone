import axios from 'axios';

export const BASE_URL = 'https://www.googleapis.com/youtube/v3';
export const options = {
  params: {
    maxResults: 50,
  },
};

export const axiosGetReq = async (url) => {
  const key = ""; // add when testing 
  console.log(key);
  const res = await axios.get(`${BASE_URL}/${url}&key=${key}`, options);
  return res.data;
};
