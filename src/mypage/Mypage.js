import Profile from "./Profile";
import React from "react";
import Like from "./Like";
import Modify from "./Modify";
import MiniApi from '../api/MiniApi';
import styled from "styled-components";
import DelModal from "../delete/DelModal";
import { useState, useEffect  } from "react";


//------------------------------
// 도연 - 회원탈퇴 버튼 
const Button = styled.button`
    border: none;
    margin-bottom: 50px;
    width: 150px;
    height: 40px;
`;
//-------------------------------

function Mypage() {
    // const [LikeToggle, setLikeToggle] = useState(false)
    // const [ModToggle, setModToggle] = useState(false)

    // const toggleLikeView = () => {
    //     setLikeToggle(!LikeToggle)
    // }
    // const toggleModView = () => {
    //     setModToggle(!ModToggle)
    // }


    //MemberServlet

    // API 호출

    //-------------------------------------------
    // 도연 - 회원 탈퇴 
    const localId = window.localStorage.getItem("userId");
    const localPw = window.localStorage.getItem("userPw");
    const isLogin = window.localStorage.getItem("isLogin");
    if(isLogin === "FALSE") window.location.replace("/");

    // 모달
    const [modalOpen, setModalOpen] = useState(false);

    const closeModal = () => {
        setModalOpen(false);
    };

    const confirmModal = async() => {
        setModalOpen(false);
        const memberReg = await MiniApi.memberDelete(localId, localPw);
        console.log(memberReg.data.result);
        if(memberReg.data.result === "OK") {
            window.location.replace("/");
        } else {

        }
    };

    const onClickMemberDelete = () => {
        setModalOpen(true);
    }

    //--------------------------------------------------------------------------
 

    return(
      <div>
        {/* -------------------------------------------------------------------------------
        도연 회원 탈퇴 */}
      <div onClick={onClickMemberDelete}>
                  <Button>회원 탈퇴</Button>
              </div>
      {modalOpen && <DelModal open={modalOpen} confirm={confirmModal} close={closeModal} type={true} header="확인">정말로 탈퇴하시겠습니까?</DelModal>}
      {/* ----------------------------------------------------------------------------------- */}
      </div>

)
}

export default Mypage;