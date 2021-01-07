import styled from 'styled-components'

export const NavbarContainer = styled.nav`
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    background-color:#fff;
    border-bottom: solid 1px rgba(221, 221, 221, 0.67);
    //border: sold green 2px;
    
    
`


export const LeftBar = styled.div`
    width: 50%;
    display: flex;
`


export const SectionMotionStyled = styled.section`
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 60px;

    img{
        width: 20px;
        height: 20px;
    }
    p{
        font-size: 18px;
        font-weight: 400;
        padding-left: 12px;
    }
    p:hover{
        border-bottom: 2px solid purple;
        opacity: 1;
    }
`


// export const MotionSmallLogo = styled.img`

// `
export const SectionPostStyled = styled.section`
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    //margin-left: 60px;

    img{
        width: 18px;
        height: 18px;
    }
    p{
        font-size: 14px;
        font-weight: 400;
        padding-left: 12px;
    }
    p:hover{
        border-bottom: 2px solid purple;
    }

`
// export const PostSmallLogo = styled.img`

// `

export const FriendsStyled = styled.section`
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    //margin-left: 60px;

    img{
        width: 18px;
        height: 18px;
    }
    p{
        font-size: 14px;
        font-weight: 400;
        padding-left: 12px;
    }
    p:hover{
        border-bottom: 2px solid purple;
    }
`

// export const FriendSmallLogo = styled.img`

// `

export const RightBar = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 75px;
    
    img{
        width: 17px;
        height: 17px;
        margin-right: 30px;

    }

    img{
        width: 25px;
        height: 25px;
        margin-right: 15px;

    }

`

