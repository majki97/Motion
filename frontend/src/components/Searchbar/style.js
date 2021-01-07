import styled from 'styled-components'

export const SearchbarStyled = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10vh;
    border-bottom: 1px solid #ECECED;
    background-color: #F8F8F9;

`

export const InputStyled = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 140px;

    img{ 
        margin-right: 20px;
        padding: 0;
    }
    input {
        border: 0;
        background-color: #F8F8F9;   
    }

    input:focus {
        outline: none;
    }
`

export const LikedStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 225px;
    margin-right: 155px;
    width: 12%;

    ul {
        display: flex;
        justify-content: space-between;
        height: 100%;
        width: 100%;
        text-align: center;
    }


    li {
        text-decoration: none;
        display: flex;
        justify-content: center;
        text-align: center;
        opacity: 0.5;
        height: 100%;

       
        :hover {
            opacity: 1;
            color: black;
            border-bottom: 2px solid black;
            //padding-bottom: 10px;
        }

        a {
            display: flex;
            align-self: center;
            justify-content: center;
        }
    }
`