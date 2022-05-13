import { createStore } from 'redux'
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducer from "./Action-Creater/Reducer";

export const stor = createStore(Reducer,{},applyMiddleware(thunk))