// reducer.js

import {
  FETCH_BANNER_DATA_REQUEST,
  FETCH_BANNER_DATA_SUCCESS,
  FETCH_BANNER_DATA_FAILURE,
  FETCH_SINGLE_BLOG_FAILURE,
  FETCH_SINGLE_BLOG_REQUEST,
  FETCH_SINGLE_BLOG_SUCCESS
} from './actions';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BANNER_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_BANNER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_BANNER_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
// Single BLog Ruducer
const initialSingleBlogState = {
  blog: null,
  loading: false,
  error: null,
};
const singleBlogReducer = (state = initialSingleBlogState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_BLOG_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_SINGLE_BLOG_SUCCESS:
      return {
        ...state,
        blog: action.payload,
        loading: false,
      };

    case FETCH_SINGLE_BLOG_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export {blogReducer,singleBlogReducer};
