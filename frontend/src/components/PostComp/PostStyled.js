import styled from "styled-components";

export const PostStyled = styled.div`

    background-color: white;
    display: flex;
    flex-direction: column;
    height: 230px;
    padding-bottom: 30px;
    align-items: center;
    /* border: 1px solid red; */
    margin-bottom: 10px;

    .person {
        
        display: flex;
        width: 500px;
        height: 60px;
        padding-top: 20px;
        justify-content: flex-start;
        align-items: center;
    }

    .user {
        padding-right: 20px;  
        /* border: 1px solid red; */
    }

    .online {
        color: #6D6D6D;
    }

    .pic-comment {
        width: 500px;
        padding-top: 30px;
        padding-bottom: 15px;
    }

    .share-bar {
        display: flex;
        width: 500px;
        height: 60px;
        justify-content: space-between;
        align-items: flex-end;
        /* border: 1px solid red; */
    }

    .post-friends {
        display: flex;
        width: 200px;
        justify-content: space-between;
        /* border: 1px solid green; */
    }
                                
    .action {
        padding-left: 20px;
        /* border: 1px solid orange; */
    }

    .amount-likes {
        color: #6D6D6D;
    }
`;