import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import DelModal from "../delete/DelModal";
import MiniApi from '../api/MiniApi';

//-----------------------------------------------------------
// 도연 - 회원가입 탈퇴 작업중..

// 회원 탈퇴 버튼 누르면 정말로 탈퇴하시겠습니까? 팝업 띄우기!
// "예" 선택하면 회원가입 페이지로 이동됨

// 임시로 현재 페이지에 만들어놓고 마이페이지 완성되면 옮길 예정!
//--------------------------------------------------------------

const Button = styled.button`
    width: 100px;
    height: 100px;
`;


// // 모달
// const [modalOpenDelete, setModalOpenDelete] = useState(true); // 회원탈퇴 버튼 눌렀을 때
// const closeModalDelete = () => {
//     setModalOpenDelete(false); 
// }
// const OKModalDelete = () => {
//     setModalOpenDelete(true); 

// // 모달 창 띄우기
// const onClickDelete = () => {  
//     setModalOpenDelete(true);

//     if(true){
//         window.location.replace("./Delete");
//     }else{
//         setModalOpenDelete(false);
//     }
// }

const Del = () => {
    return(
        <div>
            <h1>정말로 탈퇴하시겠습니까? 모달창 띄우고 예 아니오 선택해서 예 선택하면 회원탈퇴 페이지로 이동시키고싶ㅇ,ㅡㄴ데 어케해야해?ㅠㅠ</h1>

        {/* 회원탈퇴 */}
        {/* <Button onClick={onClickDelete}>회원 탈퇴</Button>  */}
        <Button>회원 탈퇴</Button> 

        {/* {modalOpenDelete && <modal open={modalOpenDelete} close={closeModalDelete} header="확인">정말로 탈퇴하시겠습니까?</modal>}
         */}
        </div>

    )
}
export default Del;

