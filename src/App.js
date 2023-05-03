import React from 'react';
import { StartPage } from 'StartPage';
import { BackgroundImage } from 'Background';
import { Data } from 'Data';
import { GlobalStyle } from 'GlobalStyle';

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <BackgroundImage />
      <StartPage />
      <Data />
    </div>
  );
}
