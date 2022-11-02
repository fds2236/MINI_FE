import { Link } from "react-router-dom";
import { useState} from "react";
import MiniApi from "../api/MiniApi";
import Modal from "../util/Modal";
import styled from "styled-components";
// 고고고고고고링!!!

const RePwd = () => {
    const [inputPwd, setInputPwd] = useState("");
    const [inputPwdCheck, setInputPwdCheck] = useState("");
    
    return(
        <div>
        <h1>비밀번호 재설정</h1>
        {/* 아이디는 자동으로 뿌려주고 싶음*/}
        {/* 비밀번호 변경 버튼 클릭시 모달창 팝업 => 비밀번호가 정상적으로 변경되었습니다 */}
        {/* 모달의 확인버튼 클릭시 로그인 창으로 연결 */}
        <input type="password" placeholder="비밀번호"></input>
        <br/>
        <input type="password" placeholder="비밀번호 확인"></input>
        <br />
        <button>확인</button>
        <br />
        <br/>
        </div>
    )

}

export default RePwd;