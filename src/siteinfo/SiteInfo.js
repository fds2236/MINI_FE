import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import banner from '../siteinfo/images/슈즈의기준.jpg';

// 도연 작업중

const Header = styled.div`
    background-color: black;
    color: #00ADB5;
    height: 500px;
    padding: 250px;
    font-size: 100px;
`;

const Banner = styled.img`
    width: 1530px;
    
`;


const SiteInfo = () => {

    return(
        <>
         <div className="container">
            <Header>왜 신발 정보는<br/>Sa Shoe?🤷‍♀️</Header>
            <Banner classNmae="Shoes" alt="Shoes" src={banner} />
            
        </div>
        </>
    )
}

export default SiteInfo;