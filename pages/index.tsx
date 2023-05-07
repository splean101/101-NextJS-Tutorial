import Heading from '@/components/heading';
import styles from '../styles/Home.module.scss';
import Head from 'next/head';


const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text="Hello Next!!!" tag="h1" />
    </div>
  );
};

export default Home;
