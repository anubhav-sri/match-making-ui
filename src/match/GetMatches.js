import axios from 'axios';
import {getMatchesError, getMatchesPending, getMatchesSuccess} from "./actions/MatchActions";

function getMatches(userId) {
    return (dispatch) => {
        dispatch(getMatchesPending());
        axios.get('http://localhost:8090/users/' + userId + '/matches/')
            .then(res => {
                dispatch(getMatchesSuccess(res.data.matches));
            })
            .catch(err => {
                dispatch(getMatchesError(err.message));
            });
    };
}

export default getMatches;
