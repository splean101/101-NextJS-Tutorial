import Heading from '@/components/heading';
import Head from 'next/head';

const Contacts = () => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      
      <Heading text="Contacts" tag="h1" />
      <ul>
        <li>Jack</li>
        <li>Nick</li>
        <li>Fred</li>
      </ul>
    </>
  );
};

export default Contacts;
