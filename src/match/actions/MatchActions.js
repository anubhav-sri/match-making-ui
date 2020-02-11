export const GET_MATCHES_SUCCESS = 'GET_MATCHES_SUCCESS';
export const GET_MATCHES_PENDING = 'GET_MATCHES_PENDING';
export const GET_MATCHES_ERROR = 'GET_MATCHES_ERROR';


export function getMatchesError(er) {
    return {type: GET_MATCHES_ERROR, error: er};
}

export function getMatchesSuccess(matches) {
    return {
        type: GET_MATCHES_SUCCESS,
        matches: matches
    };
}

export function getMatchesPending() {
    return {type: GET_MATCHES_PENDING};
}
