import { AuthorContainer, AvatarIcon } from "../styles/authors";

export interface AuthorPros {
  id: string;
  name: string;
  avatar: string;
}

interface Props {
  authors: AuthorPros[];
}

const Authors = ({ authors }: Props) => {
  return (
    <AuthorContainer>
      {authors.map((author) => (
        <div key={author.id}>
          <AvatarIcon>
            <img
              alt="image"
              src={
                "https://i.pinimg.com/564x/64/a5/f2/64a5f243aa5efbea4bb704007459f4c3--create-a-cartoon-annoying-things.jpg"
              }
            />
            {/* <img alt="image" src={author.avatar} /> */}
          </AvatarIcon>
          <p>{author.name}</p>
        </div>
      ))}
    </AuthorContainer>
  );
};

export default Authors;
