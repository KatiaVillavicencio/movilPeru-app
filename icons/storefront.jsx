import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const Storefront = ({ color }) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M20 3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3ZM11 18H8V15H11V18ZM11 13H8V10H11V13ZM11 8H8V5H11V8ZM16 18H13V15H16V18ZM16 13H13V10H16V13ZM16 8H13V5H16V8Z"
      fill={color}
    />
  </Svg>
);

