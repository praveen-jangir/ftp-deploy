// reducer.js

import {
  FETCH_BANNER_DATA_REQUEST,
  FETCH_BANNER_DATA_SUCCESS,
  FETCH_BANNER_DATA_FAILURE,
  FETCH_SINGLE_SERVICE_FAILURE,
  FETCH_SINGLE_SERVICE_REQUEST,
  FETCH_SINGLE_SERVICE_SUCCESS
} from './actions';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const serviceReducer = (state = initialState, action) => {
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
// Single Service Ruducer
const initialSingleServiceState = {
  service: null,
  loading: false,
  error: null,
};
const singleServiceReducer = (state = initialSingleServiceState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_SERVICE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_SINGLE_SERVICE_SUCCESS:
      return {
        ...state,
        service: action.payload,
        loading: false,
      };

    case FETCH_SINGLE_SERVICE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export {serviceReducer,singleServiceReducer};
