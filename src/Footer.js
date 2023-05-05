import React from 'react';
import styled from 'styled-components/macro';
import { BiLink } from 'react-icons/bi'

export const Footer = () => {
  return (
    <FooterContainer>
      <a href="https://project-express-api-cpxm366faa-lz.a.run.app/sales" target="_blank" rel="noreferrer"><BiLink />  API URL </a>
      <a href="https://project-express-api-cpxm366faa-lz.a.run.app/api-docs" target="_blank" rel="noreferrer"><BiLink /> API documentation</a>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
    display:flex;
    gap:0.5em;
    justify-content:center;
    flex-direction:row;
    align-items:center;
padding:2em;
    a{
         text-decoration:none;
             color:#292828;
    }
   
`