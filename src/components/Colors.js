import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';

export default function Colors({ colors }) {
  const colorsList = colors.map(({ name, hex, rgb }) => {
    <li>
      <Color name={name} hex={hex} rgb={rgb} />
    </li>;
  });
  return (
    <ul>
      {colorsList}
    </ul>
  );
}

Colors.propTypes = {
  colors: PropTypes.array.isRequired
};
