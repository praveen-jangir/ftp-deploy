import {
    FETCH_ORDER_REQUEST,
    FETCH_ORDER_SUCCESS,
    FETCH_ORDER_FAILURE,
  } from './actions';
  
  const initialState = {
    data: null,
    loading: false,
    error: null,
  };
  
  const orderReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ORDER_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_ORDER_SUCCESS:
        return { ...state, loading: false, data: action.payload };
      case FETCH_ORDER_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default orderReducer;