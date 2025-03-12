import { ComponentProps } from "react"
import * as C from './Header.style'
import { useNavigate } from "react-router-dom"

type HeaderProps = ComponentProps<'header'>

export const Header = ({ ...props }: HeaderProps) => {
  const navigate = useNavigate()

  const handleLogoClick = () => {
    navigate('/')
  }
  
  return (
    <C.HeaderContainer {...props}>
      <C.HeaderTitle onClick={handleLogoClick}>Antonio Azambuja</C.HeaderTitle>
      <C.HeaderNav>
        <C.HeaderList>
          {/* <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li> */}
        </C.HeaderList>
      </C.HeaderNav>
    </C.HeaderContainer>
  )
}
