import React from 'react';
import { UpperNavStyled } from './UpperNavStyled';


const UpperNavComp = () => {
    return (
        <UpperNavStyled>
            <div className="nav1-left">
                <div className="motion-logo"><img src="images/logo.png" alt="logo"></img><p id className="motion">Motion</p></div>
                <div className="post-friends"> 
                    <div className="posts-logo"><img src="images/posts_logo.svg" alt="posts logo"></img><p id="posts">Posts</p></div>
                    <div className="friends-logo"><img src="images/icon-friends.svg" alt="friends icon"></img><p id="findfriends">Find Friends</p></div>
                </div>
            </div>
            <div className="nav1-right">
                <div className="bell"><img src="images/notification_bell.svg" alt="notification bell"></img></div>
                <div className="jenn"><img src="images/users/jennifer.png" alt="user jennifer"></img></div>
                <div className="menu"><img src="images/menu.svg" alt="menu"></img></div>
            </div>
        </UpperNavStyled>  
    )
}

export default UpperNavComp

