import React, { useEffect, useState } from 'react';
import GlobalApi from '../Services/GlobalApi';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";

const Slider = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = async () => {
    try {
      const resp = await GlobalApi.getTrendingVideos();
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    } catch (error) {
      console.error("Failed to fetch trending movies:", error);
    }
  };

  return (
    <div>
      {movieList.map((item, index) => (
        <img 
          key={index}
          src={`${IMAGE_BASE_URL}${item.poster_path}`} 
          alt={item.title} 
          className='min-w-full h-[310px] ' 
        />
      ))}
    </div>
  );
};

export default Slider;
