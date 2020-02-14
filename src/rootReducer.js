import {combineReducers} from "redux";
import MatchReducer from "./match/reducers/MatchesReducer";
import pendingReducer from "./match/reducers/PendingReducer";
import SuccessReducer from "./match/reducers/SuccessReducer";
import FiltersReducer from "./match/reducers/FiltersReducer";
import ErrorReducer from "./match/reducers/ErrorReducer";

const rootReducer = combineReducers({
    matches: MatchReducer,
    pending: pendingReducer,
    success: SuccessReducer,
    error: ErrorReducer,
    filters: FiltersReducer
});
export default rootReducer
