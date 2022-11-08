// import React, { useState } from 'react';
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import Modal from "../util/Modal";
// import MiniApi from '../api/MiniApi';
// import Post from './Post';

// // 도연 - 회원탈퇴 API 호출

// const onClickDelete = async() => { 
//     try {
//         const res = await MiniApi.Delete(inputId);

//         console.log(res.data.result);

//         if(res.data.result === "OK") {
//             console.log("사용 가능한 아이디 입니다.");
//             setModalOpenIdOK(true);
            
//         } else {
//             console.log("이미 존재하는 아이디 입니다.");
//             setModalOpenIdCheck(true);
            
//         }
//      } catch (e) {
//      } 
//    } 


// const Delete = () => {
//     return(
//         <></>

//     )
// }
// export default Delete;