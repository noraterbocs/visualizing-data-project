/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { DataTable } from 'DataTable';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Card } from 'Card';
import { Loading } from './Loading';

export const Data = () => {
  const [salesData, setSalesData] = useState([]);
  const [salesRankData, setSalesRankData] = useState([]);
  const [loading, setLoading] = useState(false)
  const [pageNumber, setPageNumber] = useState(1)
  const [limit, setLimit] = useState(5)
  const fetchSalesData = () => {
    setLoading(true)
    fetch(`https://project-express-api-cpxm366faa-lz.a.run.app/sales?page=${pageNumber}&limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setSalesData(data.body.data)
      })
      .catch((e) => {
        console.error(console.error(e))
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const fetchSalesRankData = () => {
    setLoading(true)
    fetch('https://project-express-api-cpxm366faa-lz.a.run.app/sales/salesRanking/results')
      .then((res) => res.json())
      .then((data) => {
        console.log(data.body.data)
        setSalesRankData(data.body.data)
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
    fetchSalesRankData();
  }, [pageNumber, limit]);

  useEffect(() => {
    fetchSalesRankData();
  }, []);

  if (loading) {
    return (
      <Loading />
    );
  }

  return (

    <div>
      <div>
        {salesData !== undefined
         && <DataTable
           salesData={salesData}
           setPageNumber={setPageNumber}
           setLimit={setLimit}
           setLoading={setLoading} />}
      </div>
      <div>
        {salesRankData !== undefined
         && <Card
           salesRankData={salesRankData} />}
      </div>
    </div>

  )
}
