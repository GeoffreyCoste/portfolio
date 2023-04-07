import React from 'react';
import SectionHero from '../../components/SectionHero';
import SectionAbout from '../../components/SectionAbout';
import SectionSkills from '../../components/SectionSkills';
import SectionPortfolio from '../../components/SectionPortfolio';
import SectionContact from '../../components/SectionContact';
/* import SectionContent from '../../components/SectionContent'; */
import './style.scss';
import SectionThanks from '../../components/SectionThanks';

/* const sections = [
  {
    classModifier: 'about',
    title: 'a propos',
    baseline: 'qui suis-je ?',
    Number: One,
    addOns: null,
  },
  {
    classModifier: 'skills',
    title: 'competences',
    baseline: 'technologies',
    Number: Two,
    addOns: null,
  },
  {
    classModifier: 'portfolio',
    title: 'portfolio',
    baseline: 'projets',
    Number: Three,
    addOns: null,
  },
]; */

const Home = () => {
  return (
    <main className="main__home">
      <SectionHero />
      <SectionAbout name="about" />
      <SectionSkills name="skills" />
      <SectionPortfolio name="portfolio" />
      <SectionContact name="contact" />
      <SectionThanks />
      {/* {sections.map((section, index) => {
        return (
          <SectionContent
            key={`${index}-8e0613e8-55e6-42d4-9b00-b24d86c3b5cb`}
            section={section}
          ></SectionContent>
        );
      })} */}
    </main>
  );
};

export default Home;
