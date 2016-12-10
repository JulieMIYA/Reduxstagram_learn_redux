import { createStore , compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

//import root reducers
import rootRuducer from './reducers/index'
import comments from './data/comments'
import posts from './data/posts'


//create an object for default data
const defaultState = {
    posts,
    comments
};

const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f=>f
);

const store = createStore(rootRuducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot){
    module.hot.accept('./reducers/',()=>{
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}
export default store;
