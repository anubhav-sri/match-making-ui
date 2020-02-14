import {FILTER_MATCHES_RESET, FILTER_MATCHES_SUCCESS} from "../actions/FiltersActions";
import {initialFilters} from "../components/FilterStates";

const initialState = {
        filters: {
            ...initialFilters
        }
    }

;

function FiltersReducer(state = initialState, action) {
    if (action.type === FILTER_MATCHES_SUCCESS) {
        return {
            ...state,
            filters: action.filters,
        };
    }
    if (action.type === FILTER_MATCHES_RESET) {
        return {
            ...state,
            filters: {...initialFilters}
        }
    } else {
        return state;
    }

}

export default FiltersReducer
