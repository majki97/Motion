const initialState = {
    token: null,
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'setToken': 
            return {
                token: action.payload.token,
            };
        default:
            return state;
    }
}

export default loginReducer;