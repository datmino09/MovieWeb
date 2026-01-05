import axios from 'axios';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || '';

export const axiosInstance = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' },
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (err) => {
    const error = err.response?.data || { message: err.message };
    return Promise.reject(error);
  }
);

export async function getMovies() {
  const { data } = await axiosInstance.get('/movies');
  return data;
}

export async function getTrending() {
  const { data } = await axiosInstance.get('/movies/trending');
  return data;
}

export async function searchMovies(query) {
  const { data } = await axiosInstance.get('/movies', { params: { search: query } });
  return data;
}

export default axiosInstance;
