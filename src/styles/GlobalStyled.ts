import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
} 

body {
   /* font-family: "",-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
   'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale; */
}

a {
   text-decoration: none;
   cursor: pointer;
  
}

ul {
   list-style: none;
}

button {
 background-color  : unset ;
 border: none;
 cursor: pointer;
 }


`;
