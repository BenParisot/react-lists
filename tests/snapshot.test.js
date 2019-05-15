import React from 'react';
import { shallow } from 'enzyme';
import Colors from '../src/components/Colors';

describe('Colors component', () => {
  it('generates a list of colors', () => {
    const colors = [
      { name: 'red', hex: '#ff0000', rgb: { red: 255, green: 0, blue: 0 } },
      { name: 'green', hex: '#00ff00', rgb: { red: 0, green: 255, blue: 0 } },
      { name: 'blue', hex: '#0000ff', rgb: { red: 0, green: 0, blue: 255 } }
    ];
    const wrapper = shallow(<Colors colors={colors} />);
    expect(wrapper).toMatchSnapshot();
  });
});
