import React from 'react';

export const ListMovie = (props) => {
  console.log(props);
  const {listmovie} = props;
  console.log(listmovie);
  return (
    <div>
    <div className='grid grid-cols-5 gap-4'>
      {listmovie && listmovie.map((movie) => (
        <div key={movie.id} className='p-4 bg-[#20283E] rounded-[8px]'>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          <h1>{movie.title}</h1>
        </div>
      ))}
    </div>
    </div>
  );
};