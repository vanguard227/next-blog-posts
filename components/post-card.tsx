import { useState } from "react";
import { CommentButton, Container } from "../styles/post-card";
import Authors from "./authors";
import { AuthorPros } from "./authors";
import Comments, { CommentProps } from "./comments";

interface Props {
  title: string;
  createdAt: string;
  description: string;
  authors: AuthorPros[];
  comments: CommentProps[];
}

const PostCard = ({
  title,
  createdAt,
  description,
  authors,
  comments,
}: Props) => {
  const [showComment, setShowComment] = useState(false);

  const handleComment = () => {
    setShowComment((prev) => !prev);
  };

  const createdTime = new Date(createdAt).toLocaleDateString();

  return (
    <Container>
      <h3>{title}</h3>
      <span>{createdTime}</span>
      <p>{description}</p>
      <Authors authors={authors} />
      <CommentButton
        onClick={() => {
          handleComment();
        }}
      >
        Comments ({comments.length})
      </CommentButton>
      {showComment && <Comments comments={comments} />}
    </Container>
  );
};

export default PostCard;
