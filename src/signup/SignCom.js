import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Modal from "../util/Modal";

// 도연 - 회원가입 완료 페이지 작업중 

const SignComBlock = styled.div`
    width: 500px;
    margin-left: 500px;
    padding: 30px;
    border-radius : 5px;
    border: solid #eeeeee;
    &:hover {
        border : solid rgb(0,173,181) 1px;
        font-weight: 600;
        color: rgb(0,173,181);
    } 
`;

const PageLink = styled.div`
    .link_item {
        margin: 10px;
        color: rgb(57,62,70);
        font-size : 14px;
        text-decoration-line: none;
        &:hover {
            color: rgb(0,173,181);
            font-weight: 600;
        }
    }
`;

const SignCom = () => {

    return(
        <SignComBlock>
            <p>Sa Shoe 회원가입이 완료되었습니다.</p>
            <PageLink><button><Link to="/Login" className="link_item">로그인</Link></button></PageLink>
        </SignComBlock>
        
        
    );
}
export default SignCom;
