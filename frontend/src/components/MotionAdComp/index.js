import React from 'react';
import { MotionAdStyled } from './MotionAdStyled';

const MotionAdComp = () => {
    return (
        <MotionAdStyled>
            <header>
                <img src='/images/logo-white.png' alt="logo"></img>
                <h1>Motion</h1>
            </header>
            <section>
                <span className="friend-connect">Connect with friends and the world</span>
                <span className="friend-connect">around you with motion</span>
                <div className="app-container">
                    <div>
                        <button className="app-btn"><img src="/svgs/apple.svg" alt=""></img></button>
                    </div>
                    <div>
                        <button className="app-btn"><img src="/svgs/google.svg" alt=""></img></button>
                    </div>
                </div>
            </section>
            <footer className="footer-left">
                <div className="social-icons">
                    <div className="twitter">
                        <img src="/svgs/twitter_icon.svg" alt="" height="45px"></img>
                    </div>
                    <div className="facebook">
                        <img src="/svgs/facebook_icon.svg" alt="" height="40px"></img>
                    </div>
                    <div className="instagram">
                        <img src="/svgs/instagram_icon.svg" alt="" height="40px"></img>
                    </div>
                </div>
                <div>
                    <span className="copyright"><i className="far fa-copyright"></i> Motion 2018. All rights are reserved.</span>
                </div>
            </footer>
        </MotionAdStyled>
    )
}

export default MotionAdComp


