import client from './client';

// 로그인
export const login = ({ email, password }) =>
  client.post('/api/auth/login', { email, password });

// 회원가입
export const register = ({ email, password, name }) =>
  client.post('/api/auth/signup', { method:"password", email, password, name });
