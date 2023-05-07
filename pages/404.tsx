import Heading from '@/components/heading';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <Heading text="404" tag="h1" />
      <Heading text="Something is going wrong..." tag="h2" />
    </>
  );
};

export default Error;
