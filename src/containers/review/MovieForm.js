import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getMovieList, getMovieDetail } from '../../modules/movie';
import Movies from '../../components/review/MoviesUI';

const MovieForm = ({ history }) => {
  const dispatch = useDispatch();
  const { movie_list, detail, token } = useSelector(({ auth, movie }) => {
    if(auth.auth) {
      return {
        movie_list: movie.movie_list,
        detail: movie.detail,
        token: auth.auth.token,
      }
    }
    return {movie_list: movie.movie_list, detail: movie.detail}
  });

  useEffect(() => {
    console.log('getmovelist token',token)
    dispatch(getMovieList({page:1, token}));
  }, [dispatch]);

  return (
    <Movies
      history={history}
      movie_list={movie_list}
    />
  );
};

export default withRouter(MovieForm);