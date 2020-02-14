import {getMatchesError, getMatchesPending, getMatchesSuccess} from "./actions/MatchActions";
import findMatches from "./service/FindMatchService";

function getMatches(userId) {
    return (dispatch) => {
        dispatch(getMatchesPending());
        findMatches(userId)
            .then(res => {
                dispatch(getMatchesSuccess(res.data.matches));
            })
            .catch(err => {
                dispatch(getMatchesError(err.message));
            });
    };
}

export default getMatches;
