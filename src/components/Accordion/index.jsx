import React from 'react';
import AccordionItem from './AccordionItem';
import './style.scss';

const Accordion = ({ items }) => {
  return (
    <div className="accordion">
      {items.map((item, index) => {
        const { id, toggle, collapse } = item;
        return (
          <AccordionItem
            key={`${index}-00d1924b-9dd3-4edf-b498-ace1ad03b978`}
            index={index}
            id={id}
            toggle={toggle}
            collapse={collapse}
          />
        );
      })}
    </div>
  );
};

export default Accordion;
