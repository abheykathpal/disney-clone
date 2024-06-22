import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import HrMovieCard from './HrMovieCard';
function MovieList({genreId,index_}) {
    
    const screenWidth=window.innerWidth;
    const [movieList,setMovieList]=useState([]);
    const elementRef=useRef(null);
        useEffect(()=>{
            getMovieByGenreId();
        },[])


    const getMovieByGenreId=()=>{
           GlobalApi.getMovieByGenreId(genreId).then(resp=>{
          // console.log(resp.data.results)
              setMovieList(resp.data.results)
          })
         }

         const sliderRight=(element)=>{
            element.scrollLeft+=screenWidth-110
          }
          const sliderLeft=(element)=>{
            element.scrollLeft-=screenWidth-110
          }
    
  return (
    <div className='relative'>
        <HiChevronLeft className={`hidden md:block text-white text-[30px] absolute mx-6 cursor-pointer ${index_%3==0?'mt-[80px]':'mt-[150px]'} `} onClick={()=>sliderLeft(elementRef.current)}/>
        <HiChevronRight className={`hidden md:block text-white text-[30px] absolute mx-6 cursor-pointer right-0 ${index_%3==0?'mt-[80px]':'mt-[150px]'}`} onClick={()=>sliderRight(elementRef.current)}/>
    <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-5 px-3 pb-5'>
          
        {movieList.map((item,index)=>(
            <>
             {index_%3==0?<HrMovieCard movie={item}/>: <MovieCard movie={item}/>}
            </>
        ))}
    </div>
    </div>
  )
}

export default MovieList