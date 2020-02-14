export const FILTER_MATCHES_SUCCESS = 'FILTER_MATCHES_SUCCESS';
export const FILTER_MATCHES_RESET = 'FILTER_MATCHES_RESET';
export const FILTER_MATCHES_ERROR = 'FILTER_MATCHES_ERROR';


export function filterMatchesError(er) {
    return {type: FILTER_MATCHES_ERROR, error: er};
}

export function clearFilters() {
    return {
        type: FILTER_MATCHES_RESET,
    };
}
