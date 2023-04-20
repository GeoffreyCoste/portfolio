import React from 'react';
import SectionHero from '../../components/SectionHero';
import SectionAbout from '../../components/SectionAbout';
import SectionSkills from '../../components/SectionSkills';
import SectionPortfolio from '../../components/SectionPortfolio';
import ScrollAnimBanner from '../../components/ScrollAnimBanner';
/* import TextBanner from '../../components/TextBanner'; */
import SectionContact from '../../components/SectionContact';
import './style.scss';

const Home = () => {
  return (
    <main className="main__home">
      <SectionHero />
      <SectionAbout name="about" />
      <SectionSkills name="skills" />
      <ScrollAnimBanner />
      <SectionPortfolio name="portfolio" />
      {/* <TextBanner /> */}
      <SectionContact name="contact" />
    </main>
  );
};

export default Home;
