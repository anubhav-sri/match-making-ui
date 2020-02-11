import {combineReducers} from "redux";
import MatchReducer from "./match/reducers/MatchesReducer";
import pendingReducer from "./match/reducers/pendingReducer";
import SuccessReducer from "./match/reducers/SuccessReducer";

const rootReducer = combineReducers({
    matches: MatchReducer,
    pending: pendingReducer,
    success: SuccessReducer,
});
export default rootReducer
