// let's go!
import React from 'react'
import { render } from 'react-dom'

//import css
import css from './styles/style.styl'

//import components
import App from './components/App'
import PhotoGrid from './components/PhotoGrids'
import Single from './components/Single'

//import react router deps
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import { Provider } from 'react-redux'
import store, {history} from './store'

// PhotoGrid and Single are the children of Main

const router = (
    //provider will expose the store to the original application
    <Provider store ={store} >
        <Router  history={history}>
            <Route path="/" component={App} >
                <IndexRoute component = {PhotoGrid}></IndexRoute>
                <Route path="/views/:postId" component = {Single}></Route>
            </Route>
        </Router>
    </Provider>

)

//render(<Main/>, document.getElementById('root'));
render(router, document.getElementById('root'));
