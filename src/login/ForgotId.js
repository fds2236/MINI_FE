import { Link } from "react-router-dom";
import { useState} from "react";
import MiniApi from "../api/MiniApi";
// 아이디를 찾으려면 이름과 전화번호 입력


const ForgotId = () => {
    // 이름, 이메일 입력
    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");

    // // Api 호출
    // const onClickId = async() => {
    //     try {
    //         const res = await MiniApi.
    //     }
    // }



const onChangeName = (e) => {
    setInputName(e.target.value);
}


const onChangeEmail = (e) => {
    setInputEmail(e.target.value);
}
    // concat

    return(
        <div className="container">
        <h1>아이디 찾기</h1>
        {/* 이름 입력창 */}
        <div className="input">
        <label>이름</label>
        <input value={inputName} onChange={onChangeName} ></input>
        </div>

        {/* 이메일 입력창 */}
        <div className="input"> 
        <label>이메일</label>
        <input value={inputEmail} onChange={onChangeEmail}></input>
        </div>

        {/* 아이디 찾기 버튼 활성화 */}
        <div className="findId">
        <button>아이디 찾기</button>
        </div>
        <br/>

           {/* 다른 페이지 연결 */}
            <Link to="/SingUp">회원가입</Link>
            <br />
            <Link to="/Login">로그인</Link>
            <br />
           <Link to="/ForgotPwd">비밀번호 찾기</Link>
           </div>
    )
}

export default ForgotId;