export const authAction = (token) => {
    return {
      type: "USER_LOGIN",
      payload: token,
    };
  };

  const login = (credentials, history) => (dispatch, getState) => {
    const config ={
      body: JSON.stringify(credentials),
      method: 'Post',
      headers : new Headers ({
          'Content-Type': 'application/json'
      })
  }

  fetch("https://motion.propulsion-home.ch/backend/api/auth/token/", config)
      .then((res) => res.json())
      .then((data) => {
        if (data.access){
          dispatch(authAction(data.access));
          localStorage.setItem("token", data.access);
          history.push('/home')
        } else {
          history.push('/')
        }
      });
   
}

export default login;