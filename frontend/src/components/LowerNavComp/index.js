import React from 'react';
import { LowerNavStyled } from './LowerNavStyled';


const LowerNavComp = () => {
    return (
        <LowerNavStyled>
            <div className="nav2-left">
                    <div className="search-logo"><img src="images/search_icon.svg" alt="search icon"></img></div>
                    <div className="search-logo"><input type="text" placeholder="Search posts..." className="search-posts"></input></div>
            </div>
            <div className="nav2-right">
                <p className="liked">Liked</p>
                <p className="friends">Friends</p>
                <p className="follow">Follow</p>
            </div>
        </LowerNavStyled>  
    )
}

export default LowerNavComp

