import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
//import {authAction} from '../store/actions/authAction'
import {useHistory} from 'react-router-dom';
//import {Link} from 'react-router-dom';
import {MainStyled, LeftStyle, MainTitle, MainQuote, MainText,MiddleStyle, StoreButtons, LeftFooter, SocialMedia, RightStyled, SignupHeader, CenterTitle, InputStyled, UserNameInput, UserPassword, ButtonStyled, StyledLine } from '../style/Login'
import MainLogo from '../assets/images/logo.png';
import Apple from '../assets/svg/apple.svg';
import Google from '../assets/svg/google.svg';
import Twitter from '../assets/svg/twitter_icon.svg';
import Facebook from '../assets/svg/facebook_icon.svg';
import Instagram from '../assets/svg/instagram_icon.svg';
import Avatar from '../assets/svg/avatar.svg';
import Password from '../assets/svg/password.svg';
import login from '../store/actions/authAction'

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('mwyszowski@gmail.com');
    const [password, setPassword] = useState('password123');
    const dispatch = useDispatch();

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const credentials = {email, password}
        dispatch(login(credentials, history))

    }
    
    // const token = dispatch(authAction(email, password));
    //     if(token) {
    //         history.push("/login");
    // }
    

    return(
        <>
        <MainStyled>
            <LeftStyle>
                <MainTitle>
                    <img src={MainLogo} alt='main logo'/>
                    <MainQuote>Motion</MainQuote>
                </MainTitle>
                <MiddleStyle>
                <MainText>Connect with friends and the world <br/> around you with Motion.</MainText>
                    <StoreButtons>
                        <button><img src={Apple} alt='apple button'/></button>
                        <button><img src={Google} alt='google button'/></button>
                    </StoreButtons>
                </MiddleStyle>
                <LeftFooter>
                    <SocialMedia>
                        <img src={Twitter} alt='twitter icon'/>
                        <img src={Facebook} alt='facebook icon'/>
                        <img src={Instagram} alt='instagram icon'/>
                    </SocialMedia>
                    <StyledLine>© Motion 2018. All rights reserved</StyledLine>
                </LeftFooter>
            </LeftStyle>
            <RightStyled>
                <SignupHeader>
                    <p>Don't have an account?</p>
                    <button type="button">SIGN UP</button> 
                </SignupHeader>
                <InputStyled>
                    <CenterTitle>Sign In</CenterTitle>
                    <form onSubmit={handleSubmit}>
                    <UserNameInput>
                        <img src={Avatar} alt='sign in avatar'/>
                        <input type='text' placeholder='Username' value={email} onChange={handleEmail}/>
                    </UserNameInput>
                    <UserPassword>
                        <img src={Password} alt='password avatar'/>
                        <input type='password' placeholder='Password' value={password} onChange={handlePassword} required/>
                    </UserPassword>
                    
                        <ButtonStyled>Sign In</ButtonStyled>
                    
                    </form>
                </InputStyled>
            </RightStyled>
        </MainStyled>
        
        </>

    )

}

export default Login;


    