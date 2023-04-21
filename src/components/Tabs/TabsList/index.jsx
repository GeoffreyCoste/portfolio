import React from 'react';

const TabsList = ({ tabs, active, setActive }) => {
  return (
    <ul className="tabs__list">
      {tabs.map((tab, index) => {
        return (
          <li
            key={`${index}-2097ef50-1084-49e0-a300-0b63abdf267e`}
            className={`tabs__list__item${active === index ? ' active' : ''}`}
            onClick={() => setActive(index)}
            /* isActive={active === index} */
          >
            {tab}
          </li>
        );
      })}
    </ul>
  );
};

export default TabsList;
