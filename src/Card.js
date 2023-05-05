/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components/macro';

export const Card = ({ salesRankData }) => {
  return (
    <Container>
      {salesRankData !== undefined && salesRankData.length !== 0
    && salesRankData.map((item, index) => {
      return (
        <CardItem key={`${index}-rank`}>
          {index === 0 ? <Ranking>TOP</Ranking> : <Ranking>FLOP</Ranking>}
          <h3>Total Volume: {item.totalVolume}</h3>
          <h4>Date: {item.date}</h4>
          <p>Average Price: {item.averagePrice}</p>
          <div>
            <p>Total Bags Sold: {item.totalBagsSold}</p>
            <p>Small Bags Sold: {item.smallBagsSold}</p>
            <p>Large Bags Sold: {item.largeBagsSold}</p>
            <p>XLarge Bags Sold: {item.xLargeBagsSold}</p>
          </div>
          <p>Region: {item.region}</p>
        </CardItem>
      );
    })}
    </Container>
  )
}
const Container = styled.div`
display:flex;
flex-direction:row;
justify-content:space-evenly;
align-items:center
`

const CardItem = styled.div`
background-color: rgba(0, 0, 0, .3);
border-radius:20px;
font-size:0.7em;
text-align:left;
margin:1em;

p, h3, h4{
    padding:0 1em;
}
`

const Ranking = styled.h2`
background-color: #f2f2f2;
margin-top:0;
padding:0.5em;
border-radius:20px 20px 0 0;
text-align:center
`