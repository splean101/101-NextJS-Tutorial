import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import Image from 'next/image';
import youtubeImg from '../public/youtube.png';
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
      <Image
        src={youtubeImg}
        width={500}
        height={350}
        alt="preview"
        placeholder="blur"
      />
    </Layout>
  );
};

export default App;
