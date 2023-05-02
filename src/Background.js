import React from 'react';
import styled from 'styled-components/macro';

export const BackgroundImage = () => {
  return <BackgroundImg />;
};

const BackgroundImg = styled.img`
    background-image: url('/images/background.jpg');;
    background-size: cover;
    width: 100%;
    position: absolute;
    top: 0;
    height: 100%;
    z-index: -1
`
