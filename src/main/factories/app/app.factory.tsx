import { GlobalStyle, ResetStyle } from '@/libs'
import { AppRouter } from '../../routes/AppRouter'


const AppFactory = () => {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <AppRouter />
    </>
  )
}

export default AppFactory
