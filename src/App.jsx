import MainRoute from './Routes/MainRoute'
import { Provider } from 'react-redux';
import store from './components/pages/blog/store';
import TagManager from 'react-gtm-module'
const tagManagerArgs = {
  gtmId: 'GTM-TPCCDVG4'
}
TagManager.initialize(tagManagerArgs)
function App() {
  window.dataLayer.push({
    event: 'pageview'
  });
return (
  <Provider store={store}>
    <MainRoute/>
  </Provider>
  )
}

export default App