import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { GridBoard, GridItem } from '@/components/Styled';

const fetchData = async (url: string) => axios(url);

function Dashboard() {
  const [data, setData] = useState({
    work: 0,
    fuel: 0,
    meal: 0,
    tax: 0,
    other: 0,
    income: 0,
    loss: 0,
    total: 0,
  });

  useEffect(() => {
    fetchData('/dashboard')
      .then(res => setData(res.data))
      .catch(e => console.log(e));
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <h2>이번달 지출입 표기 금액 (총 수입, 유류비, 기타 부대비용, 건수, 토탈 순수익)</h2>
      <p>메인 통계 (월별 건수 / 주별 건수 / 일별 건수</p>
      {data && (
        <GridBoard>
          <GridItem>건수</GridItem>
          <GridItem>유류비</GridItem>
          <GridItem>식대</GridItem>
          <GridItem>기타 부대비용</GridItem>
          <GridItem>부가세</GridItem>
          <GridItem>지출</GridItem>
          <GridItem>수익</GridItem>
          <GridItem>총 수익</GridItem>
          <GridItem>{data.work}</GridItem>
          <GridItem>{data.fuel}</GridItem>
          <GridItem>{data.meal}</GridItem>
          <GridItem>{data.other}</GridItem>
          <GridItem>{data.tax}</GridItem>
          <GridItem>{data.loss}</GridItem>
          <GridItem>{data.income}</GridItem>
          <GridItem>{data.total}</GridItem>
        </GridBoard>
      )}
    </>
  );
}

export default Dashboard;
