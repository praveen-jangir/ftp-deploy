import {
    FETCH_BANNER_DATA_REQUEST,
    FETCH_BANNER_DATA_SUCCESS,
    FETCH_BANNER_DATA_FAILURE,
  } from './actions';
  
  const initialState = {
    data: null,
    loading: false,
    error: null,
  };
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_BANNER_DATA_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_BANNER_DATA_SUCCESS:
        return { ...state, loading: false, data: action.payload };
      case FETCH_BANNER_DATA_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default dataReducer;