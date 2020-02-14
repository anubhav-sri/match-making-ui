const initialState = {
    pending: false,
};

function pendingReducer(state = initialState, action) {
    if (action.type.endsWith("PENDING")) {
        return {
            ...state,
            pending: true
        };
    }
    if (action.type.endsWith("SUCCESS") || action.type.endsWith("ERROR")) {
        return {
            ...state,
            pending: false
        };
    }
    return state

}

export default pendingReducer
