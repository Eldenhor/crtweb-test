import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  html {
    font-size: 43.75%;
    
    @media (min-width: 270px){
      font-size: 50%;
    }
    @media (min-width: 350px){
      font-size: 62.5%;
    }
    @media (min-width: 480px){
      font-size: 68.75%;
    }
    @media (min-width: 768px){
      font-size: 75%;
    }
    @media (min-width: 992px){
      font-size: 81.25%;
    }
    @media (min-width: 1200px){
      font-size: 87.5%;
    }
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  * {
    outline: none;
  }

  h1 {
    margin: 0;
  }

  body {
    font-family: "Roboto", Montserrat, Helvetica, sans-serif;
    color: black;
    overflow-x: hidden;
  }

  ul {
    list-style-type: none;
  }

  a {
    display: inline-block;
    text-decoration: none;
  }

  button {
    border: none;
  }
`;

