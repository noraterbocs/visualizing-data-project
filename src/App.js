import React from 'react';
import { StartPage } from 'StartPage';
import { BackgroundImage } from 'Background';
import { Data } from 'Data';

export const App = () => {
  return (
    <div>
      <BackgroundImage />
      <StartPage />
      <Data />
    </div>
  );
}
