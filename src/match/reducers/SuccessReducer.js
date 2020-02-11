const initialState = {
    success: false
};

function SuccessReducer(state = initialState, action) {
    if (action.type.endsWith("SUCCESS")) {
        return {
            ...state,
            success: true
        };
    } else {
        return state;
    }

}

export default SuccessReducer
