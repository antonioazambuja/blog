import { Tags } from "@/components"
import * as C from "./Posts.style"

import PostImage from "@/assets/posts/transitioning-from-devops-to-swe.png";

import { PostsContext } from "@/contexts"
import { formatDate } from "@/utils"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

export const Posts = () => {
  const { posts } = useContext(PostsContext)
  const navigate = useNavigate()

  const handlePostClick = (slug: string) => {
    navigate(`/${slug}`)
  }

  return (
    <>
      {
        posts.map(({ date, slug, tags, title, summary }) => (
          <C.PostContainer key={slug} onClick={() => handlePostClick(slug)}>
            <img src={PostImage} alt={`Image post ${title}`} />
            <C.PostContainerContent>
              <h3>{title}</h3>
              {summary && <p>{summary}</p>}
              <C.PostFooter>
                <C.PostFooterDate>{date ? formatDate(date) : null}</C.PostFooterDate>
                <Tags tags={tags} />
              </C.PostFooter>
            </C.PostContainerContent>
          </C.PostContainer>
        ))
      }
    </>
  )
}
