import axios from "axios";

const API_KEY = "1080c3be79bab5dcb2e411e642e04de9";

axios.defaults.baseURL = "https://api.themoviedb.org/";

export async function fetchMovies(query) {
  const { data } = await axios.get("/3/trending/movie/week", {
    params: {
      api_key: API_KEY,
      query: query,
    },
  });
  return data;
}
