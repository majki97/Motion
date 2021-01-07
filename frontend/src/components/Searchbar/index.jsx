import React from 'react'
import SearchIcon from '../../assets/svg/search_icon.svg'
import {SearchbarStyled, InputStyled, LikedStyled} from './style'


const Searchbar = () => {
    return(
        <SearchbarStyled>
            <InputStyled>
                <img src={SearchIcon}/>
                <input type="text" placeholder="Search posts..."/>
            </InputStyled>
            <LikedStyled>
                <ul>
                    <li><a>Liked</a></li>
                    <li><a>Friends</a></li>
                    <li><a>Follow</a></li>
                </ul>
            </LikedStyled>
        </SearchbarStyled>
    )
}

export default Searchbar