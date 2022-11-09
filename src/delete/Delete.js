// import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import Modal from "../util/Modal";
// import MiniApi from '../api/MiniApi';
// import { Container } from 'react-bootstrap';
// //----------------------------------------------------------------------------------
// // 도연 - 회원탈퇴 작업중..

// // 회원 탈퇴 버튼 누르면 정말로 탈퇴하시겠습니까? 팝업 띄우기!
// // "예" 선택하면 회원가입 페이지로 이동됨(현재 페이지)

// // 현재 페이지에서 할 것?
// // 회원 아이디로 비밀번호를 조회해서 입력받은 비밀번호와 일치하면 OK, 일치하지 않으면 NOK
// //----------------------------------------------------------------------------------

// const [inputId, setId] = useState(''); 
// const [inputpwd, setPwd] = useState('');




// // 모달
// const [modalOpenDelete, setModalOpenDelete] = useState(false); // 탈퇴 눌렀을 때
// const closeModalDelete = () => {
//     setModalOpenDelete(false); 
// }

// // API 호출

// const onClickDelete = async() => {  
    
//     try {
//         const res = await MiniApi.delete(inputId, inputPwd);
        
//         console.log(res.data.result);
        
//         if(res.data.result === "OK") {
//             window.location.replace("/");
//         } else {
//             console.log("회원가입에 실패했습니다. 다시 확인해주세요.");
//             setModalOpenSignUp(true);
//         }
//     } catch (e) {

//     }
// }

// // const onClickDelete = async() => { 
// //     try {
// //         const res = await MiniApi.Delete(inputId);

// //         console.log(res.data.result);

// //         if(res.data.result === "OK") {
// //             console.log("탈퇴 되었습니다.");
// //             setModalOpenDelete(true);
            
// //         } else {
// //             console.log("이미 존재하는 아이디 입니다.");
// //             setModalOpenDelete(true);
            
// //         }
// //      } catch (e) {
// //      } 
// //    } 

//    const Button = styled.button``;
//    const Header = styled.button``;

   

// const Delete = () => {
//     return(
//         <div>

//             {/* 회원가입 */}
//             <Header><h1 className='title'>회원 탈퇴</h1></Header>

//             {/* 아이디 */}

//             <label className='label'>아이디 : {id}</label>
  

//             {/* 비밀번호 입력창 */}
//             <div>
//                 <label className='label'>비밀번호 :</label>
//                 <input className="pwd" value={inputPwd} type="password" onChange={onChangePwd} required></input>
//             </div>

//             {/* 탈퇴 사유 */}

//         <Button onClick={onClickDelete}>회원 탈퇴</Button>
//         {modalOpenDelete && <Modal open={modalOpenDelete} close={closeModalDelete} header="확인">회원가입이 완료되었습니다.</Modal>}
//         </div>

//     )
// }
// export default Delete;