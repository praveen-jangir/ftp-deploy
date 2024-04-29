export const FETCH_BANNER_DATA_REQUEST = "FETCH_BANNER_DATA_REQUEST";
export const FETCH_BANNER_DATA_SUCCESS = "FETCH_BANNER_DATA_SUCCESS";
export const FETCH_BANNER_DATA_FAILURE = "FETCH_BANNER_DATA_FAILURE";
export const FETCH_SINGLE_SERVICE_REQUEST = "FETCH_SINGLE_SERVICE_REQUEST";
export const FETCH_SINGLE_SERVICE_SUCCESS = "FETCH_SINGLE_SERVICE_SUCCESS";
export const FETCH_SINGLE_SERVICE_FAILURE = "FETCH_SINGLE_SERVICE_FAILURE";

import axios from 'axios';
import { BaseUrl,HEADERS } from '../../../config';
export const fetchBannerDataRequest = ()=>({
  type: FETCH_BANNER_DATA_REQUEST,  
});

export const fetchBannerDataSuccess = (services)=>({
    type: FETCH_BANNER_DATA_SUCCESS,
    payload: services,
})

export const fetchBannerDataFailure = (error)=>({
    type: FETCH_BANNER_DATA_FAILURE,
    payload: error,
})

export const fetchData = (page) => {
  const eventTime = new Date('2023-12-01T18:30:00');
    return (dispatch) => {
      dispatch(fetchBannerDataRequest());
      axios
        .get(`${BaseUrl}service-json/${page}?time=${eventTime.toISOString()}`,HEADERS)
        .then((response) => {
          const data = response.data;
          dispatch(fetchBannerDataSuccess(data));
        })
        .catch((error) => {
          dispatch(fetchBannerDataFailure(error.message));
        });
    };
  };
// Single service page Action
export const fetchSingleServiceRequest = () => ({
  type: FETCH_SINGLE_SERVICE_REQUEST,
});

export const fetchSingleServiceSuccess = (service) => ({
  type: FETCH_SINGLE_SERVICE_SUCCESS,
  payload: service,
});

export const fetchSingleServiceFailure = (error) => ({
  type: FETCH_SINGLE_SERVICE_FAILURE,
  payload: error,
});

export const fetchSingleService = (slug) => {
  return (dispatch) => {
    dispatch(fetchSingleServiceRequest());
    
    axios.get(`${BaseUrl}service-json/${slug}`,HEADERS)
      .then((response) => {
        const service = response.data;
        dispatch(fetchSingleServiceSuccess(service));
      })
      .catch((error) => {
        dispatch(fetchSingleServiceFailure(error.message));
      });
  };
};