import React from 'react';
import { Link } from 'react-router-dom';
import { SignUpFormStyled } from './Styled';

function SignUpFormComp () {
    return (
        <SignUpFormStyled>
            <div className="data-entry">
                <div className="input-field">
                    <img className="input-field-img" src="/svgs/avatar.svg" alt=""></img>
                    <input type="email" className="input-field-img" placeholder='example@example.com'></input>
                </div>
            </div>
            <footer className="footer-right">
                    <Link to= '/Congrats'><button type="submit" className="sign-in-btn">SIGN UP</button></Link>
            </footer>    
        </SignUpFormStyled>
    )

}

export default SignUpFormComp