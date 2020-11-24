import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes
} from '../lib/CreateRequestSaga';
import * as movieAPI from '../lib/api/movie';

const [GET_MOVIE_LIST, GET_MOVIE_LIST_SUCCESS, GET_MOVIE_LIST_FAILURE] = createRequestActionTypes(
    'movie/LIST'
);
  
const [GET_MOVIE_DETAIL, GET_MOVIE_DETAIL_SUCCESS, GET_MOVIE_DETAIL_FAILURE] = createRequestActionTypes(
    'movie/DETAIL'
);

export const getMovieList = createAction(GET_MOVIE_LIST, ({ page, token }) => ({
    page: `?page=${page}`,
    token
}));

export const getMovieDetail = createAction(GET_MOVIE_DETAIL, ({ movie_id, token }) => ({
    movie_id,
    token
}));


// saga 생성
const getMovieListSaga = createRequestSaga(GET_MOVIE_LIST, movieAPI.getMovieList);
const getMovieDetailSaga = createRequestSaga(GET_MOVIE_DETAIL, movieAPI.getMovieDetail);

export function* movieSaga() {
    yield takeLatest(GET_MOVIE_LIST, getMovieListSaga);
    yield takeLatest(GET_MOVIE_DETAIL, getMovieDetailSaga);
}

const initialState = {
    movie_list: null,
    detail: null,
};

const movie = handleActions(
    {
        [GET_MOVIE_LIST_SUCCESS]: (state, { payload: movie_list }) => ({
            ...state,
            movie_list,
            error: null,
        }),
        [GET_MOVIE_LIST_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
        [GET_MOVIE_DETAIL_SUCCESS]: (state, { payload: detail }) => ({
            ...state,
            detail,
            error: null,
        }),
        [GET_MOVIE_DETAIL_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
    },
    initialState,
);

export default movie;