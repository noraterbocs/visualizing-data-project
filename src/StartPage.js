import React from 'react';
import styled from 'styled-components/macro';

export const StartPage = () => {
  return (
    <Section>
      <h1>Welcome to my avocado dashboard!</h1>
      <p>The page provides information on sales volume and average prices
        for different regions and time periods in the United States.
      </p>
    </Section>
  )
}

const Section = styled.section`
padding:2em;

h1{
    text-align:center;
}
`