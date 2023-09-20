import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Button from '../button/Button';
import BottomGlitter from '../StyledText/BottomGlitter';
import EventCard from '../event/EventGenral';
import EventsData from '../../lib/data/EventsData';

function HomeAbout() {
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
    <section
      ref={ref}
      className="container-70 my-16 py-16 fadeonscroll sm:transform-none sm:opacity-100"
    >
      <BottomGlitter text="About AlturIx" />
      <div className="my-6 py-2">
        <p className="text-xl w-10/12 md:w-full md:text-lg sm:text-base">
            AltruIx, our eagerly anticipated symposium, is set to captivate minds on October 7th. This dynamic event combines the best of technology and creativity, featuring two exhilarating technical competitions, "Code N Tackle" and "Tech Fusion," designed to challenge and inspire. For those seeking a break from the digital realm, our non-technical offerings include "Film Fiesta" and "Caught Adrift." Additionally, "Techno Think" provides a platform for innovators to showcase their projects. Join us for a day of exploration, collaboration, and celebration at AltruIx!
        </p>
      </div>
      <Link href="/about">
        <a className="flex w-[fit-content] rounded-full">
          <Button>
            <span className="z-50 block">View More</span>
          </Button>
        </a>
      </Link>
    </section>
  );
}

export default HomeAbout;
