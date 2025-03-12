import styled from "styled-components";

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
`

export const PostContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.5rem 1rem;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.22);
  
  cursor: pointer;
  border-radius: 0.5rem;

  transition: all 0.3s ease;

  &:hover {
    opacity: 0.96;
    transform: scale(1.02);
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;

    img {
      max-width: 220px;
      height: auto;
      object-fit: cover;
      border-radius: 0.5rem;
    }
  }
`

export const PostContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  padding: 0.6rem 0;

  h3 {
    font-weight: 600;
    font-size: 1.4rem;
    color: #161616;
  }

  p {
    margin-top: 0.1rem;
    font-size: 0.9rem;
    color: #2a2a2a;
    line-height: 1.2rem;

    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  @media screen and (min-width: 768px) {
    min-height: 140px;
    gap: 1rem;
    padding-left: 0;
  }
`

export const PostFooter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const PostFooterDate = styled.span`
  margin-top: 0.4rem;
  font-size: 0.8rem;
  color: rgb(103, 103, 103);
`
