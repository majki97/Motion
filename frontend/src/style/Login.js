import styled from 'styled-components';
import Background from '../assets/images/backgroundImage.png';

export const MainStyled = styled.main`
    display: flex;
    width: 100%;
    height: 100vh;
`;


export const LeftStyle = styled.div`
    background-image: url(${Background}), linear-gradient(115deg, #c568ff 0%, #6e91f6);
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
    width: 40%;
   
`
export const MainTitle = styled.div`
    border: none;
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`


export const MainQuote = styled.h1`
    color: white;
    font-size: 30px;
    font-weight: 100;
    margin-bottom: 3%;

`
export const MiddleStyle = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;

`

export const MainText = styled.p`
    color: white;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    margin-bottom: 40px;
`

export const StoreButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    width:100%;
    height: 40px;
    margin-top: 40px;
    opacity: 50%;

    button{
            background-color: transparent;
            padding: 2%;
            border: 0.5px solid white;
            border-radius: 30px;
            width:140px;
            height: 50px;
            margin: 0 16px;
            outline: none;
        }


`

export const LeftFooter = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const SocialMedia = styled.div`
    display: flex;
    justify-content: space-around;
    width: 20%;

    img{
        width: 25%;
        opacity: 0.2;
        margin-bottom: 20px;
    }
`
export const StyledLine = styled.p`
        color: #ffffff;
        font-weight: 400;
        font-size: px;
`   


export const RightStyled = styled.div`
    width: 60%;
    min-height: 95vh;
    background-color: #FFFFFF;
`
export const SignupHeader = styled.div`
    margin-top: 40px;
    margin-bottom: 40px;
    display: flex;
    justify-content: flex-end;

    p{
        font-size: 14px;
        font-weight: 400;
        color: #000000;
        margin-right: 7px;
    }
    button{
            width: 120px;
            height: 40px;
            border-radius: 30px;
            //opacity: 20%;
            background-color: #FFFFFF;
            font-weight: 400;
            font-size: 10px;
            color: black;
            border-color: #D3D3D3;
            box-shadow: transparent;
            outline: none;
                    
        }
`

export const InputStyled = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
export const CenterTitle = styled.h1`
    display: flex;
    align-items: center;
    font-size: 40px;
    font-weight: 500;
    color: #000000;
    margin-bottom: 100px;
    margin-top: 100px;
`
export const UserNameInput = styled.div`
    border-bottom: 1px solid #D6D6D6;
    padding: 6px;
    margin-bottom: 20px;

    img{
        margin-right: 10px;
        position: relative;
    }
    input{
        border-color: transparent;
        margin-bottom: 5px;
    }
    input:focus {
        outline: none;
    }
`
export const UserPassword = styled.div`
    border-bottom: 1px solid #D6D6D6;
    padding: 6px;
    margin-bottom: 20px;

    img{
        margin-right: 10px;
        position: relative;
    }
    input{
        border-color: transparent;
    
    }
    input:focus {
        outline: none;
    }
`
export const ButtonStyled = styled.button`
    //display: flex;
    //width: 100%;
    justify-content: center;
    width: 280px;
    height: 60px;
    border-radius: 30px;
    font-size: 17px;
    color: white;
    background-image: linear-gradient(#C468FF, #6e91f6);           
    box-shadow: transparent;
    outline: none;
    border-color: none;
    margin-top: 60px;
        
`


