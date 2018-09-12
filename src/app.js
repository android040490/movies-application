import './main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux';
import {Router, Route, Redirect, browserHistory} from 'react-router';

import reducers from 'redux-store/reducers/index.js';
import Layout from 'components/Layout';
import MoviesList from 'containers/MoviesList';
import MoviePage from 'containers/MoviePage';
import ActorDetails from 'containers/ActorDetails';
import PersonsList from 'containers/PersonsList';

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
));

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={Layout}>
                <Redirect from='/' to='/movies/movie/top_rated' query={{'page' : 1}}/>
                <Route path='/movies/:type/:page' component={MoviesList}/>
                <Route path='/movie' component={MoviePage}/>
                <Route path='/person/:id' component={ActorDetails}/>
                <Route path='/persons' component={PersonsList}/>
            </Route>
            
        </Router>
    </Provider>,
    document.getElementById('app')
)
