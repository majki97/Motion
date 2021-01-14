const initialState = {
    token: null,
    posts: []
};



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_LOGIN': 
            return {
                ...state, 
                token: action.payload    
            };
        case 'GET_POSTS': 
            return {
                ...state, 
                posts: action.payload    
            };

        default:
            return state;
    };   
};

export default reducer;