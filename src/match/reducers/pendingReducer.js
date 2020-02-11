const initialState = {
    pending: false,
};

function pendingReducer(state = initialState, action) {
    if (action.type.endsWith("PENDING")) {
        return {
            ...state,
            pending: true
        };
    } else if (action.type.endsWith("SUCCESS")) {
        return {
            ...state,
            pending: false
        };
    }
    return state

}

export default pendingReducer
