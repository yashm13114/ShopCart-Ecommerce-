// import { createStore, applyMiddleware, compose } from 'redux';
// import {thunk} from 'redux-thunk';
// import rootReducer from './reducer/rootReducer';
// import { sessionService } from 'redux-react-session';

// const initialState = {};
// const middlewares = [thunk];

// const store = createStore(
//   rootReducer,
//   initialState,
//   compose(applyMiddleware(...middlewares))
// );

// sessionService.initSessionService(store);

// export default store;
import { createStore, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk'; // Correct import for redux-thunk
import rootReducer from './reducer/rootReducer';
import { sessionService } from 'redux-react-session';

const initialState = {};
const middlewares = [thunk]; // Apply redux-thunk middleware properly

// Use composeEnhancers to compose enhancers properly
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares))
);

sessionService.initSessionService(store);

export default store;
