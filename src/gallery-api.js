import axios from "axios";

const API_KEY = "1080c3be79bab5dcb2e411e642e04de9";

axios.defaults.baseURL = "https://api.themoviedb.org/";

const api = {
  async fetchTrendMovies() {
    const { data } = await axios.get("/3/trending/movie/day", {
      params: {
        api_key: API_KEY,
      },
    });
    return data;
  },

  async fetchMovies(query) {
    const { data } = await axios.get("/3/search/movie", {
      params: {
        api_key: API_KEY,
        query: query,
      },
    });
    return data;
  },

  async fetchMovieById(movie_id) {
    const { data } = await axios.get(`/3/movie/${movie_id}`, {
      params: {
        api_key: API_KEY,
      },
    });
    return data;
  },
};



export default api;


