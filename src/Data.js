import React, { useState, useEffect } from 'react';
// import styled from 'styled-components/macro';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion';
import { DataTable } from 'DataTable';
import { Loading } from './Loading';
import 'react-accessible-accordion/dist/fancy-example.css';

export const Data = () => {
  const [salesData, setSalesData] = useState([]);
  const [salesRankData, setSalesRankData] = useState([]);
  const [loading, setLoading] = useState(false)
  const [pageNumber, setPageNumber] = useState(1)
  //   const [limit, setLimit] = useState(20)
  const fetchSalesData = () => {
    setLoading(true)
    fetch(`https://project-express-api-cpxm366faa-lz.a.run.app/sales?page=${pageNumber}&limit=10`)
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

  const fetchSalesRankData = () => {
    setLoading(true)
    fetch('https://project-express-api-cpxm366faa-lz.a.run.app/salesRank')
      .then((res) => res.json())
      .then((data) => {
        console.log(data.body.salesRanking)
        setSalesRankData(data.body.salesRanking)
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
  }, [pageNumber]);

  if (loading) {
    return (
      <Loading />
    );
  }
  const handleExpanded = () => {
    console.log('Accordion item expanded');
  };

  return (
    <Accordion allowZeroExpanded>
      <AccordionItem onClick={() => handleExpanded()}>
        <AccordionItemHeading>
          <AccordionItemButton>
                       Sales data of avocado sales
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div>
            {salesData !== undefined
         && <DataTable salesData={salesData} setPageNumber={setPageNumber} />}
          </div>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
                       Highest and lowest sales records
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div>
            {salesData !== undefined
         && <DataTable salesData={salesRankData} />}
          </div>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  )
}
