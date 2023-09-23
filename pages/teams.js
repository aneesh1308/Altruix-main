import Head from 'next/head';
import BottomGlitter from '@/components/StyledText/BottomGlitter';
import Screen from '../components/screen/Screen';
import TeamCard from '../components/teams/TeamCard';
import Styles from '../components/teams/Team.module.css';
import { Symposium } from '../lib/data/TeamData';

function Teams() {
  return (
    <Screen>
      <Head>
        <title>Our Amazing Team ✨</title>
      </Head>
      <section className="mt-16 mb-12 container-70">
        <div className="my-16 w-full text-center">
          <BottomGlitter text="Our Team" />
          <h3 className="text-lg mt-8">
            The strength of the team is each individual member. The strength of
            each member is the team.
            <br />- Phil Jackson
          </h3>
        </div>

        <h2 className={Styles.postHead}> <BottomGlitter h2="HEADDD" /></h2>
        <div className={Styles.cardContainer}>
          {Symposium.slice(0, 20).map((item, index) => {
            return (
              <TeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.title}
                imageSrc={`/teams/Event/${item.imageSrc}.webp`}
                lazyImageSrc={`/teams/2k19/lazy/${item.imageSrc}-min.jpg`}
                socials={item.socials}
              />
            );
          })}
        </div>
        <h2 className={Styles.postHead}>Board Of Directors</h2>
        <div className={Styles.cardContainer}>
          {Symposium.slice(0, 20).map((item, index) => {
            return (
              <TeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.title}
                imageSrc={`/teams/2k19/${item.imageSrc}.jpg`}
                lazyImageSrc={`/teams/2k19/lazy/${item.imageSrc}-min.jpg`}
                socials={item.socials}
              />
            );
          })}
        </div>
      </section>
    </Screen>
  );
}

export default Teams;
