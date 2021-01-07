import getPosts from './postsAction.js'

const newPostAction = (post) => (dispatch, getState) => {
    const url = 'https://motion.propulsion-home.ch/backend/api/social/posts/'
    const token = getState().loginReducer.token || localStorage.getItem('token')
    
    const headers = new Headers({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
  
   
      const body = JSON.stringify({
          content: post
      })
    
      const newPost = {
          method: 'POST',
          body: body,
          headers: headers
        }
  
      fetch(url, newPost)
          .then(response => response.json())
          .then(() => {
            dispatch(getPosts())
          });
    
   
}

export default newPostAction;