import { Link } from "react-router-dom";
import { useState} from "react";
import MiniApi from "../api/MiniApi";
import Modal from "../util/Modal";


const ForgotPwd = () => {
    // 이메일, 아이디 입력
    const [inputEmail, setInputEmail] = useState("");
    const [inputId, setInputId] = useState("");


const onChangeEmail = (e) => {
    setInputEmail(e.target.value);
}

const onChangeId = (e) => {
    setInputId(e.target.value);
}


    return(
        <div className="container">
        <h1>비밀번호 찾기</h1>
        {/* 아이디 입력창 */}
        <div className="input">
        <label>아이디</label>
        <input value={inputId} onChange={onChangeId}></input>
        </div>

        {/* 이메일 입력창 */}
        <div className="input">
        <label>이메일</label>
        <input value={inputEmail} onChange={onChangeEmail}></input>
        </div>

        {/* 비밀번호 찾기 버튼 활성화 */}
        <div className="findPwd">
        <button>비밀번호 찾기</button>
        </div>
        <br/>

            {/* 다른 페이지 연결 */}
            <Link to="/SignUp">회원가입</Link>
            <br />
            <Link to="/Login">로그인</Link>
            <br />
           <Link to="/ForgotPwd">비밀번호 재발급</Link>           
        </div>
    )
}

export default ForgotPwd;