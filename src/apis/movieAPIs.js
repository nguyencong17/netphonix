import { API_KEY } from "@/utils/constants";
import { axiosClient } from "./axiosClient";


const movieAPIs = {
  getAllMovies(data) {
    const url = `movie/popular?api_key=${API_KEY}&language=en-US&page=${data}`
    return axiosClient.get(url);
  },
  getMovieById(id) {
    const url = `movie/${id}?api_key=${API_KEY}`
    return axiosClient.get(url);
  }
}

export default movieAPIs;