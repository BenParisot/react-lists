import React from 'react';
import Colors from './Colors';

export default function App() {
  const colors = [
    { name: 'red', hex: '#ff0000', rgb: { red: 255, green: 0, blue: 0 } },
    { name: 'green', hex: '#00ff00', rgb: { red: 0, green: 255, blue: 0 } },
    { name: 'blue', hex: '#0000ff', rgb: { red: 0, green: 0, blue: 255 } }
  ];
  return <Colors colors={colors} />;

}
