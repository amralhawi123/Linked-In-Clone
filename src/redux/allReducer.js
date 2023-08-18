import { combineReducers } from "redux";
import userReducer from './reducers/userReducer';
import articalReducer from "./reducers/articalReducer";
import comentReducer from "./reducers/commentReducer";


const rootReducer = combineReducers({
   userReducer:userReducer,
   articalReducer:articalReducer,
   comentReducer:comentReducer,
}
)

export default rootReducer