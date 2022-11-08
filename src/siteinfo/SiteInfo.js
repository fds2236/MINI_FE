import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import moment from "moment";
import styled from 'styled-components';
import map from '../siteinfo/images/지도.PNG';
import hasungwoon from '../siteinfo/images/하성운.png';
import itzy from '../siteinfo/images/있지.png';
import './SiteInfo.css';

// 도연 - 사이트소개 페이지 작업 완료

const Container2 = styled.div`
display: flex;
`;

const LeftTop = styled.div`
    width: 400px;
    margin-left: 100px;
    margin-top: 30px;
    padding: 30px;
    border-radius : 5px;
    border: none;
`;


const LeftBottom = styled.div`
width: 400px;
    margin-left: 100px;
    padding: 30px;
    border-radius : 5px;
    border-top: solid #eeeeee 0.5px;
    .map {
            width: 335px;
            height: 170px;
        }
`;

const RightBox = styled.div`
    width: 1000px;
    margin-right: 100px;
    margin-bottom: 50px;
    padding: 30px;
    border-left: solid #eeeeee 0.5px;
    .memoBox {
        width: 770px;
        height: 430px;
        margin-top: 50px;
        margin-left: 50px;
        font-style: italic;
        font-size: 40px;
        border: solid rgb(0,173,181) 0.5px;
    }
    .title {
        padding-top: 30px;
    }
    .img {
        width: 200px;
        height: 200px;
        border-radius: 50px;
        margin-bottom: 20px;
    }
    .artist {
        color: black;
    }
    .footer {
        margin-top: 50px;
        color: gray;
        font-style: italic;
    }
`;

function SiteInfo() {
  const [value, onChange] = useState(new Date());

  return (
    <>
    <Container2>
        <div className='leftBox'>
        <LeftTop>
            <div><p><b>Sa Shoe 일정</b></p><Calendar onChange={onChange} value={value} className='calendar'/></div>
        </LeftTop>
        <LeftBottom>
            <div><p><b>오시는 길</b></p><img className='map' alt="map" src={map} /></div>
        </LeftBottom>
        </div>
        
        <RightBox>
            {/* 날짜 자동으로 업데이트 됨 */}
            <div className="text-gray-500 mt-4">
            <b>{moment(value).format("YYYY년 MM월 DD일 공지사항")}</b> </div> 
            
            <div className='memoBox'>
            <p className='title'><b>Sa Shoe Show Room 12월 24일 OPEN</b></p>
            <img className='img' alt="hasungwoon" src={hasungwoon} /><span>　</span><img className='img' alt="itzy" src={itzy} />
            <div className='artist'><h4><b>초대 손님: 가수 하성운 님, 가수 있지 님</b></h4><h6>하성운 - Sneakers MV / ITZY - Sneakers MV 中 (Sa Shoe 협찬 상품)</h6></div>
            </div>
            <div className='footer'><p>주소 : 서울시 강남구 테헤란로 14길 6 남도빌딩 3층</p><p>담당자 : 김도연</p><p>전화번호 : 02)123-4567</p></div>
        </RightBox>
    </Container2>
    </>
  );
}
export default SiteInfo;