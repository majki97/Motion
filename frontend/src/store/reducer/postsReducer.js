const initialState = {
    posts: [],
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'getPosts': 
            return {
                posts: action.payload,
            };
        default:
            return state;
    }
}

export default postsReducer;