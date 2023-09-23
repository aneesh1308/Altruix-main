import Button from '@/components/button/Button';
import Screen from '../components/screen/Screen';
import BottomGlitter from '../components/StyledText/BottomGlitter';

function About() {
    return (
      <Screen>
        <section className="container mx-auto px-1 pt-4 md:pt-16 sm:pt-12">
          <div className="mt-10 mb-6 sm:mt-8 sm:mb-4">
            <div className="py-2 text-center">
              <BottomGlitter text="TECHO THINK" />
            </div>
            <div className="department">
              <div className="flex 2xl:flex-col xl:flex-col lg:flex-col-reverse md:flex-col-reverse sm:flex-col-reverse mt-6">
                <div className="w-4/6 5xl:w-full sm:w-full md:w-full lg:full xl:w-full 2xl:w-full">
                  <div className="py-2 mb-4 text-center">
                    <BottomGlitter p=" Where coding gets quizzical and all magical !" />
                  </div>

                  <p className="px-8 py-2 text-lg text-sky-400 !important">
                    Techno Think is an exciting and dynamic event that brings
                    together innovators, creators, and enthusiasts from various
                    fields to showcase their projects and share their insights
                    with a diverse audience. This event serves as a platform for
                    participants to present their work, exchange ideas, and
                    engage in meaningful discussions.
                  </p>
                  <BottomGlitter p="Preliminary Round :" />
                  <p className="px-8 py-4 text-lg pb-4 text-sky-400 !important">
                    Check the submission guidelines provided and submit your
                    presentation. If your presentation is accepted, prepare to
                    deliver it on the event day. Practice your delivery and be
                    ready to engage with the audience.
                  </p>
                  <BottomGlitter p="Round 1 InnoScape :" />
                  <ul className="px-8 py-2 text-lg list-disc p-5">
                    <li>Start with the PowerPoint presentation.</li>
                    <li>
                      Use this visual aid to provide a structured overview of
                      your project, covering key points and highlights.
                    </li>
                    <li>
                      Keep the presentation clear, concise, and visually
                      engaging.
                    </li>
                    <li>Use slides to support your narrative.</li>
                    <li>
                      Transition smoothly from the PPT to the live project demo.
                    </li>
                    <li>
                      Walk the judges through the actual project or demonstrate
                      how it works in real-time.
                    </li>
                    <li>
                      Highlight key features and functionalities while
                      explaining their significance.
                    </li>
                  </ul>
                  <BottomGlitter p="Round 2 InnoQuest :" />
                  <ul className="px-8 py-3 text-lg list-disc p-5">
                    <li>
                      Teams within each group will engage in discussions,
                      brainstorming sessions, where the project details will be
                      explained in depth.
                    </li>
                    <li>
                      Other teams in the group give a problem statement based on
                      your project, it can be a enhancement in project.
                    </li>
                    <li>
                      You have to give a problem solution and satisfy other
                      teams in the group.
                    </li>
                    <li>Top three teams are decided by the judges.</li>
                  </ul>
                  <BottomGlitter p="Theme:" />

                  <ul className="px-8 py-3 text-xl list-disc p-5">
                    <li>Automation</li>
                    <li>Network & Security.</li>
                    <li>Internet of Things</li>
                    <li>Agriculture</li>
                    <li>Healthcare</li>
                  </ul>
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
                    alt="abc"
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
