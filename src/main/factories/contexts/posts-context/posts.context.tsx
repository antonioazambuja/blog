import { PropsWithChildren } from "react";

export type PostsContextFactoryProps = PropsWithChildren;

export const PostsContextFactory = ({ children }: PostsContextFactoryProps) => {
  return (
    <PostsContextFactory>
      {children}
    </PostsContextFactory>
  )
}
