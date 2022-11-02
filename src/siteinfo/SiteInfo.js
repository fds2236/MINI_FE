import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import hasungwoon from '../siteinfo/images/하성운.png';
import itzy from '../siteinfo/images/있지.png';
import shoes from '../siteinfo/images/컨버스.png';
import map from '../siteinfo/images/지도.PNG';
// 도연 작업중


const Shoes = styled.img`
    width: 300px;
    height: 300px;
    margin-top: 10px;
`;

const Header = styled.div`
    background-color: #00ADB5;
    color: white;
    height: 500px;
    font-size: 100px;
    font-weight: bold;

`;


const Banner = styled.div`
    background-color: black;
    color: red;
    height: 850px;
    padding-top: 50px;
    font-size: 100px;
    font-weight: bold;
`;

const Artist = styled.div`
    color: #D4F4FA;
    height: 40px;
    font-size: 40px;
    font-style: italic;
    padding-top: 60px;
    
`;

const Hasungwoon = styled.img`
    width: 400px;
    height: 400px;
    padding-bottom: 800px;
    margin-right: 60px;
    

    
`;

const Itzy = styled.img`
    width: 400px;
    height: 400px;
    padding-bottom: 800px;
    
`;

const Footer = styled.div`
    background-color: #00ADB5;
    color: white;
    height: 500px;
    font-size: 20px;
    font-weight: bold;

    
`;


const B = styled.div`
    color: white;
    height: 10px;
    font-size: 40px;
    font-weight: bold;
    padding-top: 60px;
   

    
`;

const Map = styled.img`
    width: 500px;
    height: 250px;
    margin-top: 60px;
    
`;




const SiteInfo = () => {

    return(
        <>
         <div className="container">
            <Header><Shoes className="shoes" alt="shoes" src={shoes} />슈즈의 기준, Sa Shoe</Header>
            <Banner>Sa Shoe Show Room<br/> 12월 24일 OPEN<br/><Artist>초대 손님: 가수 하성운 님, 가수 있지 님</Artist>
            <Hasungwoon className="hasungwoon" alt="hasungwoon" src={hasungwoon} /><Itzy className="itzy" alt="itzy" src={itzy} /></Banner>
            <Footer><B>오시는 길</B><Map className="map" alt="map" src={map} /><br/>장소: 서울시 강남구 테헤란로 14길 6 남도빌딩 3층<br/>전화: 02-123-4567</Footer>
            
        </div>
        </>
    )
}

export default SiteInfo;