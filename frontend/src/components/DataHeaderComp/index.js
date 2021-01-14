import React from 'react';
import { DataHeaderStyled } from './DataHeaderStyled';

const DataHeaderComp = () => {
    return (
        <DataHeaderStyled >
            <p className="no-account">Don't have an account?</p>
            <button className="sign-up-btn">SIGN UP</button>
        </DataHeaderStyled> 
    )
}

export default DataHeaderComp

/* <header className="header-right">
<div><p className="no-account">Don't have an account?</p></div>
<div><button className="sign-up-btn">SIGN UP</button></div>
</header> */