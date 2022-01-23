import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {dataReducer} from './reducers/dataReducer';
import {userReducer} from './reducers/userReducer';
import {rootWatcher} from '../sagas';

const rootReducer = combineReducers({
  data: dataReducer,
  user: userReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export default store;

sagaMiddleware.run(rootWatcher);
