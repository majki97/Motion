import styled from "styled-components";

export const UpperNavStyled = styled.div`
    
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
    width: 100%;
    height: 65px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* border: 1px solid red; */
    


    .nav1-left {
        display: flex;
        flex-direction: row;
        width: 460px;
        justify-content: space-evenly;
        align-items: center;
        /* border: 1px solid blue; */
    }

    .motion-logo {
        display: flex;
        flex-direction: row;
        width: 140px;
        height: 100%;
        align-items: center;
        justify-content: space-evenly;
        margin: 15px;
        /* border: 1px solid green; */
    }

    .motion {
        font-size: 22px;
    }

    .post-friends {
        display: flex;
        flex-direction: row;
        width: 270px;
        height: 70%;
        justify-content: space-between;
        /* border: 1px solid red; */
    }


    .posts-logo {
        display: flex;
        flex-direction: row;
        width: 100px;
        align-items: center;
        justify-content: space-evenly;
        /* border: 1px solid yellow; */
    }

    .friends-logo {
        display: flex;
        flex-direction: row;
        width: 150px;
        align-items: center;
        justify-content: space-evenly;
        /* border: 1px solid pink; */
    }


    .nav1-right {
        display: flex;
        flex-direction: row;
        width: 140px;
        margin-right: 20px;
        justify-content: space-between;
        /* border: 1px solid red; */
    }

    .bell,
    .jenn,
    .menu {
        display: flex;
        flex-direction: row;
        width: 200px;
        align-items: center;
        justify-content: space-evenly;
        margin: 10px;
    }
`;