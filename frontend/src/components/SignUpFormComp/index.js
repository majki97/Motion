import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authAction } from "../../store/actions/auth";
import { useHistory } from 'react-router-dom';
import { SignUpFormStyled } from './Styled';


function SignUpFormComp() {

const [email, setEmail] = useState("michelle.lundak@yahoo.com");
const [password, setPassword] = useState("motionu2");
const dispatch = useDispatch();
const history = useHistory();

const handleEmail = (event) => {
    setEmail(event.target.value);
};


const handleSubmit = (event) => {
    event.preventDefault();
    const config = {
        body: JSON.stringify({email, password}),
        method: "POST",
        headers: new Headers ({
            "Content-Type": "application/json",
        })
    }
    console.log(config);

    fetch("https://motion.propulsion-home.ch/backend/api/auth/token/", config)
        .then((res) => res.json())
            .then((data) => {
                dispatch(authAction(data.access));
                localStorage.setItem("token", data.access)
            });
    
    history.push('/Home');        
}



    return (
        <SignUpFormStyled onSubmit={ handleSubmit }>
            <div className="data-entry">
                <div className="input-field">
                    <img className="input-field-img" src="/svgs/avatar.svg" alt=""></img>
                    <input type="text" value={ email } className="input-field-img" onChange={ handleEmail }></input>
                </div>
                {/*<div className="input-field">
                    <img className="input-field-img" src="/svgs/password.svg" alt=""></img>
                    <input type="password" value={ password } className="input-field-img" onChange={ handlePassword }></input>
                </div>*/}
            </div>
            <footer className="footer-right">
                    <button type="submit" className="sign-in-btn">SIGN UP</button>
            </footer>    
        </SignUpFormStyled>
    )
}

export default SignUpFormComp