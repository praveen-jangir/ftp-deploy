// reducer.js

import {
  FETCH_SAMPLE_DATA_REQUEST,
  FETCH_SAMPLE_DATA_SUCCESS,
  FETCH_SAMPLE_DATA_FAILURE,
  FETCH_SINGLE_SAMPLE_FAILURE,
  FETCH_SINGLE_SAMPLE_REQUEST,
  FETCH_SINGLE_SAMPLE_SUCCESS
} from './actions';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const sampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SAMPLE_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_SAMPLE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_SAMPLE_DATA_FAILURE:
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
const initialsingleSampleState = {
  sample: null,
  loading: false,
  error: null,
};
const singleSampleReducer = (state = initialsingleSampleState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_SAMPLE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_SINGLE_SAMPLE_SUCCESS:
      return {
        ...state,
        service: action.payload,
        loading: false,
      };

    case FETCH_SINGLE_SAMPLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export {sampleReducer,singleSampleReducer};
