import { Link } from "react-router-dom";
import { useState} from "react";
import MiniApi from "../api/MiniApi";
import Modal from "../util/Modal";


const ForgotPwd = () => {

    return(
        <div className="container">








            {/* 다른 페이지 연결 */}
            <Link to="/SingUp">회원가입</Link>
            <br />
            <Link to="/Login">로그인</Link>
            <br />
           <Link to="/ForgotPwd">비밀번호 재발급</Link>
           

        </div>
    )
}

export default ForgotPwd;