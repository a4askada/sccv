import {font} from "./Common";
import {theme} from "./Theme";
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
   font-family: "Poppins",-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
   'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   color:${theme.colors.font}
   
}

a {
   text-decoration: none;
   cursor: pointer;
   color: ${theme.colors.font};
  
}

ul {
   list-style: none;
}

button {
 background-color  : unset ;
 border: none;
 cursor: pointer;
 }

 section:nth-of-type(odd){
   background-color: ${theme.colors.primaryBg};
 }
 section:nth-of-type(even){
   background-color: ${theme.colors.secondaryBg};
 }

section{
   padding: 100px 0;


   @media ${theme.media.mobile}{
      padding: 80px 0

   }} 

h3{
  
font-family: "Josefin Sans";
font-size: 16px;
font-weight: 700;
letter-spacing: 1px;

}
p{

font-family: Poppins;
font-size: 14px;
line-height: 1.4;
font-weight: 400;



}

`;
