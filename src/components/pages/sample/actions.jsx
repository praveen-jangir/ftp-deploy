export const FETCH_SAMPLE_DATA_REQUEST = "FETCH_SAMPLE_DATA_REQUEST";
export const FETCH_SAMPLE_DATA_SUCCESS = "FETCH_SAMPLE_DATA_SUCCESS";
export const FETCH_SAMPLE_DATA_FAILURE = "FETCH_SAMPLE_DATA_FAILURE";
export const FETCH_SINGLE_SAMPLE_REQUEST = "FETCH_SINGLE_SAMPLE_REQUEST";
export const FETCH_SINGLE_SAMPLE_SUCCESS = "FETCH_SINGLE_SAMPLE_SUCCESS";
export const FETCH_SINGLE_SAMPLE_FAILURE = "FETCH_SINGLE_SAMPLE_FAILURE";

import axios from 'axios';
import { BaseUrl,HEADERS } from '../../../config';
export const fetchSampleDataRequest = ()=>({
  type: FETCH_SAMPLE_DATA_REQUEST,  
});

export const fetchSampleDataSuccess = (services)=>({
    type: FETCH_SAMPLE_DATA_SUCCESS,
    payload: services,
})

export const fetchSampleDataFailure = (error)=>({
    type: FETCH_SAMPLE_DATA_FAILURE,
    payload: error,
})

export const fetchData = (slug) => {
  const eventTime = new Date('2023-12-01T18:30:00');
  let url = `${BaseUrl}sample-json?time=${eventTime.toISOString()}`;
  if(slug){
    url = `${BaseUrl}sample-json?category=${slug}`;
  }
    return (dispatch) => {
      dispatch(fetchSampleDataRequest());
      axios
        .get(url,HEADERS)
        .then((response) => {
          const data = response.data;
          dispatch(fetchSampleDataSuccess(data));
        })
        .catch((error) => {
          dispatch(fetchSampleDataFailure(error.message));
        });
    };
  };
// Single service page Action
export const fetchSingleSampleRequest = () => ({
  type: FETCH_SINGLE_SAMPLE_REQUEST,
});

export const fetchSingleSampleSuccess = (sample) => ({
  type: FETCH_SINGLE_SAMPLE_SUCCESS,
  payload: sample,
});

export const fetchSingleSampleFailure = (error) => ({
  type: FETCH_SINGLE_SAMPLE_FAILURE,
  payload: error,
});

export const fetchSingleSample = (slug) => {
  return (dispatch) => {
    dispatch(fetchSingleSampleRequest());
    // Assuming your API endpoint supports fetching a single service post by slug
    axios.get(`${BaseUrl}sample-json/${slug}`,HEADERS)
      .then((response) => {
        const data = response.data;
        dispatch(fetchSingleSampleSuccess(data.sample));
      })
      .catch((error) => {
        dispatch(fetchSingleSampleFailure(error.message));
      });
  };
};