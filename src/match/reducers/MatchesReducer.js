import {GET_MATCHES_SUCCESS} from "../actions/MatchActions";

const initialState = {
        matches: []
    }
;

function MatchesReducer(state = initialState, action) {
    if (action.type === GET_MATCHES_SUCCESS) {
        return {
            ...state,
            matches: action.matches,
        };
    }
    return state;


}

export default MatchesReducer
