import { combineReducers } from "redux";
import { blurReducer } from "./toggleReducer";

export const rootReducers = combineReducers({ blurState: blurReducer });
