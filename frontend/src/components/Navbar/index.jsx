import React, {useEffect, useState } from 'react'
import {NavbarContainer, LeftBar, SectionMotionStyled,  SectionPostStyled ,FriendsStyled, RightBar,} from './style'
import MotionLogo from '../../assets/svg/logo.png'
import PostLogo from '../../assets/svg/posts_logo.png'
import FriendLogo from '../../assets/svg/icon-friends.svg'
import Bell from '../../assets/svg/notification_bell.svg'
import Jennifer from '../../assets/images/jennifer.png'
import Dots from '../../assets/svg/menu.svg'



const Navbar = () => {


    return (
        <NavbarContainer>
            <LeftBar>
                <SectionMotionStyled>
                    <img src={MotionLogo} alt='motion avatar'/>
                    <p>Motion</p>
                </SectionMotionStyled>
                <SectionPostStyled>
                    <img src={PostLogo} alt='send post avatar'/>
                    <p>Posts</p>
                </SectionPostStyled>
                <FriendsStyled>
                    <img src={FriendLogo} alt='find friends avatar'/>
                    <p>Find Friends</p>
                </FriendsStyled>
            </LeftBar>
            <RightBar>
                <img src={Bell} alt='bell avatar'/>
                <img src={Jennifer} alt='Jennifer avatar'/>
                <img src={Dots} alt='dots avatar'/>
            </RightBar>
        </NavbarContainer>
    )
}

export default Navbar