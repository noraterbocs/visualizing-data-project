import React from 'react';
import { StartPage } from 'StartPage';
import { BackgroundImage } from 'Background';
import { Data } from 'Data';
import { GlobalStyle } from 'GlobalStyle';
import { Footer } from 'Footer';

export const App = () => {
  return (
    <><GlobalStyle />
      <BackgroundImage />
      <div style={{ maxWidth: '600px', margin: 'auto' }}>
        <StartPage />
        <Data />
        <Footer />
      </div>
    </>
  );
}
