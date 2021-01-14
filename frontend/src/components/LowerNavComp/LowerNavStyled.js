import styled from "styled-components";

export const LowerNavStyled = styled.div`
    
    border: 1px solid #E7E7E8;
    background-color: #F2F2F4;
    width: 100%;
    height: 65px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;


    .nav2-left {
        display: flex;
        flex-direction: row;
        width: 400px;
        align-items: center;
        justify-content: center;
    }


    .search-logo {
        padding: 10px;
    }

    .search-posts {
        color: #69696A;
        background-color: #F2F2F4;
        border-style: none;
        font-size: 16px;
    }


    .nav2-right {
        display: flex;
        flex-direction: row;
        width: 300px;
        justify-content: space-evenly;
        align-items: center;
        margin-right: 100px;
    }

    .liked,
    .friends,
    .follow {
        color: #69696A;
    }

`;