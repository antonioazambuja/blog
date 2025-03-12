import * as C from "./Home.style"

import { Posts } from "./components/posts/Posts"

const Home = () => {

  return (
    <C.HomeContainer>
      <Posts />
    </C.HomeContainer>
  )
}

export default Home