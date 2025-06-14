import * as C from './Footer.styles'

import { ComponentProps } from "react"

type FooterProps = ComponentProps<'footer'>

export const Footer = ({ ...props }: FooterProps) => {
  return (
    <C.FooterContainer {...props}>
      <p>💡 Este blog compartilha insights, práticas e novidades sobre SRE, DevOps e Software Engineer.</p>
    </C.FooterContainer>
  )
}
