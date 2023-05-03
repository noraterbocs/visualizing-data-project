/* eslint-disable indent */
/* eslint-disable no-lone-blocks */
import React, { useState } from 'react';
import styled from 'styled-components/macro';
import ReactModal from 'react-modal';

const createData = (id, date, averagePrice, totalVolume, totalBagsSold, region) => {
  return { id, date, averagePrice, totalVolume, totalBagsSold, region };
}

export const DataTable = ({ salesData, setPageNumber, setLimit, setLoading }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [singleSalesData, setSingleSalesData] = useState()
  const fetchSingleSalesData = (id) => {
    fetch(`https://project-express-api-cpxm366faa-lz.a.run.app/sales/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.body.data)
        setSingleSalesData(data.body.data)
      })
      .catch((e) => {
        console.error(console.error(e))
      })
      .finally(() => {
        setTimeout(setLoading(false), 5000)
        setIsOpen(true)
      })
  }

  const rows = salesData.map((item) => createData(
    item.id,
    item.date,
    item.averagePrice,
    item.totalVolume,
    item.totalBagsSold,
    item.region
  ));
  // useEffect(() => {
  //   console.log(singleSalesData);
  // }, [singleSalesData]);

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
            <tr
              onClick={
                () => {
                  fetchSingleSalesData(row.id);
                }
              }
              key={row.id}>
              <td>{row.id}</td>
              <td>{row.date}</td>
              <td>{row.averagePrice}</td>
              <td>{row.totalVolume}</td>
              <td>{row.totalBagsSold}</td>
              <td>{row.region}</td>
            </tr>

          ))}
          <ReactModal
            isOpen={isOpen}
            contentLabel="Example Modal"
            onRequestClose={() => setIsOpen(false)}
            style={{ overlay: { width: '100%', height: '100%', margin: 'auto' }, content: { width: 'max-content', height: 'max-content', margin: 'auto' } }}>
           <div>{singleSalesData !== undefined && <div>
            <p>ID: {singleSalesData.id}</p>
            <p>Date: {singleSalesData.date}</p>
            <p>Average Price: {singleSalesData.averagePrice}</p>
            <p>Total Volume: {singleSalesData.totalVolume}</p>
            <p>Total Bags Sold: {singleSalesData.totalBagsSold}</p>
            <p>Small Bags Sold: {singleSalesData.smallBagsSold}</p>
            <p>Large Bags Sold: {singleSalesData.largeBagsSold}</p>
            <p>Extra Large Bags Sold: {singleSalesData.xLargeBagsSold}</p>
            <p>Region: {singleSalesData.region}</p>
                                                  </div>}
           </div>
          </ReactModal>
        </tbody>
      </Table>
      <ButtonContainer>
        <button onClick={() => setPageNumber((prevPageNumber) => prevPageNumber - 1)} type="button">Previous Page</button>
        <button onClick={() => setPageNumber((prevPageNumber) => prevPageNumber + 1)} type="button">Next Page</button>
        <button onClick={() => setLimit((prevLimit) => prevLimit + 5)} type="button">Show more</button>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  max-width: 100%;
  height: 300px; // set a fixed height here
  overflow-y: scroll;
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