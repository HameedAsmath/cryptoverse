import { Typography, Row, Col, Statistic  } from 'antd';
import React, {useState, useEffect} from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'
import millify from "millify"

const Homepage = () => {
  const {data: cryptoData, isFetching} = useGetCryptosQuery()
  const GlobalStats = cryptoData?.data?.stats
  console.log(GlobalStats)
  return (
    <>
      <Typography.Title level={2} className="heading">Global Crypto Stats</Typography.Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={GlobalStats?.totalCoins}/></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={GlobalStats?.totalExchanges}/></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify(GlobalStats?.totalMarketCap)}/></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={millify(GlobalStats?.total24hVolume)
}/></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(GlobalStats?.totalMarkets)}/></Col>
      </Row>
    </>
  )
}

export default Homepage