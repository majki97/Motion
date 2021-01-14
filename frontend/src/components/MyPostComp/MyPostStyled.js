import styled from "styled-components";

export const MyPostStyled = styled.div`

    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 750px;
    padding-top: 30px;
    /* border: 1px solid green; */
    

    .person {
        display: flex;
        width: 500px;
        height: 60px;
        justify-content: space-between;
        align-items: center;
        /* border: 1px solid green; */
    }

    .info-right {
        display: flex;
        width: 200px;
        align-items: center;
        /* border: 1px solid red; */
    }

    .jenn {
        width: 50px;
        padding-right: 20px;
        /* border: 1px solid yellow; */
    }


    .online {
        color: #6D6D6D
    }


    .menu {
        width: 10px;
        margin-right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        /* border: 1px solid blue; */
    }

    .pic-comment {
        width: 500px;
        padding-top: 15px;
        padding-bottom: 15px;
    }

    .gallery {
        display: inline-flex;
        height: 500px;
        width: 500px;
        flex-wrap: wrap;
        gap: 18px;
    }

    .share-bar {
        display: flex;
        width: 500px;
        height: 60px;
        justify-content: space-between;
        align-items: flex-end;
    }

    .post-friends {
        display: flex;
        width: 200px;
        justify-content: space-between;
    }
                                
    .action {
        padding-left: 20px;
    }

    .amount-likes {
        color: #6D6D6D;
    }

`;