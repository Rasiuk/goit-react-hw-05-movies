import axios from 'axios';
const BASE_URL = `https://api.themoviedb.org`;
const API_KEY = `203660b5f38f4dd17691a30662d2c12a`;
//api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
export const getPopularFilms = async () => {
  try {
    return await axios.get(
      `${BASE_URL}/3/trending/all/day?api_key=${API_KEY} `
    );
  } catch (error) {
    throw new Error(error);
  }
};

//api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
export const searchMovies = async searchName => {
  try {
    return await axios.get(
      `${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchName}`
    );
  } catch (error) {
    throw new Error(error);
  }
};
//api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
export const getDetailFilm = async id => {
  try {
    return await axios.get(
      `${BASE_URL}/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
  } catch (error) {
    throw new Error(error);
  }
};
