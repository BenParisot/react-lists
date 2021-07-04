import React from 'react';
import PhotoAlbum from './PhotoAlbum';
import Header from './Header';
import Footer from './Footer';

export default function App() {
  const title = 'My Photos';
  const photos = [
    { photo: 'assets/tina1.jpeg' },
    { photo: 'assets/tina2.jpeg' },
    { photo: 'assets/tina3.jpeg' },
    { photo: 'assets/tina4.jpg' },
    { photo: 'assets/tina5.jpg' }
  ];
  return (
    <>
      <Header />
      <PhotoAlbum title={title} photos={photos} />
      <Footer />
    </>

  );

}
