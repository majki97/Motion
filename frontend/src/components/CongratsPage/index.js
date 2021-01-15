import React from 'react';
import './style.css';
import MotionAdComp from '../MotionAdComp';
import DataHeaderComp from '../DataHeaderComp';
import DataTitleComp from '../DataTitleComp';
import SignInFormComp from '../SignInFormComp';




function Congrats () {
    return (
        <main className="main-right-congrats">
            <MotionAdComp />
            <div className="congrats-right">
                <section className="section-right-congrats">
                    <div className="congrats-container">
                        <p className="title">Congratulations!</p>
                        <img className="purple_tick-img" src="/images/check_purple.jpg" alt=""></img>
                        <div className="confirmation">
                            <p className="confirmation_msg">We've sent a confirmation code to your email</p>
                            <p className="confirmation_msg">example@example.com</p>
                        </div>
                    </div>
                </section>
                <footer className="footer-btn">
                    <button type="submit" className="continue-btn">continue</button>
                </footer>                    
            </div>
        </main>
    )
}

export default Congrats
