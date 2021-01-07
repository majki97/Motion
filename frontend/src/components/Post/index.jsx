import {PostContainer, LikesStyled, HeaderStyled, BodyStyled} from './style';
import Heart from '../../assets/svg/heart.svg';
import Share from '../../assets/svg/share.svg';
//import {useEffect} from 'react';
import ninja from '../../assets/images/ninja.png'
const Post = ({post}) => {


    return(
        <PostContainer>
            <HeaderStyled>
                <div className='User'><img id='ninjaAv' src={post.user.avatar ? post.user.avatar : ninja } /></div>
                <p>{post.user.username}</p>
                <p className='timeOf'>{post.created}</p>
            </HeaderStyled>
            <BodyStyled> 
                <p>{post.content}</p>
                <img src={post.images}></img>
            </BodyStyled>
            <LikesStyled> 
                <img className='heartLogo' src={Heart} alt='heart avatar'/><p id='li'>Like</p>
                <img className='shareAvatar' src={Share} alt='share avatra'/><p id='sh'>Share</p>
                <div className='LikesAmount'><p>{post.amount_of_likes}likes</p></div>
            </LikesStyled>
        </PostContainer>
    )
} 

export default Post