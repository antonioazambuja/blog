import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Poppins', sans-serif !important;
  }

  /* Init: Scrollbar style */
  ::-webkit-scrollbar {
    width: 14px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #cfcfcf;
    border-radius: 3rem;
    border: 4px solid transparent;
    background-clip: padding-box;
  }
  /* End: Scrollbar style */
`;
