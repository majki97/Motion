import styled from "styled-components";
import Background from '../../assets/background_image.png'

export const MotionAdStyled = styled.section`
    
        /* border: 1px solid purple; */
        width: 40%;
        height: 100%;
        background-image: url(${Background}), linear-gradient(115deg, #922ecf 0%, #426be7);
        background-repeat: no-repeat;
        background-size: cover;
      

    header {
        /* border: 1px solid blue; */
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        /* border: 1px solid red; */
        width: 100%;
        height: 30%;
    } 

    h1 {
        color: white;
        font-size: 30px;
        font-weight: 100;
        margin-bottom: 3%;
    }

    img {
        margin-bottom: 3%;
    }

    .friend-connect {
        color: #A7A5DF;
        margin-top: 20px;
        line-height: 5px;
        
    }

    .app-container {
        /* border: 1px solid yellow; */
        width: 280px;
        display: flex;
        justify-content: space-between;
    }
              
    .app-btn {
        color: white;
        height: 40px;
        width: 126px;
        border-radius: 30px;
        font-size: 13x;
        background-color: transparent;
        border-style: none;
        border: 1px solid #A7A5DF;
        margin-top: 40px;
        align-content: center;
    }


    .footer-left {
        /* border: 1px solid yellow;  */
        width: 100%;
        height: 20%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    } 

    .social-icons {
        /* border: 1px solid yellow; */
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 180px;
        height: 40px;
    }


    .copyright {
        color: white;
        font-size: 12px;
    }

    .fa-copyright {
        color: white;
        font-size: 12px;
        
    }
`;