import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Back from "../components2/back";
import Video2 from "../components2/video2";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Courses from '../components2/Courses';





const Home = () => {
  return (
    <>
      <Head>
        <title> POW Principles of Wealth</title>
        <meta
          name="description"
          content="POW"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Benefits of POW"
        title=" Why should you be involved with POW">
        You should be involved with POW becausejjj.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Watch this video about who we are as a team">
        A preview of the POW Courses.
      </SectionTitle>
      <h1>Welcome to our Courses</h1>
      <Video2 />
      <Courses />


    <div>
      <Back />
      <div className="content">
        {/* Your page content goes here */}
      </div>
    </div>


      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our members have  said">
        Watch our trusted testimonials from our partners and associates.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        the most frequently asked questions for new eyes looking at Principles Of Wealth.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;
