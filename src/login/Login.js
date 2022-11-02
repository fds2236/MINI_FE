import { Link } from "react-router-dom";
import { useState} from "react";
import MiniApi from "../api/MiniApi";
import Modal from "../util/Modal";
import styled from "styled-components";


//0d39a119fd1466f129952b4b7cd1837e (REST API키)


// const Form = styled.form`
//     background-color:rgb(0,173,181);
//     color: white;
//     width: 300px;
//     height: 200px
//     ;`

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
   
       // 로그인 실패시 팝업창 띄우기
       const [modalOpen, setModalOpen] = useState("");
       
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
   
       // Api 호출
       const onClickLogin = async() => {
           try {
               const res = await MiniApi.userLogin(inputId, inputPwd);
               console.log(res.data.result);
   
               if(res.data.result === "OK") {
                   window.localStorage.setItem("userId", inputId);
                   window.localStorage.setItem("userPwd", inputPwd);
                   window.location.replace("/");
               } else {
                   setModalOpen(true);
               }
   
           } catch (e) {
               setModalOpen(true);
               console.log("로그인 에러!")
           }
       }
   
       return(
           <div className="container">
            {/* <Form> */}
           <h1>로그인</h1>

            {/* 아이디 입력창 */}
           <div className="input">
            <label>아이디</label>
            <input value={inputId} onChange={onChangeId}></input>   
           </div>

            {/* 아이디 입력 제한 메시지 */}
            <div className="hint">
           {inputId.length > 0 && <span className={`message ${isPwd ? 'success' : 'error'}`}>{idMessage}</span>}
           </div>

           {/* 패스워드 입력창 */}
           <div className="input">
           <label>비밀번호</label>
           <input value={inputPwd} type="password" onChange={onChangePwd}></input>
           </div>
           {/* </Form> */}
   
           {/* 비밀번호 입력 제한 메시지 */}
           <div className="hint">
           {inputPwd.length > 0 && <span className={`message ${isPwd ? 'success' : 'error'}`}>{pwdMessage}</span>}
           </div>
      
           {/* 로그인 버튼 활성화 */}
           <div className="loginButton">
           {(isId && isPwd) ?
                   <button className="enable_button"
                   onClick={onClickLogin}>SIGN IN</button>  :
                   <button className="disable_button"
                   onClick={onClickLogin}>SIGN IN</button>}
                   <Modal open={modalOpen} close={closeModal} header="오류">아이디 및 패스워드를 다시 확인해 주세요.
                   </Modal>
           </div>
        <br/>

        {/* 다른 페이지 연결 */}
        <div className="link">
        <Link to="/Agree">회원가입</Link>
        <br />
        <Link to="/ForgotId">아이디 찾기</Link>
        <br />
        <Link to="/ForgotPwd">비밀번호 찾기</Link>
        </div>
        </div>
    )
}

export default Login;