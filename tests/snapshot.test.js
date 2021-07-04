import React from 'react';
import { shallow } from 'enzyme';
import PhotoAlbum from '../src/components/PhotoAlbum';

describe('PhotoAlbum component', () => {
  it('generates a list of photos', () => {
    const title = 'My Photos';
    const photos = [
      { photo: 'assets/tina1.jpeg' },
      { photo: 'assets/tina2.jpeg' },
      { photo: 'assets/tina3.jpeg' },
      { photo: 'assets/tina4.jpg' },
      { photo: 'assets/tina5.jpg' }
    ];
    const wrapper = shallow(<PhotoAlbum title={title} photos={photos} />);
    expect(wrapper).toMatchSnapshot();
  });
});
