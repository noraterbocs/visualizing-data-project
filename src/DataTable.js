import React from 'react';
import styled from 'styled-components/macro';

const createData = (id, date, averagePrice, totalVolume, totalBagsSold, region) => {
  return { id, date, averagePrice, totalVolume, totalBagsSold, region };
}

export const DataTable = ({ salesData, setPageNumber }) => {
  const rows = salesData.map((item) => createData(
    item.id,
    item.date,
    item.averagePrice,
    item.totalVolume,
    item.totalBagsSold,
    item.region
  ));
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Date</th>
            <th>Average Price</th>
            <th>Total volume</th>
            <th>Total bags sold</th>
            <th>Region</th>
          </tr>
        </thead>
        <tbody>
          {rows !== undefined && rows.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.date}</td>
              <td>{row.averagePrice}</td>
              <td>{row.totalVolume}</td>
              <td>{row.totalBagsSold}</td>
              <td>{row.region}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ButtonContainer>
        <button onClick={() => setPageNumber((prevPageNumber) => prevPageNumber - 1)} type="button">Previous Page</button>
        <button onClick={() => setPageNumber((prevPageNumber) => prevPageNumber + 1)} type="button">Next Page</button>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  max-width: 100%;
`;

const Table = styled.table`
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
  background-color: rgba(0, 0, 0, .3);

  th,
  td {
    padding: 0.5rem;
    text-align: left;
    border-bottom: 1px solid #ddd;
    font-size:0.7em;
  }

  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 1rem;
  text-align: center;

  button {
    margin: 0 0.5rem;
    padding: 0.5rem 1rem;
    border: 1px solid #ddd;
    border-radius: 0.25rem;
    background-color: #fff;
    cursor: pointer;
    font-size: 1rem;
  }

  button:hover {
    background-color: #ddd;
  }
`