import Button from '@/components/button/Button';
import Screen from '../components/screen/Screen';
import BottomGlitter from '../components/StyledText/BottomGlitter';

function About() {
  return (
    <Screen>
     
      <section className="container mx-auto px-16 pt-4 md:pt-16 sm:pt-12">
        <div className="mt-20 mb-6 sm:mt-8 sm:mb-4">
          <BottomGlitter text="RIDDLE ARCADE" />
          <div className="department">
            <div className="flex 2xl:flex-col xl:flex-col lg:flex-col-reverse md:flex-col-reverse sm:flex-col-reverse mt-6">
              <div className="w-4/6 5xl:w-full sm:w-full md:w-full lg:full xl:w-full 2xl:w-full">
                <p className="text-lg text-sky-400 !important">
                  SRM Valliammai Engineering college (An Autonomous Institution) was established on September 9,
                  1999, and presently conducts 11 Undergraduate courses and 8 Postgraduate courses. The college
                  has highly qualified, dynamic and dedicated renowned faculty both from academic and industrial
                  background. Besides, the students bring laurels to the college by securing university ranks.
                  The SRM Valliammai Engineering College is a part of the SRM Group of Educational Institutions,
                  sponsored by the Valliammai Society. The Valliammai Society was founded by
                  Dr.T.R.Paarivendhar, a well-known educationist, in the name of his mother Tmt.
                  R.Valliammai, under whose care and guidance he attained greater heights in his
                  personal development and whose ideals continue to inspire him.
                </p>
                <a
                  href='/forms'
                  className="flex pt-8 w-[fit-content] rounded-full"
                  rel="noreferrer"
                >
                  <Button>
                    <span className="z-50  block">Register</span>
                  </Button>
                </a>
              </div>
             
              <div className='ml-0 sm:mb-8 sm:ml-0 md:mb-8 md:ml-16 lg:mb-8 lg:ml-16 xl:mt-8 xl:ml-16 2xl:mt-8 2xl:ml-16'> 
                <img className='pl-16 sm:pl-0' src='/events/RiddleArcade.jpg' 
                  alt='as'

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
