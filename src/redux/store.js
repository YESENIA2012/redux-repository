import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import pokeReducer from "./pokeDucks"; // siempre debemos llamar el reducer en el store

const rootReducer = combineReducers({
  pokemones: pokeReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // esto pregunta si tenemos instalada la extensión de redux tools y si no usa compose que se esta llamando de redux, es para configuarar la ext4ensión

export default function getStore() {
  // configuarar middleware
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
