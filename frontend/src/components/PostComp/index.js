import React from 'react';
import { PostStyled } from './PostStyled';
import Planetimage from '../../assets/planet-icon.jpg';

const PostComp = ({post}) => {


    return (
        <PostStyled>
            <section className="person">
                <div className="user"><img src={post.user.avatar? post.user.avatar : Planetimage} alt="user-pic" height="50px"></img></div>
                <div className="who-when">
                    <p className="name">{post.user.username}</p>
                    <p className="online">{post.created}</p>
                </div> 
            </section>
            <section className="pic-comment"><p>{post.content}</p></section>
            <section className="share-bar">
                <div className="post-friends"> 
                    <div className="heart-logo"><img src="images/heart.svg" alt="heart icon"></img><span className="action-pat">Like</span></div>
                    <div className="share-logo"><img src="images/share.svg" alt="share icon"></img><span className="action-pat">Share</span></div>
                </div>
                <div><p className="amount-likes">{post.amount_of_likes} likes</p></div>
            </section>
        </PostStyled>
    )
}

export default PostComp