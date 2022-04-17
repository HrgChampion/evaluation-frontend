import { applyMiddleware, createStore } from "redux";

import thunk from "redux-thunk";
import { Flatreducer } from "./Flats/Flatreducer";


export const store=createStore(
Flatreducer,
applyMiddleware(thunk)
);