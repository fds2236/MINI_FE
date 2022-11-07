import { Link } from "react-router-dom";
import { useState} from "react";
import MiniApi from "../api/MiniApi";
import Modal from "../util/Modal";
import styled from "styled-components";

// 카카오
//0d39a119fd1466f129952b4b7cd1837e (REST API키)
//<script src="https://t1.kakaocdn.net/kakao_js_sdk/2.0.0/kakao.min.js" integrity="sha384-PFHeU/4gvSH8kpvhrigAPfZGBDPs372JceJq3jAXce11bVA6rMvGWzvP4fMQuBGL" crossorigin="anonymous"></script>
// function kakaoLogin() {
//     window
// }

const LoginBlock = styled.div`
    .input {
        width : 270px;
        height : 35px;
        background-color : white;
        border-radius : 5px;
        border: solid 1.5px #eeeeee;
        margin : 5px;
        font-size: 12px;
        &:hover {
            border : solid rgb(0,173,181) 1px;
            font-weight: 600;
            color: rgb(0,173,181);
        } 
        &:focus {
            outline : solid rgb(0,173,181) 1px;
            font-weight: 600;
        }
    }

    .hint {
        font-size : 12px;
        color:green;
    }

    .loginButton {
        width: 280px;
        height: 40px;
        margin: 10px;
        background-color: white;
        border-radius: 5px;
        border: solid 1.5px #eeeeee;
        &:hover {
            color: white;
            border: none;
            font-weight: 700;
            background-color: rgb(0,173,181);      
        }  
    }
`;

const PageLink = styled.div`
    .link_item {
        margin: 10px;
        color: rgb(57,62,70);
        font-size : 14px;
        text-decoration-line: none;
        &:hover {
            color: rgb(0,173,181);
            font-weight: 600;
        }
    }
`;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Login = () => {
       // 아이디, 비밀번호 입력
       const [inputId, setInputId] = useState("");
       const [inputPwd, setInputPwd] = useState("");
   
       // 아이디, 비밀번호 제한 메시지
       const [idMessage, setIdMessage] = useState("");
       const [pwdMessage, setPwdMessage] = useState("");
   
       // 로그인 정보 유효성 검사
       const [isId, setIsId] = useState("");
       const [isPwd, setIsPwd] = useState("");
   
       // 로그인 버튼 클릭시 로그인 오류 팝업창 띄우기
       const [modalOpen, setModalOpen] = useState(false); //default : 아이디가 존재하지 않음 
       
       // 모달이 뜰 때 출력 문구
       const [modalText, setModelText] = useState("");

       const closeModal = () => {
           setModalOpen(false);
       };
   
       // 아이디 제한(힌트)
       const onChangeId = (e) => {
           setInputId(e.target.value);
           if(e.target.value.length < 4 || e.target.value.length > 20){
               setIdMessage("4자리 이상 20자리 미만으로 입력하세요.");
               setIsId(false);
           } else {
               setIdMessage("올바른 형식입니다.");
               setIsId(true);
           }
       }
   
       // 비밀번호 제한(힌트)
       const onChangePwd = (e) => {
           const pwdRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/
           const pwdCurrent = e.target.value;
           setInputPwd(pwdCurrent)
           if(!pwdRegex.test(pwdCurrent)) {
               setPwdMessage("숫자+영문자+특수문자 조합으로 8자리 이상 입력하세요.");
               setIsPwd(false);
           } else {
               setPwdMessage("올바른 형식입니다.");
               setIsPwd(true);
           }
       }

        // API호출
        // 200은 정상로그인, 300은 id가 없음, 400은 pwd틀림
       const onClickLogin = async() => {
        try {
            const res = await MiniApi.userLogin(inputId, inputPwd);
            console.log(res.data.result);

            if(res.data.result === 200) {
                window.localStorage.setItem("whoLoginNow",inputId); // 로그인 정보 저장
                window.location.replace("/");

            } else if(res.data.result === 300) {
                setModelText("존재하지 않는 아이디입니다.");
                setModalOpen(true);
                // 아이디가 존재하지 않습니다. 모달창 팝업
            } else {
                setModelText("패스워드를 다시 확인하여주시기 바랍니다.");
                setModalOpen(true);
                // 패스워드가 틀립니다. 모달창 팝업(res.data.result === 400)
            }
        } catch (e) {
        } 
        }
   
       return(
        <div className="container">
            <LoginBlock>
                <h5>로그인</h5>
                {/* 아이디 입력창 */}
                <input className="input" value={inputId} placeholder="아이디" onChange={onChangeId}></input>   

                {/* 아이디 입력 제한 메시지 */}
                <div className="hint">
                {inputId.length > 0 && <span className={`message ${isId ? 'success' : 'error'}`}>{idMessage}</span>}
                </div>

                {/* 패스워드 입력창 */}
                <input className="input" value={inputPwd} type="password" placeholder="비밀번호" onChange={onChangePwd}></input>

                {/* 비밀번호 입력 제한 메시지 */}
                <div className="hint">
                {inputPwd.length > 0 && <span className={`message ${isPwd ? 'success' : 'error'}`}>{pwdMessage}</span>}
                </div>

                {/* 로그인 버튼 */}
                <button className="loginButton" onClick={onClickLogin}>LOGIN</button>
                <br/>
            </LoginBlock>
           
            <PageLink>
                <Link to="/Agree" className="link_item">회원가입</Link>
                <Link to="/ForgotId" className="link_item">아이디 찾기</Link>
                <Link to="/ForgotPwd" className="link_item">비밀번호 찾기</Link>
            </PageLink>

            {modalOpen && <Modal open={modalOpen} close={closeModal} header="확인">{modalText}</Modal>}
        </div>
        )
}

export default Login;   