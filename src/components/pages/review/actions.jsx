export const FETCH_ORDER_REQUEST = "FETCH_ORDER_REQUEST";
export const FETCH_ORDER_SUCCESS = "FETCH_ORDER_SUCCESS";
export const FETCH_ORDER_FAILURE = "FETCH_ORDER_FAILURE";
import axios from 'axios';
import { BaseUrl,HEADERS } from '../../../config';
export const makeOrderRequest = ()=>({
  type: FETCH_ORDER_REQUEST,  
});

export const makeOrderSuccess = (data)=>({
    type: FETCH_ORDER_SUCCESS,
    payload: data,
})

export const makeOrderFailure = (error)=>({
    type: FETCH_ORDER_FAILURE,
    payload: error,
})

export const makeOrder = (formData) => {
    return (dispatch) => {
      dispatch(makeOrderRequest());
      axios
        .post(`${BaseUrl}pay-with-treat`,formData, {headers: {
                  'Content-Type': 'multipart/form-data',
              }})
        .then((response) => {
          const data = response.data;
          dispatch(makeOrderSuccess(data));
          // window.location.replace("./");
        })
        .catch((error) => {
          dispatch(makeOrderFailure(error.message));
        });
    };
  };