/* eslint-disable jsx-a11y/media-has-caption */
import Notice from '@/components/Notice';
import Head from 'next/head';
import Associations from '../components/associations/Associations';
import GridGallery from '../components/gridGallery/GridGallery';
import HomeAbout from '../components/homeAbout/HomeAbout';
import Screen from '../components/screen/Screen';
import Sponsors from '../components/sponsors/Sponsors';
import TechStack from '../components/techStack/TechStack';
import Video from '../components/video/Video';
import styles from './style';
import CountdownTimer from '../components/CountDown/CountDownTimer';

export default function Home() {
  return (
    <Screen>
      <Notice />
      <Head>
        <title>Altruix</title>
        <meta
          name="description"
          content="Altruix is an National level symposium"
        />
        <meta
          name="keywords"
          content="Symposium and Hackathon"
        />
      </Head>
      <Video />
      <CountdownTimer />
      <HomeAbout />
      <TechStack />
      <GridGallery />
      <Sponsors />
      <Associations />
    </Screen>
  );
}
