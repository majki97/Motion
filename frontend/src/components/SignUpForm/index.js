import React from 'react';
import './style.css';
import MotionAdComp from '../MotionAdComp';
import NewDataHeaderComp from '../SignUpDataHeaderStyled';
import SignUpDataTitleComp from '../SignUpDataTitleComp';
import SignUpFormComp from '../SignUpFormComp';


function SignUp () {
    return (
        <main className="main-right">
            <MotionAdComp />
            <div className="right">
                <NewDataHeaderComp />
                <section className="section-right">
                    <div className="form-container">
                        <SignUpDataTitleComp />
                        <SignUpFormComp />
                    </div>
                </section>                
            </div>
        </main>
    )
}

export default SignUp
