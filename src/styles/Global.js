import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif; /* Apply the Poppins font to all elements */
  }

  body, html {
    height: 100%;
    
  }
`;

export default GlobalStyles;
