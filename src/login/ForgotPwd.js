import { Link } from "react-router-dom";
import { useState} from "react";
import MiniApi from "../api/MiniApi";
import Modal from "../util/Modal";


const ForgotPwd = () => {
    // 이메일, 아이디 입력받기
    const [inputId, setInputId] = useState("");
    const [inputEmail, setInputEmail] = useState("");

    // 패스워드 찾기 버튼 클릭시 틀린 경우 팝업창 띄우기
    const [modalOpen, setModalOpen] = useState(false);
    const closeModal = () => {
        setModalOpen(false);
    }

    const onChangeId = (e) => {
        setInputId(e.target.value);
    }

    const onChangeEmail = (e) => {
        setInputEmail(e.target.value);
    }

    // pwd찾기 API 호출 => pwd 재설정 버튼 눌렀을 때 활성화
    const onClickPwd = async() => {
        try{
            const res = await MiniApi.researchPwd(inputId, inputEmail);
            console.log(res.data.result);

            if(res.data.result === "OK") {
                // 비밀번호 재설정하는 RePwd로 이동
                window.location.replace("/RePwd");
               


            } else {
                // 모달창 팝업=> 가입하신 고객정보가 일치하지 않습니다
            }
        } catch (e) {
        
        }
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
        </div>
    )
}

export default ForgotPwd;