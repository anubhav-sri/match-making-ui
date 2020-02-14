import axios from "axios";
import {FILTER_MATCH_SERVICE_URL} from "../properties";

function findMatches(userId, queryParams = {}) {
    return axios.get(FILTER_MATCH_SERVICE_URL + '/users/' + userId + '/matches', {
        params: queryParams, config: {headers: {latitude: 53.801277, longitude: -1.548567}}
    });
}

export default findMatches;
