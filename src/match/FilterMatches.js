import {getMatchesError, getMatchesPending, getMatchesSuccess} from "./actions/MatchActions";
import {initialFilters} from "./components/FilterStates";
import {filterMatchesError} from "./actions/FiltersActions";
import findMatches from "./service/FindMatchService";

function filterMatches(userId, filters) {
    return (dispatch) => {
        let params = createParams(filters);
        dispatch(getMatchesPending());
        return findMatches(userId, params).then(res => {
            return dispatch(getMatchesSuccess(res.data.matches));
        })
            .catch(err => {
                dispatch(getMatchesError(err.message));
                return dispatch(filterMatchesError(err.message));

            });
    }
        ;
}

function filterOutTheUnchangedKeys(filters, initialFilter) {
    return Object.keys(filters)
        .filter(k => filters[k] !== initialFilter[k]);
}

function mapRangeArrayToTheParamField(temp, vf, filters, queryParams) {
    temp[vf.concat(".from")] = filters[vf][0];
    Object.assign(queryParams, temp);
    temp[vf.concat(".to")] = filters[vf][1];
    Object.assign(queryParams, temp);
}

function createParams(filters) {
    let queryParams = {};
    let initialFilter = {...initialFilters};
    let validFilterKeys = filterOutTheUnchangedKeys(filters, initialFilter);
    validFilterKeys.forEach((vf) => {
        const temp = {};
        if ((Array.isArray(filters[vf])) === true) {
            mapRangeArrayToTheParamField(temp, vf, filters, queryParams);
        } else {
            temp[vf] = filters[vf];
            Object.assign(queryParams, temp)
        }

    });
    return queryParams;
}

export default filterMatches;
