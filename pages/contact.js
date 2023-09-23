import Head from 'next/head';
import BottomGlitter from '@/components/StyledText/BottomGlitter';
import Screen from '../components/screen/Screen';

function ContactUs() {
  
  

  return (
    <Screen>
      <Head>
        <title>Contact Us</title>
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
        

        
      </section>
    </Screen>
  );
}

export default ContactUs;

 

