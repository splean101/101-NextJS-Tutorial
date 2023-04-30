import Heading from '@/components/heading';
import styles from '../styles/Home.module.scss';

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Heading text="Hello Next!!!" tag="h1" />
    </div>
  );
};

export default Home;
