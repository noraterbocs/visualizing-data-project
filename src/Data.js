import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import { Loading } from './Loading';

export const Data = () => {
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(false)
  const [pageNumber, setPageNumber] = useState(1)
  //   const [limit, setLimit] = useState(20)
  console.log(salesData)
  const fetchSalesData = () => {
    setLoading(true)
    fetch(`https://project-express-api-cpxm366faa-lz.a.run.app/sales?page=${pageNumber}&limit=20`)
      .then((res) => res.json())
      .then((data) => {
        setSalesData(data.results)
      })
      .catch((e) => {
        console.error(console.error(e))
      })
      .finally(() => {
        setLoading(false)
      })
  }
  useEffect(() => {
    fetchSalesData();
  }, [pageNumber]);

  if (loading) {
    return (
      <Loading />
    );
  }

  const newData = salesData.map(((item) => {
    return [
      item.date,
      item.averagePrice,
      item.totalVolume,
      item.totalBagsSold,
      //   item.smallBagsSold,
      //   item.largeBagsSold,
      //   item.xLargeBagsSold,
      item.region]
  }))
  const data = [
    ['Date', 'Average Price', 'Total volume', 'Total bags sold', 'Region'], ...newData
  ];

  console.log(data)

  return (
    <div>
      {loading === false && salesData !== undefined && <Chart chartType="Table" width="100%" height="400px" data={data} />}
      <button onClick={() => setPageNumber((prevPageNumber) => prevPageNumber - 1)} type="button">Previous Page</button>
      <button onClick={() => setPageNumber((prevPageNumber) => prevPageNumber + 1)} type="button">Next Page</button>
    </div>
  )
}