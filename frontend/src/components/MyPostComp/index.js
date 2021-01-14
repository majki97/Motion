import React from 'react';
import { MyPostStyled } from './MyPostStyled';



const MyPostComp = () => {


    return (
        <MyPostStyled>
            <section className="person">
                <div className="info-right">
                    <div className="jenn"><img src="images/users/jennifer.png" alt="user jennifer"></img></div>
                    <div className="who-when">
                        <p className="name">Michelle Lundak</p>
                        <p className="online">Just now</p>
                    </div>  
                </div> 
                <div className="menu"><img src="images/menu.svg" alt="menu"></img></div>
            </section>
            <section className="pic-comment"><p>Lorem ipsum dolor sit amet, vim ut quas volumus probatus, has tantas<br></br>laudem iracundia et, ad per utamur ceteros apeirian…</p></section>
            <div className="gallery">
                <img src="images/feedPics/Image.png" alt="" height="240px" width="240px"></img>
                <img src="images/feedPics/Image2.png" alt="" height="240px" width="240px"></img>
                <img src="images/feedPics/Image3.png" alt="" height="240px" width="240px"></img>
                <img src="images/feedPics/Image4.png" alt="" height="240px" width="240px"></img>
            </div>
            <section className="share-bar">
                <div className="post-friends"> 
                    <div className="heart-logo"><img src="images/heart.svg" alt="heart icon"></img><span className="action">Like</span></div>
                    <div className="share-logo"><img src="images/share.svg" alt="share icon"></img><span className="action">Share</span></div>
                </div>
                    <div><p className="amount-likes">2 likes</p></div>
            </section>
        </MyPostStyled>
    );
}

export default MyPostComp

