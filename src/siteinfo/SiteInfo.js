import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import banner from '../siteinfo/images/슈즈의기준.jpg';

// 도연 작업중

const SiteInfo = () => {

    return(
        <>
         <div className="container">
            <div className="bannerImg">
            <img classNmae="Shoes" alt="Shoes" src={banner} />
            </div>
        </div>
        </>
    )
}

export default SiteInfo;