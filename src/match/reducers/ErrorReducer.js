const initialState = {
    error: false,
};

function errorReducer(state = initialState, action) {
    if (action.type.endsWith("ERROR")) {
        return {
            ...state,
            error: true
        };
    }
    if (action.type.endsWith("SUCCESS")) {
        return {
            ...state,
            error: false
        };
    }
    if (action.type.endsWith("PENDING")) {
        return {
            ...state,
            error: false
        };
    }
    return state

}

export default errorReducer
