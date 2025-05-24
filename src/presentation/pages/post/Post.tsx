import * as C from "./Post.styles";

import { useContext, useEffect, useState } from "react";
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
                src={
                  "https://camo.githubusercontent.com/444008db71c058981970dc8f0898e624f5f663c6e601fa1f6b85ab09a0d3936b/68747470733a2f2f6f63746f6465782e6769746875622e636f6d2f696d616765732f426c61636b746f6361745f73696e676c655f312e6a7067"
                }
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
