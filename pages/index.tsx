import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { useQuery } from "react-query";
import Pagination from "../components/pagination";
import PostCard from "../components/post-card";
import { Container, Posts } from "../styles/posts";

const BLOG_DATA_API =
  "https://6144e843411c860017d256f0.mockapi.io/api/v1/posts";

const postCountPerPage = 5;

const Home: NextPage = () => {
  const [page, setPage] = useState(1);

  const {
    isLoading,
    isError,
    isSuccess,
    data: posts,
  } = useQuery("blogData", () =>
    fetch(BLOG_DATA_API).then((res) => res.json())
  );

  const handleChange = (value: number) => {
    setPage(value);
  };

  if (isLoading) return <div>Loading...</div>;

  const pagePosts = posts.slice(
    postCountPerPage * (page - 1),
    Math.min(posts.length, postCountPerPage * page)
  );

  return (
    <Container>
      <Head>
        <title>Blog Posts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Blog Posts</h1>
      <Posts>
        {pagePosts.map((post: any) => (
          <PostCard
            key={post.id}
            title={post.title}
            createdAt={post.createdAt}
            description={post.description}
            authors={post.authors}
            comments={post.comments}
          />
        ))}
      </Posts>
      <Pagination page={page} setPage={handleChange} total={posts.length} limit={postCountPerPage} />
    </Container>
  );
};

export default Home;
