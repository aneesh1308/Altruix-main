import Button from '@/components/button/Button';
import Screen from '../components/screen/Screen';
import BottomGlitter from '../components/StyledText/BottomGlitter';

function About() {
  return (
    <Screen>
      <section className="container mx-auto px-16 pt-4 md:pt-16 sm:pt-12">
        <div className="mt-10 mb-6 sm:mt-8 sm:mb-4">
                <div className="py-2 text-center">
                  <BottomGlitter h2="Tech Fusion" />
                </div>
          <div className="department">
            <div className="flex 2xl:flex-col xl:flex-col lg:flex-col-reverse md:flex-col-reverse sm:flex-col-reverse mt-6">
              <div className="w-4/6 5xl:w-full sm:w-full md:w-full lg:full xl:w-full 2xl:w-full">
                <div className="py-2 text-center">
                  <BottomGlitter p=" Where coding gets quizzical and all magical !" />
                </div>

                <a
                  href="/forms"
                  className="flex pt-8 w-[fit-content] rounded-full"
                  rel="noreferrer"
                >
                  <Button>
                    <span className="z-50  block">Register</span>
                  </Button>
                </a>
              </div>

              <div className="ml-0 sm:mb-8 sm:ml-0 md:mb-8 md:ml-16 lg:mb-8 lg:ml-16 xl:mt-8 xl:ml-16 2xl:mt-8 2xl:ml-16">
                <img
                  className="pl-16 sm:pl-0"
                  src="/events/codentackle.jpg"
                  alt="ac"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Screen>
  );
}

export default About;
