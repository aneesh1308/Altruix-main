import Button from '@/components/button/Button';
import Head from 'next/head';
import Screen from '../components/screen/Screen';
import BottomGlitter from '../components/StyledText/BottomGlitter';
import Styles from '../components/teams/Team.module.css';
import TeamCard from '../components/teams/TeamCard';


import { Symposium } from '../lib/data/TeamData';


function About() {
  return (
    <Screen>
      <Head>
        <title>TECH FUSION ✨</title>
      </Head>
      <section className="container mx-auto px-16 sm:px-4 pt-4 md:pt-16 sm:pt-12">
        <div className="my-16 w-full text-center">
          <BottomGlitter h2="Tech Fushion" />
          <h2 className="text-xl mt-3">
            <BottomGlitter p="Where Programmers become magicians" />
          </h2>
        </div>
        <div className="mt-10 mb-6 sm:mt-8 sm:mb-4">
          <div className="department">
            <div className="flex 2xl:flex-col xl:flex-col lg:flex-col-reverse md:flex-col-reverse sm:flex-col-reverse mt-6">
              <div className="w-4/6 5xl:w-full sm:w-full md:w-full lg:full xl:w-full 2xl:w-full">
                <BottomGlitter p="Event Overview:" />
                <p className="px-8 py-4 text-lg text-sky-400 !important">
                  Tech Fusion Quest is an unforgettable two-round experience
                  designed to push the boundaries of your knowledge and
                  creativity while keeping you on the edge of your seat. Get
                  ready to be tested, inspired, and amazed as you navigate
                  through this thrilling quest.
                </p>
                <BottomGlitter p="Preliminary Round :" />
                <p className="px-8 py-4 text-lg pb-4 text-sky-400 !important">
                  Each team consists of two participants who will work together
                  throughout the competition and Can Assist Each Others.
                </p>
                <BottomGlitter p="Round 1 : Fusioned Questions (30 mins per batch)" />
                <p className="px-8 py-4 text-xl text-sky-400 !important">
                  In the opening round, participants will attend the Fusioned
                  Questions round presents a mind- bending fusion of topics
                  drawn from various domains, including Artificial Intelligence,
                  Machine Learning, Deep Learning, and more.
                </p>
                <BottomGlitter p="Round 2 : The Surprise Technical Round" />
                <p className="px-8 py-4 text-xl text-sky-400 !important">
                  Get ready for an exciting surprise challenge that tests your
                  skills, adaptability, and creativity on the spot.
                </p>
                <a
                  href="/forms"
                  className="flex pt-8 w-[fit-content] rounded-full"
                  rel="noreferrer"
                >
                  <Button>
                    <span className=" z-50  block">Register</span>
                  </Button>
                </a>
              </div>

              <div className="ml-0  sm:mb-8 sm:ml-0 md:mb-8 md:ml-16 lg:mb-8 lg:ml-16 xl:mt-8 xl:ml-16 2xl:mt-8 2xl:ml-16">
                <img
                  className="pl-16 mt-8 sm:mt-0 sm:pl-0"
                  src="/events/TechFusion.jpg"
                  alt="ac"
                />
              </div>
            </div>
          </div>
        </div>
        <h2 className={Styles.postHead}>
          <BottomGlitter h2="Event Members" />
        </h2>
        <div className={Styles.cardContainer}>
          {Symposium.slice(0, 4).map((item, index) => {
            return (
              <TeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.title}
                // <img src={item.imageSrc} alt="Team Member" />
                imageSrc={`/teams/Event/${item.imageSrc}.jpg`}
                lazyImageSrc={`/teams/TechFusion/lazy/${item.imageSrc}-min.jpg`}
                socials={item.socials}
              />
            );
          })}
        </div>
      </section>
    </Screen>
  );
}

export default About;
