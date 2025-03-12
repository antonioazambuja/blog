import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100vw;
  max-height: 15vh;
  height: 96px;

  padding: 1rem 2rem;
  display: flex;
  gap: 4rem;
  align-items: center;
  justify-content: space-between;
`

export const HeaderTitle = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color:rgb(44, 44, 44);

  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #262424;

    transform: scale(1.01);
  }
`

export const HeaderNav = styled.nav`
`

export const HeaderList = styled.ul`
  display: flex;
  gap: 1.5rem;

  a {
    color: #262424;

    &:hover {
      color: #161616;

      transition: all 0.4s ease;
    }
  }
`
