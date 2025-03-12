import * as C from './AppLayout.styles';

import { Footer, Header } from "@/components";
import { PostsProvider } from "@/contexts";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <>
      <Header />
      <PostsProvider>
        <C.AppLayoutContainer>
          <Outlet />
        </C.AppLayoutContainer>
      </PostsProvider>
      <Footer />
    </>
  )
}
