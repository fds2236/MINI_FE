import { Link } from "react-router-dom";
import { useState} from "react";
import MiniApi from "../api/MiniApi";
import Modal from "../util/Modal";
import styled from "styled-components";

const RePwd = () => {
    const [inputPwd, setInputPwd] = useState("");
    const [inputPwdCheck, setInputPwdCheck] = useState("");
    
    return(
        <div>
        <h1>비밀번호 재설정</h1>
        {/* 아이디는 자동으로 뿌려주고 싶어 */}
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