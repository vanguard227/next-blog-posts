import { CommentContainer } from "../styles/comments";

export interface CommentProps {
  id: string;
  title: string;
  description: string;
  createdAt: string;
}

interface Props {
  comments: CommentProps[];
}

const Comments = ({ comments }: Props) => {
  return (
    <CommentContainer>
      {comments.map((comment: CommentProps) => {
        const createdDate = new Date(comment.createdAt).toLocaleDateString();
        return (
          <div key={comment.id}>
            <h6>{comment.title}</h6>
            <span>{createdDate}</span>
            <p>{comment.description}</p>
          </div>
        );
      })}
    </CommentContainer>
  );
};

export default Comments;
