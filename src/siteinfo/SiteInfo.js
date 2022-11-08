import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import moment from "moment";
import styled from 'styled-components';
import map from '../siteinfo/images/지도.PNG';
import hasungwoon from '../siteinfo/images/하성운.png';
import itzy from '../siteinfo/images/있지.png';

const Container2 = styled.div`
display: flex;
`;


const LeftTop = styled.div`
    width: 400px;
    margin-left: 100px;
    margin-top: 30px;
    padding: 30px;
    border-radius : 5px;
    border: solid #eeeeee;
`;


const LeftRight = styled.div`
width: 400px;
    margin-left: 100px;
    margin-top: 30px;
    padding: 30px;
    border-radius : 5px;
    border: solid #eeeeee;
    .map {
            width: 335px;
            border: solid 1px black;
        }
`;

const RightBox = styled.div`
    width: 1000px;
    margin-right: 100px;
    margin-top: 30px;
    /* padding: 30px; */
    border-radius : 5px;
    border: solid #eeeeee;
    .memoBox {
        width: 770px;
        height: 430px;
        margin-top: 20px;
        margin-left: 50px;
        color: rgb(0,173,181);
        font-size: 40px;
        background-color: #eeeeee;
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
`;

function SiteInfo() {
  const [value, onChange] = useState(new Date());

  return (
    <>
    <Container2>
        <div className='leftBox'>
        <LeftTop>
            <div><Calendar onChange={onChange} value={value} className='calendar'/></div>
        </LeftTop>
        <LeftRight>
            <div><p>오시는 길</p><img className='map' alt="map" src={map} /></div>
        </LeftRight>
        </div>
        
        <RightBox>
            {/* 날짜 자동으로 업데이트 됨 */}
            <div className="text-gray-500 mt-4">
            {moment(value).format("* YYYY년 MM월 DD일 공지사항 *")} </div> 
            
            <div className='memoBox'>
            <p className='title'>Sa Shoe Show Room 12월 24일 OPEN</p>
            <img className='img' alt="hasungwoon" src={hasungwoon} /><span>　</span><img className='img' alt="itzy" src={itzy} />
            <div className='artist'><h4><b>초대 손님: 가수 하성운 님, 가수 있지 님</b></h4><h6>하성운 - Sneakers MV / ITZY - Sneakers MV 中 (Sa Shoe 협찬 상품)</h6></div>
            </div>
        </RightBox>
    </Container2>
    </>
  );
}
export default SiteInfo;