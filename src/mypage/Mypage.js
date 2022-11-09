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
    const localId = window.localStorage.getItem("whoLoginNow");
    const localPwd = window.localStorage.getItem("whoPwdNow");

    // 모달
    const [modalOpen, setModalOpen] = useState(false);

    const closeModal = () => {
        setModalOpen(false);
    };

    const confirmModal = async() => {
        setModalOpen(false);
        try{
                //alert("아이디 패스워드 : "+ localId + localPwd);
                const memberReg = await MiniApi.delete(localId, localPwd);
                console.log(memberReg.data.result);
                //alert("중간확인 : " + memberReg.data.result);
                if(memberReg.data.result === "OK") {
                    window.localStorage.removeItem("whoLoginNow");
                    window.location.replace("/");
                } else {
                    alert("모달실행 / OK가 아님");
                }
        } catch(e) {
            alert("API호출 실패 : " + e);
        }
    };

    const onClickMemberDelete = () => {
        setModalOpen(true);
    }

    //--------------------------------------------------------------------------
 

    return(
      <div>
        <Profile/>
        
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