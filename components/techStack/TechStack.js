import { useEffect, useRef } from 'react';
import Styles from './tech-stack.module.css';
import BottomGlitter from '../StyledText/BottomGlitter';

function TechStack() {
  return (
    <section className={`${Styles.techStack}`}>
      <div className="container-70">
        <Design />
        <Development />
        <Code />
      </div>
    </section>
  );
}

export default TechStack;

function Design() {
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        if (window.innerHeight + 100 > ref.current.getBoundingClientRect().y) {
          ref.current.classList.add('active');
        } else {
          ref.current.classList.remove('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={ref} className={`${Styles.row} mt-40 fadeonscroll`}>
      <div className={`${Styles.col} ${Styles.col40}`}>
        <h2 className={Styles.header}><BottomGlitter text="Technical" /></h2>
      </div>
      <div className={`${Styles.col} ${Styles.col60}`}>
        <div className={Styles.headDescription}>
          <p>The collaboration of technology and its ideas which allows you to think , create , & innovate ideas based on exploring the world of technology.  It provides a chance to view the great minds of developers with tricky rounds and brain nullifying questions which develops your technical skills.</p>
        </div>
        <div className={Styles.contentContainer}>
          <div className={Styles.content}>
            <h2>Websites and Platform</h2>
            <p>
              We design projects of different complexity and size. No matter if
              it is a simple single-page website or a complex admin panel with
              numerous dashboards - we make it visually pleasing, consistent,
              and user-friendly.
            </p>
          </div>
          <div className={Styles.content}>
            <h2>Mobile Applications</h2>
            <p>
              We don’t simply design beautiful interfaces but craft them in
              accordance with each platforms’ guidelines to make the use of our
              app intuitive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Development() {
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        if (window.innerHeight + 100 > ref.current.getBoundingClientRect().y) {
          ref.current.classList.add('active');
        } else {
          ref.current.classList.remove('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={ref} className={`${Styles.row} mt-40 fadeonscroll sm:mt-4`}>
      <div className={`${Styles.col} ${Styles.col40}`}>
        <h2 className={Styles.header}><BottomGlitter text="Non Technical" /></h2>
      </div>
      <div className={`${Styles.col} ${Styles.col60}`}>
        <div className={Styles.headDescription}>
          <p>It’s a combination of fun filled, mind-blowing event which is full of enjoyment, entertainment and enthusiasm as well as we are able to boosts up our thinking capabilities and exploring our memory lane.</p>
        </div>
        <div className={Styles.contentContainer}>
          <div className={Styles.content}>
            <h2>Website</h2>
            <p>
              We create web projects tailored exclusively with industry scales,
              be it a landing page, a complex web app to automate our processes
              or a high-load platform with sound backend architecture.
            </p>
          </div>
          <div className={Styles.content}>
            <h2>Native/Hybrid Apps</h2>
            <p>
              We build custom Android mobile apps using Java(Kotlin) and
              multiple cross platform (IoS and Andorid) mobile apps using React
              Native and Flutter.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Code() {
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        if (window.innerHeight + 100 > ref.current.getBoundingClientRect().y) {
          ref.current.classList.add('active');
        } else {
          ref.current.classList.remove('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div ref={ref} className={`${Styles.row} mt-40 fadeonscroll sm:mt-4`}>
      <div className={`${Styles.col} ${Styles.col40}`}>
        <h2 className={Styles.header}><BottomGlitter text="Techno Think" /></h2>
      </div>
      <div className={`${Styles.col} ${Styles.col60}`}>
        <div className={Styles.headDescription}>
        <p>Join us at Techno Think, where innovators and enthusiasts from diverse sectors gather to present their work and ideas. It's a dynamic event to showcase your project, exchange ideas, and engage in meaningful conversations. Whether you're an individual, student, or simply curious about the latest advancements, Techno Think on October 7th is your chance to explore innovation and creativity. Don't miss it!</p>
        </div>
      </div>
    </div>
  );
}
