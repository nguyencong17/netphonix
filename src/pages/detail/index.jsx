import React, { useEffect, useState } from 'react';
import "../../app/_styles/globals.css";
import { RiLoaderFill } from "react-icons/ri";
import axios from 'axios';
import { CiStar } from "react-icons/ci";

const DetailPage = () => {
  const [movie, setMovie] = useState(null);
  const apiKey = 'dc3b868166ffb5e89b71f42b9958f8a7';
  const movieId = '1022789';

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching the movie data:', error);
      }
    };

    fetchMovie();
  }, []);

  if (!movie) return <div><RiLoaderFill size={16} className="text-muted animate-spin" /></div>;

  // GenreList
  const genreList = movie.genres.map(genre => genre.name).join(', ');

  return (
    <>
      <section className='detail-movie py-10'>
        <div className='container'>
          <div className='movie-thumb relative mb-[152px]'>
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} className='w-full max-h-[480px] rounded-[40px] object-cover' />

            <div className='absolute -bottom-[72px] left-20 p-10 rounded-3xl bg-[#20283E]/80 min-w-[560px] backdrop-blur-[12px]'>
              <div className='flex items-center gap-2 text-sm text-[#BEB7FB] mb-2'>
                MaileHereko
                <span>/</span>
                Movies
              </div>

              <div className='movie-name text-white text-[32px]'>{movie.belongs_to_collection.name}</div>
            </div>
          </div>

          <div className='flex flex-col lg:flex-row gap-4 lg:gap-[80px] lg:px-20'>
            <div className='movie-poster basis-full lg:basis-1/2'>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} Poster`} className='rounded-3xl' />
            </div>

            <div className='flex flex-col gap-6 basis-full lg:basis-1/2'>
              <div className='text-[#EBEEF5] text-2xl font-bold -tracking-[0.36px]'>{movie.original_title}</div>
              <div className=' text-[#8E95A9] text-xl'>{movie.overview}</div>
              <div className='bg-black/65 rounded-lg px-2 py-1 inline-flex w-[min-content]'>
                <div className='inline-flex items-center justify-center gap-1'>
                  <CiStar color='#FFAD49' />
                  <div>{movie.vote_average}</div>
                </div>
              </div>

              {/* type */}
              <div className='flex flex-col gap-2'>
                <div className='text-[#767E94]'>Type</div>
                <div className='text-[#C3C8D4] text-xl'></div>
              </div>

              <div className='flex flex-col gap-2'>
                <div className='text-[#767E94]'>Release Date:</div>
                <div className='text-[#C3C8D4] text-xl'>{movie.release_date}</div>
              </div>

              <div className='flex flex-col gap-2'>
                <div className='text-[#767E94]'>Run time</div>
                <div className='text-[#C3C8D4] text-xl'>{movie.runtime} min</div>
              </div>

              <div className='flex flex-col gap-2'>
                <div className='text-[#767E94]'>Genres</div>
                <div className='text-[#C3C8D4] text-xl'>{genreList}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DetailPage;