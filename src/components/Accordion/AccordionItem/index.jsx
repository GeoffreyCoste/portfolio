import React, { useState } from 'react';
import AccordionCollapse from './AccordionCollapse';
import AccordionToggle from './AccordionToggle';

const AccordionItem = ({ index, id, toggle, collapse }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="accordion__item border-blue">
      <AccordionToggle
        index={index}
        toggle={toggle}
        active={isActive}
        handleClick={handleClick}
      />
      <AccordionCollapse
        index={index}
        id={id}
        collapse={collapse}
        active={isActive}
      />
    </div>
  );
};

export default AccordionItem;
