const initialState = {
    success: false
};

function SuccessReducer(state = initialState, action) {
    if (action.type.endsWith("SUCCESS")) {
        return {
            ...state,
            success: true
        };
    }
    if (action.type.endsWith("ERROR") || action.type.endsWith("PENDING")) {
        return {
            ...state,
            success: false
        };
    }
    return state;


}

export default SuccessReducer
