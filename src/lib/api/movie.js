import client from './client';

// 영화목록
export const getMovieList = ({ page, token }) =>
  client.get(`/api/movie/list${page}`,{headers: { 'Authorization': `Bearer ${token}` }});

// 영화 상세정보
export const getMovieDetail = ({ movie_id, token }) =>
  client.get(`/api/movie/${movie_id}`,{headers: { 'Authorization': `Bearer ${token}` }});


