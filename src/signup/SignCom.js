import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Modal from "../util/Modal";

// 도연 - 회원가입 완료 페이지 작업중 

const SignCom = () => {

    return(
        <div className="container">
            <p>Sa Shoe 회원가입이 완료되었습니다.</p>
            <button><Link to="/Login">로그인</Link></button>
        </div>
        
    );
}
export default SignCom;
