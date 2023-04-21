import React from 'react';
import * as ReactIconsSi from 'react-icons/si';
import * as ReactIconsFi from 'react-icons/fi';
import * as ReactIconsFa from 'react-icons/fa';

const ReactIconsSelector = ({ iconName }) => {
  const iconFolder = iconName.slice(0, 2).toLowerCase();
  const icon =
    iconFolder === 'si'
      ? ReactIconsSi[iconName]
      : iconFolder === 'fi'
      ? ReactIconsFi[iconName]
      : iconFolder === 'fa'
      ? ReactIconsFa[iconName]
      : '';

  return icon && React.createElement(icon);
};

export default ReactIconsSelector;
