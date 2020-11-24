import {createStore} from "redux";
import rootReducer from "./reducers";
//rootReducer is actually combineReducers({todos})

export default createStore(rootReducer);
