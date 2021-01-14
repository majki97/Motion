import styled from "styled-components";

export const SignInFormStyled = styled.form`

    .data-entry {
        display: flex;
        flex-direction: column;
        width: 340px;
        height: 164px;
        align-items: center;
        /* border: 1px solid red;  */
    }

    .input-field {
        display: flex;
        height: 82px;
        width: 100%;
        justify-content: space-around;
        align-items: flex-end;
        border-bottom: 2px solid #CDCDCD;
    }

    .input-field-img {
        padding: 12px;
    }

    input {
        width: 280px;
        padding: 0 0 5px 10px;
        height: 40px;
        border-style: none;
        font-size: 16px;
    }

    .footer-right {
        display: flex;
        width: 100%;
        height: 25%;
        justify-content: center;
        /* border: 1px solid yellow; */ 
    }

    .sign-in-btn {
        height: 60px;
        width: 280px;
        font-size: 12px;
        border-radius: 30px;
        border-style: none;
        margin-top: 140px;
        background-image: linear-gradient(115deg, #922ecf 0%, #426be7);
        color: white;
        outline: none;
    }
`;

