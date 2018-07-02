import { AppRegistry } from 'react-native';
import App from './App';

//Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './reducers';
import MovieContainer from './src/containers/MovieContainer';
//sagas
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));

const App = () => (
    <Provider store={store}>
        <MovieContainer/>
    </Provider>
);
sagaMiddleware.run(rootSaga);
AppRegistry.registerComponent('reduxSagaWithAPI', () => App);
