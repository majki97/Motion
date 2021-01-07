import styled from 'styled-components';

export const PostContainer = styled.div`
    width: 560px;
    height: auto;
    margin-bottom: 20px;
    margin-left: 220px;
    background: white;
    box-shadow: 
        0 3px 20px rgba(229,229,229,0.73), 
        0 0 0 1px rgba(221,221,221,0.75);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 25px;
    transition: box-shadow 0.3s;
    cursor: pointer;

    &:hover {
        box-shadow: 
        0 3px 20px rgba(229,229,229,0.73), 
        0 1px 1px 0 rgba(0,0,0,0.14), 
        0 2px 1px -1px rgba(0,0,0,0.12), 
        0 1px 3px 0 rgba(0,0,0,0.20),
        0 0 0 1px rgba(221,221,221,0.75);
    }
    
    /* display: flex;
    flex-direction:column;
    background-color: white;
    width: 30%;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 220px;
    border-radius: 5px; */
    //border: solid red 2px;
`

export const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    .User{
    }
        #ninjaAv{
            height: 50px;
            margin: 20px 20px; 
        }
    .timeOf{
        margin-left: 30px;
    }
    
`
export const BodyStyled = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
`

export const LikesStyled = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 15px;
    margin-bottom: 15px;
    align-items:center;

    .heartLogo{
        margin-right: 15px;

    }
    
        #li{
            margin-right:25px;
        }
    .shareAvatar{
        margin-right: 15px;
    }
        #sh{
            margin-right:25px;
            }
    .LikesAmount{
        margin-left: 140px;
        color: #B2B2B2;
        
    }
        
`
