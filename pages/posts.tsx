import Heading from '@/components/heading';
import Head from 'next/head';

const Posts = () => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text="Post list:" tag="h2" />
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
    </>
  );
};

export default Posts;
