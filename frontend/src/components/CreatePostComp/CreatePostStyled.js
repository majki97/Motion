import styled from "styled-components";

export const CreatePostStyled = styled.form`
    
    background-color: white;
    display: flex;
    flex-direction: row;
    height: 120px;
    padding-bottom: 30px;
    justify-content: space-around;
    align-items: center;
    padding-top: 20px;

    .thought {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 400px;
        height: 60px;
        /* border: 1px solid red; */
    }

    .avatar {
        height: 50px;
    }

    .thought-text {
        width: 300px;
        color: #6D6D6D;
        padding-left: 20px;
        border-style: none;
        font-size: 16px;
    }
                    

    .send {
        display: flex;
        justify-content: flex-start;
    }

    .send-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        border-style: none;
        background-image: linear-gradient(115deg, #922ecf 0%, #426be7);
    }
`;