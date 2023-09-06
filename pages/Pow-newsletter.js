import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Back from "../components2/back";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";



const Home = () => {
  return (
    <>
      <Head>
        <title> POW Principles of Wealth</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
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
      <Video />
      <Video />

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
