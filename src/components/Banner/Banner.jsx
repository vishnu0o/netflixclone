import React, { useState, useEffect } from 'react';
import './Banner.css';
import axios from '../../axios';
import { API_KEY, IMG } from '../../constants/constants';

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovie();

    const interval = setInterval(() => {
      fetchMovie();
    }, 5000); // Change the image every 5 seconds (adjust this value as needed)

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const fetchMovie = () => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        const movies = response.data.results;
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        setMovie(randomMovie);
      })
      .catch((error) => {
        console.error('Error fetching movie:', error);
      });
  };

  return (
    <div className='test'>
      <div
        style={{ backgroundImage: `url(${movie ? IMG + movie.backdrop_path : ''})` }}
        className={`banner ${movie ? 'show' : 'hide'}`}   
      >
        <div className='content'>
          <h1 className={`title ${movie ? 'show':'hide'}`}>{movie ? movie.title : ''}</h1>
          <div className='banner_buttons'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>
          </div>
          <h1 className={`description ${movie? 'show':'hide'}`}>{movie ? movie.overview : ''}</h1>
        </div>
        <div className='fade'></div>
      </div>
    </div>
  );
}

export default Banner;
