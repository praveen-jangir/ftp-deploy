// rootReducer.js
import { combineReducers } from 'redux';
import { blogReducer, singleBlogReducer} from './components/pages/blog/reducer';
import { singleServiceReducer,serviceReducer } from './components/pages/services/reducer';
import orderReducer from './components/pages/review/reducer';
import { sampleReducer,singleSampleReducer } from './components/pages/sample/reducer';
const rootReducer = combineReducers({
  blogs: blogReducer,
  singleBlog: singleBlogReducer,
  singleService: singleServiceReducer,
  service: serviceReducer,
  order:orderReducer,
  sample:sampleReducer,
  singleSample:singleSampleReducer,
  // Add other reducers if needed
});

export default rootReducer;
