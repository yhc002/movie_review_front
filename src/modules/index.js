import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects'
import auth,{authSaga} from './auth';
import movie,{movieSaga} from './movie';
import loading from './loading';



const appReducer = combineReducers({
  auth,
  movie,
  loading,
});

export function* rootSaga() {
  yield all(
    [ authSaga(), movieSaga() ]
  )
}

const rootReducer = (state, action) => {
  if (action.type === 'auth/LOGOUT') {
    state = undefined
    localStorage.removeItem('auth')
    localStorage.removeItem('login_date')
  }

  return appReducer(state, action)
}

export default rootReducer;