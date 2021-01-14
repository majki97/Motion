import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: "Ubuntu", sans-serif;
        box-sizing: border-box;
        
    }
`;

export const theme = {
    background: "linear-gradient(115deg, #922ecf 0%, #426be7)",
}