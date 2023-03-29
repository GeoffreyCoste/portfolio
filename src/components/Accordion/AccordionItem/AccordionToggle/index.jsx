import React from 'react';
import PlusMinusIcon from '../../../PlusMinusIcon';

const AccordionToggle = ({ index, toggle, active, handleClick }) => {
  return (
    <h4 className="accordion__item__toggle">
      <button
        className="btn btn--toggle"
        role="tab"
        id={`tab-${index}`}
        aria-selected="true"
        aria-controls={`panel-${index}`}
        aria-expanded={active}
        onClick={() => handleClick()}
      >
        <div className="btn--toggle__text text">
          <div className="text__index text-green-neon">{`0${index + 1}`}</div>
          <div className="text__title text-white">{toggle}</div>
        </div>
        <div className="btn--toggle__icon icon">
          <PlusMinusIcon isActive={active} />
        </div>
      </button>
    </h4>
  );
};

export default AccordionToggle;
