import React from 'react';
import { CreatePostStyled } from './CreatePostStyled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAllPostsAction } from '../../store/actions/post';



const CreatePostComp = () => {

    const [createdPosts, setCreatedPosts] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    const token = useSelector(state => state.token);

    const handleCreatedPost = (event) => {
        setCreatedPosts(event.target.value);
    };

    const handlePostSubmit = (event) => {
        event.preventDefault();
        const config = {
            body: JSON.stringify({content: createdPosts}),
            method: 'POST',
            headers: new Headers ({
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            })
        }

        fetch("https://motion.propulsion-home.ch/backend/api/social/posts/", config)
            .then((res) => res.json())
                .then((createdPosts) => {
                    dispatch(getAllPostsAction())
                    setCreatedPosts("");
                    }
                );    
    }



    return (
        <CreatePostStyled onSubmit={ handlePostSubmit }>
            <div className="thought">
                <img className="avatar" src="images/users/jennifer.png" alt="user jennifer"></img>
                <input type="text" value={ createdPosts } placeholder="What's on your mind Michelle?" className="thought-text" onChange={ handleCreatedPost }></input>
            </div>
            <div className="send"><button type="submit" className="send-btn"><img src="images/send_buton.svg" alt="send button"></img></button></div>
        </CreatePostStyled> 
    )
}

export default CreatePostComp

