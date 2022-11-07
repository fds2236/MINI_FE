import { Link } from "react-router-dom";
import { useState} from "react";
import MiniApi from "../api/MiniApi";
import Modal from "../util/Modal";
import styled from "styled-components";
import axios from "axios";

const RePwdBlock = styled.div`
    .input {
        width : 270px;
        height : 35px;
        background-color : white;
        border-radius : 5px;
        border: solid 1.5px #eeeeee;
        margin : 5px;
        &:hover {
            border : solid rgb(0,173,181) 1px;
            color: rgb(0,173,181);
            font-weight: 600;
        } 
        &:focus {
            outline : solid rgb(0,173,181) 1px;
            font-weight: 600;
        }
    }

    .rePwdButton {
        width : 280px;
        height : 40px;
        background-color : white;
        border-radius : 5px;
        border: solid 1.5px #eeeeee;
        margin : 5px;
        &:hover {
            border : none;
            font-weight: 600;
            background-color: rgb(0,173,181);
            color: white;
        }
    }
`;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const RePwd = () => {
    // 로그인된 아이디 불러오기
    let rePwdId = window.localStorage.getItem("rePwdId"); 

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
        const pwdCurrent = e.target.value;
        setInputPwdCk(pwdCurrent)
        if(pwdCurrent !== inputPwd) {
            setPwdCkMessage("비밀번호가 일치하지 않습니다.")
            setIsPwdCk(false);
        } else {
            setPwdCkMessage("비밀번호가 일치합니다.")
            setIsPwdCk(true);
        }
    }

    // API호출
    // 입력받은 ID에 대한 PWD변경
    const onClickRePwd = async(rePwdId) => {
        try{
            const res = await MiniApi.resetPwd(rePwdId, inputPwd);
            console.log(res.data.result);
            
            if(res.data.result === true) {
                setModalOpen(true); // 비밀번호 변경시 모달창 팝업
            } else {
            }
        } catch (e) {
        }
    } 

const onClick3 = (e) => {

    console.log(e);

}

onClick3(3);






    
    return(
        <div className="container">
        <RePwdBlock>
        <h3>비밀번호 재설정</h3>
        {/* 아이디 불러오기 */}
        <div>{rePwdId}</div>
        {/* 아이디 입력창 */}
        {/* <input className="input" type="text" placeholder="아이디" value={inputId} onChange={onChangeId}></input>
        <br /> */}

        {/* 패스워드 입력창 */}
        <input className="input" type="password" placeholder="비밀번호" value={inputPwd} onChange={onChangePwd}></input>
        <br/>

        {/* 패스워드 입력 제한 메시지 */}
        <div className="hint">
        {inputPwd.length > 0 && <span className={`message ${isPwd ? 'success' : 'error'}`}>{pwdMessage}</span>}
        </div>
        
        {/* 패스워드 체크 입력창  */}
        <input className="input" type="password" placeholder="비밀번호 확인" value={inputPwdCk} onChange={onChangePwdCk}></input>
        <br/>

        {/* 패스워드 입력 제한 메시지 */}
        <div className="hint">
        {inputPwdCk.length > 0 && <span className={`message ${isPwdCk ? 'success' : 'error'}`}>{pwdCkMessage}</span>}
        </div>

        {/* 확인 버튼 클릭 */}
        <button className="rePwdButton" onClick={()=>onClickRePwd(rePwdId)}>확인</button>
        </RePwdBlock>
        {modalOpen && <Modal open={modalOpen} close={closeModal} header="확인">비밀번호가 변경되었습니다.</Modal>}
        </div>
    )
}
export default RePwd;