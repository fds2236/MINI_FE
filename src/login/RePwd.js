import { Link } from "react-router-dom";
import { useState} from "react";
import MiniApi from "../api/MiniApi";
import Modal from "../util/Modal";
import styled from "styled-components";
import axios from "axios";

const RePwd = () => {
    // 아이디, 패스워드 및 패스워드 체크 입력
    const [inputId, setInputId] = useState("");
    const [inputPwd, setInputPwd] = useState("");
    const [inputPwdCk, setInputPwdCk] = useState("");
    const [modalOpen, setModalOpen] = useState(false); // 확인 버튼 누르면 모달창 팝업

    // 패스워드 유효성 검사
    const [isPwd, setIsPwd] = useState("");

    // 패스워드 체크 유효성 검사
    const [isPwdCk, setIsPwdCk] = useState("");

    // 패스워드, 패스워드 체크 제한 메시지
    const [pwdMessage, setPwdMessage] = useState("");
    const [pwdCkMessage, setPwdCkMessage] = useState(""); 

    const closeModal = () => {
        setModalOpen(false);
        window.location.replace("/Login");
    };

    // 아이디 
    const onChangeId = (e) => {
        setInputId(e.target.value)
    };

    // 패스워드
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

    // 패스워드 체크
    const onChangePwdCk = (e) => {
        setInputPwdCk(e.target.value)
        if(setInputPwdCk === setInputPwd) {
            setPwdMessage("패스워드 일치")
            setIsPwdCk(true);
        } else {
            setPwdCkMessage("패스워드 불일치");
            setIsPwdCk(false);
        }
    }

    // API호출
    // 입력받은 ID에 대한 PWD변경
    const onClickRePwd = async() => {
        try{
            const res = await MiniApi.resetPwd(inputId, inputPwd);
            console.log(res.data.result);
            
            if(res.data.result === true) {
                setModalOpen(true); // 비밀번호 변경시 모달창 팝업
            } else {
            }
        } catch (e) {
        }
    } 
    
    return(
        <div className="container">
        <h1>비밀번호 재설정</h1>
        {/* 아이디는 자동으로 뿌려주고 싶음*/}
        {/* 비밀번호 변경 버튼 클릭시 모달창 팝업 => 비밀번호가 정상적으로 변경되었습니다 */}
        {/* 모달의 확인버튼 클릭시 로그인 창으로 연결 */}

        {/* 아이디 입력창 */}
        <div className="input">
        <input type="text" placeholder="아이디" value={inputId} onChange={onChangeId}></input>
        <br />
        </div>

        {/* 패스워드 입력창 */}
        <div className="input">
        <input type="password" placeholder="비밀번호" value={inputPwd} onChange={onChangePwd}></input>
        <br/>
        </div>

        {/* 패스워드 입력 제한 메시지 */}
        <div className="hint">
        {inputPwd.length > 0 && <span className={`message ${isPwd ? 'success' : 'error'}`}>{pwdMessage}</span>}
        </div>
        
        {/* 패스워드 체크 입력창  */}
        <div className="input">
        <input type="password" placeholder="비밀번호 확인" value={inputPwdCk} onChange={onChangePwdCk}></input>
        <br/>
        </div>

        {/* 패스워드 입력 제한 메시지 */}
        <div className="hint">
        {inputPwdCk.length > 0 && <span className={`message ${isPwdCk ? 'success' : 'error'}`}>{pwdCkMessage}</span>}
        </div>

        {/* 확인 버튼 클릭 */}
        <div className="button">
        <button onClick={onClickRePwd}>확인</button>
        </div>
        {modalOpen && <Modal open={modalOpen} close={closeModal} header="확인">비밀번호가 변경되었습니다.</Modal>}
        </div>
    )
}
export default RePwd;