const getPostsAction = (posts) =>{
    return {
        type: 'getPosts',
        payload: posts
    }
}

const getPosts = () => (dispatch, getState) => {
    const token = getState().loginReducer.token || localStorage.getItem('token')
    const headers = new Headers ({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}` 
    })
    const newPost = {
        method: 'GET',
        headers: headers
    }
    fetch('https://motion.propulsion-home.ch/backend/api/social/posts/', newPost)
    .then((response) => response.json())
    .then((posts) => dispatch(getPostsAction(posts)))
   
}

export default getPosts;