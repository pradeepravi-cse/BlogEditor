import { createStore, combineReducers } from "redux";

import storeDoc from "./reducer";

const reducers = combineReducers({
  documents: storeDoc,
}); /* eslint-disable no-underscore-dangle */
export const store = createStore(
  reducers /* preloadedState, */,
  //@ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */
