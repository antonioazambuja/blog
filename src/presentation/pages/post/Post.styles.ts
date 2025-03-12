import styled from "styled-components";

export const PostContainer = styled.article`
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;

  min-height: calc(100vh - 96px - 96px - 2rem);
`;

export const PostTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: #161616;
  margin-bottom: 1.5rem;
`;

export const PostHeader = styled.div`
  margin-bottom: 2.5rem;
`;

export const PostHeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  img {
    width: 96px;
    height: 96px;
    border-radius: 50%;

    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  span {
    font-size: 0.8rem;
    color: #161616;
    margin-bottom: 0.3rem;
  }
`;

export const PostHeaderPostInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostAuthor = styled.strong`
  font-size: 1.1rem;
  font-weight: 500;
  color:rgb(35, 35, 35);
  margin-bottom: 0.4rem;
`;
