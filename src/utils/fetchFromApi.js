const axios = require("axios");

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const API_KEY = import.meta.env.REACT_APP_RAPID_API_KEY;

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
