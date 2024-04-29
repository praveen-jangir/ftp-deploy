export const FETCH_BANNER_DATA_REQUEST = "FETCH_BANNER_DATA_REQUEST";
export const FETCH_BANNER_DATA_SUCCESS = "FETCH_BANNER_DATA_SUCCESS";
export const FETCH_BANNER_DATA_FAILURE = "FETCH_BANNER_DATA_FAILURE";
import axios from 'axios';
import { BaseUrl,HEADERS } from '../../../config';
export const fetchBannerDataRequest = ()=>({
  type: FETCH_BANNER_DATA_REQUEST,  
});

export const fetchBannerDataSuccess = (data)=>({
    type: FETCH_BANNER_DATA_SUCCESS,
    payload: data,
})

export const fetchBannerDataFailure = (error)=>({
    type: FETCH_BANNER_DATA_FAILURE,
    payload: error,
})

export const fetchData = () => {
    return (dispatch) => {
      dispatch(fetchBannerDataRequest());
      axios
        .get(`${BaseUrl}blog-json`,HEADERS)
        .then((response) => {
          const data = response.data;
          dispatch(fetchBannerDataSuccess(data));
        })
        .catch((error) => {
          dispatch(fetchBannerDataFailure(error.message));
        });
    };
  };