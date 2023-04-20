import React, { useState } from 'react';
import TabsList from './TabsList';
import TabsContent from './TabsContent';
import './style.scss';

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
