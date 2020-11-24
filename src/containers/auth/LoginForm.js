import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeField, initializeForm, login } from '../../modules/auth';
import Login from '../../components/auth/LoginUI';

const LoginForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, my, loading } = useSelector(({ auth, loading }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    loading: loading['brand/SELF'],
  }));
  // 인풋 변경 이벤트 핸들러
  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };

  // 폼 등록 이벤트 핸들러
  const onSubmit = () => {
    
    const { email, password } = form;
    dispatch(login({ email, password }));
  };

  // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      setError('로그인 실패');
      return;
    }
    if (auth) {
      setError(null);
      try{
        localStorage.setItem('auth',JSON.stringify(auth));
        localStorage.setItem('login_date',new Date());
      } catch(e) {
        console.log('localStorage is not working');
      }
      history.push('/movies');
    }
  }, [auth, authError]);

  // useEffect(() => {
  //   if(!loading){
  //     if(auth && my){
  //       history.push('/product');
  //     }
  //   }
  // }, [loading]);

  return (
    <Login
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      history={history}
    />
  );
};

export default withRouter(LoginForm);