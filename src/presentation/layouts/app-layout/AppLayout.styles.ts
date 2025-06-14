import styled from "styled-components";

const HEADER_HEIGHT = "96px";
const FOOTER_HEIGHT = "96px";

export const AppLayoutContainer = styled.section`
  max-width: 1320px;
  min-height: calc(100dvh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT});
  margin: 0 auto;

  padding: 1rem;

  @media screen and (min-width: 768px) {
    padding: 1rem 2rem;
  }
`;
