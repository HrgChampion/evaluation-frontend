import { applyMiddleware, combineReducers, compose, createStore } from "redux";

import thunk from "redux-thunk";
import { Flatreducer } from "./Flats/Flatreducer";
import { RegisterReducer } from "./Register/Registerreducer";

const rootReducer=combineReducers({
    flat:Flatreducer,
    regiter:RegisterReducer,
})

export const store=createStore(
rootReducer,
compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);