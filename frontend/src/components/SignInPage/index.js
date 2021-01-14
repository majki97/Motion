import React from 'react';
import './style.css';
import MotionAdComp from '../MotionAdComp';
import DataHeaderComp from '../DataHeaderComp';
import DataTitleComp from '../DataTitleComp';
import SignInFormComp from '../SignInFormComp';




function SignIn () {
    return (
        <main className="main-right">
            <MotionAdComp />
            <div className="right">
                <DataHeaderComp />
                <section className="section-right">
                    <div className="form-container">
                        <DataTitleComp />
                        <SignInFormComp />
                    </div>
                </section>                
            </div>
        </main>
    )
}

export default SignIn
