import React, { useState } from 'react';
import TabsList from './TabsList';
import TabsContent from './TabsContent';
import './style.scss';

/* const tabsItems = [
  {
    id: 0,
    number: '01',
    title: 'frontend',
    filters: [
      'tous',
      'langages',
      'frameworks',
      'librairies',
      'plugin',
      'méthodologie',
    ],
    content: [
      {
        name: 'HTML5',
        icon: '',
        type: 'language',
      },
      {
        name: 'CSS3',
        icon: '',
        type: 'language',
      },
      {
        name: 'JavaScript',
        icon: '',
        type: 'language',
      },
      {
        name: 'React',
        icon: '',
        type: 'framework',
      },
      {
        name: 'Redux',
        icon: '',
        type: 'library',
      },
      {
        name: 'Redux Toolkit',
        icon: '',
        type: 'plugin',
      },
      {
        name: 'React-router',
        icon: '',
        type: 'library',
      },
      {
        name: 'Bootstrap',
        icon: '',
        type: 'library',
      },
      {
        name: 'Sass',
        icon: '',
        type: 'library',
      },
      {
        name: 'Styled Components',
        icon: '',
        type: 'library',
      },
      {
        name: 'Formik',
        icon: '',
        type: 'library',
      },
      {
        name: 'Yup',
        icon: '',
        type: 'library',
      },
      {
        name: 'BEM',
        icon: '',
        type: 'methodology',
      },
      {
        name: 'GSAP3',
        icon: '',
        type: 'library',
      },
    ],
  },
  {
    id: 1,
    number: '02',
    title: 'backend',
    filters: [
      'tous',
      'langages',
      'frameworks',
      'librairies',
      'plugin',
      'base de données',
    ],
    content: [
      {
        name: 'NodeJS',
        icon: '',
        type: 'framework',
      },
      {
        name: 'Express',
        icon: '',
        type: 'library',
      },
      {
        name: 'Swagger',
        icon: '',
        type: 'library',
      },
      {
        name: 'JSON Web Token',
        icon: '',
        type: 'library',
      },
      {
        name: 'Bcrypt',
        icon: '',
        type: 'library',
      },
      {
        name: 'Multer',
        icon: '',
        type: 'library',
      },
      {
        name: 'Morgan',
        icon: '',
        type: 'library',
      },
      {
        name: 'Winston',
        icon: '',
        type: 'library',
      },
      {
        name: 'Pug',
        icon: '',
        type: 'library',
      },
      {
        name: 'EJS',
        icon: '',
        type: 'library',
      },
      {
        name: 'MongoDB',
        icon: '',
        type: 'database',
      },
      {
        name: 'Mongoose',
        icon: '',
        type: 'library',
      },
    ],
  },
  {
    id: 2,
    number: '03',
    title: 'SEO',
    filters: ['tous', 'outils', 'méthodologies'],
    content: [
      {
        name: 'Lighthouse',
        icon: '',
        type: 'tool',
      },
      {
        name: 'Google Rich Snippet',
        icon: '',
        type: 'tool',
      },
      {
        name: 'Wave',
        icon: '',
        type: 'tool',
      },
      {
        name: 'Schema.org',
        icon: '',
        type: 'methodology',
      },
      {
        name: 'Aria',
        icon: '',
        type: 'methodology',
      },
    ],
  },
  {
    id: 3,
    number: '04',
    title: 'Design',
    filters: ['tous'],
    content: [
      {
        name: 'Figma',
        icon: '',
      },
      {
        name: 'Xd',
        icon: '',
      },
      {
        name: 'Photoshop',
        icon: '',
      },
      {
        name: 'Illustrator',
        icon: '',
      },
    ],
  },
]; */

const Tabs = ({ items }) => {
  const [active, setActive] = useState(0);

  const filters = [...items].reduce((acc, item) => {
    acc.push(item.title);
    return acc;
  }, []);

  return (
    <div className="tabs">
      <TabsList tabs={filters} active={active} setActive={setActive} />
      <div className="tabs__body">
        <TabsContent items={items} active={active} />
      </div>
    </div>
  );
};

export default Tabs;
