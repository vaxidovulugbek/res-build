// rootReducer.js
import { combineReducers } from "redux";
import {
	aboutReducer,
	experienceReducer,
	educationReducer,
	templateResumeReducer,
} from "./reducers";

const rootReducer = combineReducers({
	about: aboutReducer,
	experience: experienceReducer,
	education: educationReducer,
	templateResume: templateResumeReducer,
});

export default rootReducer;
