import React, { useEffect, useState } from 'react'
import { PostsContainer } from './style';
import Post from '../Post/index'
import NewPostStyled from '../Newpost'
import {useSelector, useDispatch} from 'react-redux'
import getPosts from '../../store/actions/postsAction'
//import {useDispatch} from 'react-redux'

// const CreatePost = () => {
//     const [newPost, setNewPost] = useState('');
//     const [image, setImage] = useState();
// }

// const postInputHandler = e => {
//     setNewPost(e.target.value)
// }

// const imageInputHandler = e => {
//     setImage(e.target.value)
// }

// const onSubmitHandler = 

const Posts = () => {
    const posts = useSelector((state)=> state.postsReducer.posts) 
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts())
    }, [])


    return(
        <>
            <PostsContainer>
            <NewPostStyled />
                {posts.map((post) => <Post key={post.id} post={post}/>)}

            </PostsContainer>
        </>
    )

}

export default Posts