import axios from "axios";

const API_KEY = "1080c3be79bab5dcb2e411e642e04de9";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDgwYzNiZTc5YmFiNWRjYjJlNDExZTY0MmUwNGRlOSIsIm5iZiI6MTcyMjY5NTUwMS45OTU2MjYsInN1YiI6IjY2YWQyOWI2NWZjZTYxYjVjMTYzMjYwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5SKriPoL2UoMoNAkprHtr09AUfQX9QtrYLCX_gL7vBk"; 

// Додайте заголовок Authorization до всіх запитів
axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${ACCESS_TOKEN}`;
  return config;
});

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

  async fetchMovieCast(movie_id) {
    const { data } = await axios.get(`/3/movie/${movie_id}/credits`, {
      params: {
        api_key: API_KEY,
      },
    });
    return data;
  },

  async fetchMovieReviews(movie_id) {
    const { data } = await axios.get(`/3/movie/${movie_id}/reviews`, {
      params: {
        api_key: API_KEY,
      },
    });
    return data;
  },
};

export default api;
