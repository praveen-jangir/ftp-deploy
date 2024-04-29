export const FETCH_BANNER_DATA_REQUEST = "FETCH_BANNER_DATA_REQUEST";
export const FETCH_BANNER_DATA_SUCCESS = "FETCH_BANNER_DATA_SUCCESS";
export const FETCH_BANNER_DATA_FAILURE = "FETCH_BANNER_DATA_FAILURE";
export const FETCH_SINGLE_BLOG_REQUEST = "FETCH_SINGLE_BLOG_REQUEST";
export const FETCH_SINGLE_BLOG_SUCCESS = "FETCH_SINGLE_BLOG_SUCCESS";
export const FETCH_SINGLE_BLOG_FAILURE = "FETCH_SINGLE_BLOG_FAILURE";

import axios from 'axios';
import { BaseUrl,HEADERS } from '../../../config';
export const fetchBannerDataRequest = ()=>({
  type: FETCH_BANNER_DATA_REQUEST,  
});

export const fetchBannerDataSuccess = (blogs)=>({
    type: FETCH_BANNER_DATA_SUCCESS,
    payload: blogs,
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
        .get(`${BaseUrl}blog-json/${page}?time=${eventTime.toISOString()}`,HEADERS)
        .then((response) => {
          const data = response.data;
          dispatch(fetchBannerDataSuccess(data));
        })
        .catch((error) => {
          dispatch(fetchBannerDataFailure(error.message));
        });
    };
  };
// Single Blog page Action
export const fetchSingleBlogRequest = () => ({
  type: FETCH_SINGLE_BLOG_REQUEST,
});

export const fetchSingleBlogSuccess = (blog) => ({
  type: FETCH_SINGLE_BLOG_SUCCESS,
  payload: blog,
});

export const fetchSingleBlogFailure = (error) => ({
  type: FETCH_SINGLE_BLOG_FAILURE,
  payload: error,
});

export const fetchSingleBlog = (slug) => {
  return (dispatch) => {
    dispatch(fetchSingleBlogRequest());
    
    // Assuming your API endpoint supports fetching a single blog post by slug
    axios.get(`${BaseUrl}single-blog-json?slug=${slug}`,HEADERS)
      .then((response) => {
        const blog = response.data;
        dispatch(fetchSingleBlogSuccess(blog));
      })
      .catch((error) => {
        dispatch(fetchSingleBlogFailure(error.message));
      });
  };
};