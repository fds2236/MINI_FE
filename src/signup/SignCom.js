import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Modal from "../util/Modal";

// 도연 - 회원가입 완료 페이지 작업중 

const SignComBlock = styled.div`
    width: 500px;
    height: 200px;
    margin-left: 500px;
    margin-top: 100px;
    margin-bottom: 250px;
    padding: 50px;
    border-radius : 5px;
    border: solid #eeeeee;
`;

const PageLink = styled.div`
    .link_item {
        margin: 10px;
        color: rgb(57,62,70);
        font-size : 14px;
        text-decoration-line: none;
    }
`;

const Button = styled.button`
    text-decoration: none;
    border: none;
    background-color: rgb(0,173,181);
    text-decoration: none;
    color: white;
    width: 250px;
    height: 40px;
    margin: 10px;
    border-radius: 5px;
`;

const SignCom = () => {

    return(
        <SignComBlock>
            <p>Sa Shoe 회원가입이 완료되었습니다.</p>
            <PageLink><Button><Link to="/Login" className="link_item">로그인</Link></Button></PageLink>
        </SignComBlock>
        
        
    );
}
export default SignCom;
