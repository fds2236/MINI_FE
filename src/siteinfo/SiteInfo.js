import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import banner from '../siteinfo/images/슈즈의기준.PNG';
import hasungwoon from '../siteinfo/images/하성운.jpg';
import itzy from '../siteinfo/images/있지.png';

// 도연 작업중

const Banner = styled.img`
    width: 1530px;
    height: 500px;
    
`;

const Header = styled.div`
    background-color: black;
    color: #00ADB5;
    height: 500px;
    padding: 250px;
    font-size: 100px;
    font-weight: bold;
`;

const Artist = styled.div`
    color: #D4F4FA;
    width: 1000px;
    height: 500px;
    padding: 20px;
    font-size: 40px;
    font-style: italic;
`;

const Hasungwoon = styled.img`
    width: 500px;
    height: 500px;

    
`;

const Itzy = styled.img`
    width: 500px;
    height: 500px;
`;




const SiteInfo = () => {

    return(
        <>
         <div className="container">
            <Banner className="Shoes" alt="Shoes" src={banner} />
            <Header>Sa Shoe Show Room<br/> 12월 24일 OPEN<br/>
            <Artist>"초대 손님: 가수 하성운 님, 가수 있지 님"</Artist>
            <Hasungwoon className="hasungwoon" alt="hasungwoon" src={hasungwoon} />
            <Itzy className="itzy" alt="itzy" src={itzy} />
            </Header>
            
            
        </div>
        </>
    )
}

export default SiteInfo;