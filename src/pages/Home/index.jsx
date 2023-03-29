import React from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../app/selectors';
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
  const theme = useSelector(selectTheme);

  return (
    <main className="main__home">
      <SectionHero />
      <SectionAbout />
      <SectionSkills />
      <SectionPortfolio />
      <SectionContact />
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
