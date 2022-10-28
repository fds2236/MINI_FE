import { Link } from "react-router-dom";
import { useState} from "react";
import MiniApi from "../api/MiniApi";
// 아이디를 찾으려면 이름과 전화번호 입력



const ForgotId = () => {
    // // 이름, 전화번호 입력
    // const [inputName, setInputName] = useState("");
    // const [inputPhone, setInputPhone] = useState("");

    // // Api 호출
    // const onClickId = async() => {
    //     try {
    //         const res = await MiniApi.
    //     }
    // }
    

    // return(
    //     <div className="container">
    //     <h1>아이디 찾기</h1>
    //     {/* 이름 입력창 */}
    //     <div className="input">
    //     <label>이름</label>
    //     <input value={inputName} onChange={onChangeName} ></input>
    //     </div>


    //     {/* 전화번호 입력창 */}
    //     <div className="input">
    //     <label>휴대폰 번호</label>
    //     <input value={inputPhone} onChange={onChangePhone}></input>
    //     </div>

    //     {/* 아이디 찾기 버튼 활성화 */}
    //     <div className="findId">


    //     </div>


        

    //     {/* 다른 페이지 연결 */}
    //     <Link to="/SingUp">회원가입</Link>
    //     <br />
    //     <Link to="/Login">로그인</Link>
    //     <br />
    //     <Link to="/ForgotPwd">비밀번호 찾기</Link>
    //     </div>
    // )
}

export default ForgotId;