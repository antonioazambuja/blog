import { PropsWithChildren, useEffect, useState } from "react";
import { PostType, PostMardown, PostWithMarkdown } from "../../../@types/posts.type";
import { createContext } from "react";

export type PostsContextProps = {
  posts: PostType[],
  getPost: (name: string) => Promise<PostWithMarkdown>
}

export const PostsContext = createContext<PostsContextProps>(
  {} as PostsContextProps,
)

const getPosts = async () => {
  const response = import.meta.glob('/src/data/posts/*.md')

  return response;
}

const getSlugByKey = (key: string) => {
  const keyWithoutExtension = key.replace('.md', '')
  const keySplited = keyWithoutExtension.split('/')
  const slugFormated = keySplited.pop() || ''

  return {
    slug: slugFormated,
  }
}

type PostsProviderProps = PropsWithChildren

export const PostsProvider = ({ children }: PostsProviderProps) => {
  const [posts, setPosts] = useState<PostType[]>([])

  const getPostResponse = async (path: string) => {
    const response = await getPosts()

    try {
      const post = response[path];

      if (post) {
        return (await post() as PostMardown)
      }

      throw new Error('Post not found')
    } catch (e) {
      console.error(e)
      throw e;
    }
  }

  const fetchPosts = async () => {
    try {
      const response = await getPosts()

      const posts = Object.keys(response).map(async (path) => {
        const { slug } = getSlugByKey(path)

        const { attributes, markdown } = await getPostResponse(path)

        console.log(attributes)
        return {
          slug,
          markdown,
          ...attributes,
        }
      })

      const postsResolved = await Promise.all(posts)
      setPosts(postsResolved)
    } catch (e) {
      console.error(e)
    }
  }

  const getPost = async (name: string) => {
    const path = `/src/data/posts/${name}.md`
    const { attributes, markdown } = await getPostResponse(path)
    const { slug } = getSlugByKey(name)

    return {
      slug,
      markdown,
      ...attributes,
    }
  }

  useEffect(() => {
    const fetchData = async () => await fetchPosts()

    fetchData()
  }, [])

  return (
    <PostsContext.Provider
      value={{
        posts,
        getPost,
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}
