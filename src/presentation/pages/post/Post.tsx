import * as C from "./Post.styles";

import { useContext, useEffect, useState } from "react";
import AuthorImage from "@/assets/author/antonio.azambuja.jpeg";
import { useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { PostsContext } from "@/contexts";
import { PostType } from "@/types";
import { formatDate } from "@/utils";
import { Tags } from "@/components";

const Post = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { getPost } = useContext(PostsContext);
  const [content, setContent] = useState<string | null>("");
  const [attributes, setAttributes] = useState<PostType>({} as PostType);

  const handleError = (error: Error) => {
    console.error(error);

    setContent(null);

    navigate("/");
  };

  useEffect(() => {
    const fetchPost = async (slug: string) => {
      try {
        const { markdown, ...attributes } = await getPost(slug);

        setAttributes(attributes);
        setContent(markdown);
      } catch (e) {
        const error = e as Error;
        handleError(error);
      }
    };

    if (!slug) return;

    fetchPost(slug);
  }, [slug, getPost]);

  if (!Object.keys(attributes).length) return null;

  return (
    <C.PostContainer>
      {content === null ? (
        <div>Post not found</div>
      ) : (
        <>
          <C.PostHeader>
            <C.PostTitle>{attributes.title}</C.PostTitle>
            <C.PostHeaderContent>
              <img
                src={AuthorImage}
                alt={"Author"}
              />
              <C.PostHeaderPostInfo>
                <C.PostAuthor>{attributes.author}</C.PostAuthor>
                <span>{formatDate(attributes.date)}</span>
                <Tags tags={attributes.tags} />
              </C.PostHeaderPostInfo>
            </C.PostHeaderContent>
          </C.PostHeader>
          <ReactMarkdown children={content} className="markdown-body" />
        </>
      )}
    </C.PostContainer>
  );
};

export default Post;
