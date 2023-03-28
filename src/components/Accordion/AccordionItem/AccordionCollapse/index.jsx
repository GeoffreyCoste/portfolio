import React from 'react';
import ItemsList from '../../ItemsLists';

const AccordionCollapse = ({ index, id, collapse, active }) => {
  return (
    <div
      className="accordion__item__collapse collapse"
      role="tabpanel"
      id={`panel-${index}`}
      aria-labelledby={`tab-${index}`}
      aria-hidden={!active}
      tabIndex="0"
    >
      <div className="collapse__inner border-blue">
        <ItemsList items={collapse} />
      </div>
    </div>
  );
};

export default AccordionCollapse;
