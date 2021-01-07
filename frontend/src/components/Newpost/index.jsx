import React, {useEffect, useState} from 'react';
import Jennifer from '../../assets/images/jennifer.png'
import ButtonSend from '../../assets/svg/send_button.svg'
import {NewPostStyled} from './style'
import {useHistory, withRouter} from 'react-router-dom';
import newPostAction from '../../store/actions/newPostAction'
import {useDispatch} from 'react-redux'

 
const NewPost = () => {
  const [content, setNewPost] = useState('');
  const dispatch = useDispatch()


  const postInputHandler = e => {
    setNewPost(e.currentTarget.value)
  }
 
  const onSubmitHandler = e => {
    e.preventDefault()
    setNewPost('')
    dispatch(newPostAction(content))
    }

    
        
  

  return (

    <NewPostStyled>
      <form onSubmit = {onSubmitHandler}>
        <img className='Avatar' src={Jennifer} alt='Jennifer avatar'/>
        <input type="text" onChange={postInputHandler} placeholder= {`What's on your mind Jennifer`}/>
        <button type="submit">
          <img src={ButtonSend}/>
        </button>
      </form>
    </NewPostStyled>
  )

} 

export default withRouter(NewPost);