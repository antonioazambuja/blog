import * as C from './Footer.styles'

import { ComponentProps } from "react"

type FooterProps = ComponentProps<'footer'>

export const Footer = ({ ...props }: FooterProps) => {
  return (
    <C.FooterContainer {...props}>
      <p>💡 Este blog compartilha insights, práticas e novidades sobre Site Reliability Engineering, DevOps e infraestrutura escalável.</p>
    </C.FooterContainer>
  )
}
