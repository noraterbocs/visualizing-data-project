import React from 'react';
import styled from 'styled-components/macro';

export const StartPage = () => {
  return (
    <Section>
      <h1>Avocado in numbers</h1>
      <h2>Welcome to my avocado sales data site!</h2>
      <p>The page provides information on sales volume, average prices,
        and more, for different regions and time periods in the United States.
      </p>
    </Section>
  )
}

const Section = styled.section`
padding:2em;
`