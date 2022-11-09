import React, { useState, useEffect } from 'react';
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
    border: none;
    margin-bottom: 50px;
    width: 150px;
    height: 40px;
`;

const Del = () => {
    const localId = window.localStorage.getItem("userId");
    const localPw = window.localStorage.getItem("userPw");
    const isLogin = window.localStorage.getItem("isLogin");
    if(isLogin === "FALSE") window.location.replace("/");

    const [memberInfo, setMemberInfo] = useState(""); // 현재 로그인 되어 있는 회원의 정보 저장용

    useEffect(() => {
        
        const memberData = async () => {
            try {
                const response = await MiniApi.memberInfo(localId, localPw); 
                setMemberInfo(response.data);
                console.log(response.data)
            } catch (e) {
                console.log(e);
            }
        };
        memberData();
    }, []);


    const [modalOpen, setModalOpen] = useState(false);

    const closeModal = () => {
        setModalOpen(false);
    };

    const confirmModal = async() => {
        setModalOpen(false);
        const memberReg = await MiniApi.memberDelete(localId);
        console.log(memberReg.data.result);
        if(memberReg.data.result === "OK") {
            window.location.replace("/");
        } else {

        }
    };

    const onClickMemberDelete = () => {
        setModalOpen(true);
    }


        return(
            <div>
            <div onClick={onClickMemberDelete}>
                        <Button>회원 탈퇴</Button>
                    </div>

            {modalOpen && <DelModal open={modalOpen} confirm={confirmModal} close={closeModal} type={true} header="확인">정말로 탈퇴하시겠습니까?</DelModal>}
            
            </div>

    )
}
export default Del;

