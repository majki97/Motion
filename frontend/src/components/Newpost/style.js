import styled from 'styled-components'

export const NewPostStyled = styled.section`
    display: flex;
    background: white;
    width: 560px;
    height: 122px;
    padding: 20px;
    box-shadow: 
        0 3px 20px rgba(229,229,229,0.73), 
        0 0 0 1px rgba(221,221,221,0.75);
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 40px;
    flex-direction: row;
    margin-left: 220px;
    border-radius: 5px;
    cursor: pointer;

    .Avatar {
        height: 60px;
        margin-top: 30px;
        
    }
    input{
        border: transparent;
        margin-left: 25px;
        margin-right: 25px;
        width: 200px;
    }
    input:focus {
        outline: none;
    }

    button{
        border-radius: 60%;
        background-image: linear-gradient(#C468FF, #6e91f6);        
        outline:none;
        height: 60px;
        width: 60px;
        #send{
            height: 25px;
            width: 25x;

        }
    } 


    &:hover {
        box-shadow: 
        0 3px 20px rgba(229,229,229,0.73), 
        0 1px 1px 0 rgba(0,0,0,0.14), 
        0 2px 1px -1px rgba(0,0,0,0.12), 
        0 1px 3px 0 rgba(0,0,0,0.20),
        0 0 0 1px rgba(221,221,221,0.75);

    }

`
// export const Form = styled.div`
    
// `
// export const Input = styled.div`
//     height: 35px;
//     font-family: Roboto, sans-serif;
//     color: black;
//     font-size: 15.5px;
//     border: none;
//     &:focus {
//     outline: none;
//   }
// `

// export const UserIcon = styled.img`
//     height: 60px;
//     width: 60px;
//     min-width: 60px;
//     margin-right: 2rem;


// `

// export const SendButton = styled.button`
//     height: 60px;
//     width: 60px;
//     min-width: 60px;
//     position: static;
//     background-image:linear-gradient(110deg, rgba(201,60,243,0.76), rgba(71,109,226,0.78));
//     border-radius: 60%;
//     outline: transparent;
//     margin-left: 120px;
    

// `

// export const Icon = styled.img`
// `


    


