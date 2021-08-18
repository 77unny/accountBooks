import React from 'react';

import { GridBoard, GridItem } from '@/components/Styled';

function Dashboard() {
  return (
    <>
      <h2>이번달 지출입 표기 금액 (총 수입, 유류비, 기타 부대비용, 건수, 토탈 순수익)</h2>
      <p>메인 통계 (월별 건수 / 주별 건수 / 일별 건수</p>
      <GridBoard>
        <GridItem>건수</GridItem>
        <GridItem>유류비</GridItem>
        <GridItem>식대</GridItem>
        <GridItem>기타 부대비용</GridItem>
        <GridItem>부가세</GridItem>
        <GridItem>지출</GridItem>
        <GridItem>수익</GridItem>
        <GridItem>총 수익</GridItem>
        <GridItem>0</GridItem>
        <GridItem>0</GridItem>
        <GridItem>0</GridItem>
        <GridItem>0</GridItem>
        <GridItem>0</GridItem>
        <GridItem>5000</GridItem>
        <GridItem>5000</GridItem>
        <GridItem>5000</GridItem>
      </GridBoard>
    </>
  );
}

export default Dashboard;
