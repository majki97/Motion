export const postAction = (posts) => {
    return {
        type: "GET_POSTS",
        payload: posts,
    };
};

export const getAllPostsAction = () => (dispatch, getState) => {
    const token = getState().token;
    const headers = new Headers({
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
    })
    const config = {
        method: "GET",
        headers: headers
    }
    fetch('https://motion.propulsion-home.ch/backend/api/social/posts/', config)
        .then((response) => response.json())
         .then((posts) => dispatch(postAction(posts)));
}