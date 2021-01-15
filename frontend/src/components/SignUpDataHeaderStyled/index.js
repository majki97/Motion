import React from 'react';
import { Link } from 'react-router-dom';
import { NewDataHeaderStyled } from './style';

const NewDataHeaderComp = () => {
    return (
        <NewDataHeaderStyled >
            <p className="no-account">Already have an account?</p>
            <Link to='/'><button className="sign-up-btn">SIGN IN</button></Link>
        </NewDataHeaderStyled> 
    )
}

export default NewDataHeaderComp
