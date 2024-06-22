import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = 'a10a25a39d209f699dee538df8c78580';

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=a10a25a39d209f699dee538df8c78580';

const getTrendingVideos = () => {
  return axios.get(`${movieBaseUrl}/trending/movie/day?api_key=${api_key}`);
};

const getMovieByGenreId=(id)=>axios.get(movieByGenreBaseURL+"&with_genres="+id)


export default {
  getTrendingVideos,
  getMovieByGenreId
}
