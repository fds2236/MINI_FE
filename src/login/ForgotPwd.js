import { Link } from "react-router-dom";
import { useState} from "react";
import MiniApi from "../api/MiniApi";
import Modal from "../util/Modal";
import styled from "styled-components";

const ForgotPwdBlock = styled.div`
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
            color: rgb(0,173,181);
            font-weight: 600;
        } 
        &:focus {
            outline : solid rgb(0,173,181) 1px;
            font-weight: 600;
        }
    }

    .pwdButton {
        width : 280px;
        height : 40px;
        background-color : white;
        border-radius : 5px;
        border: solid 1.5px #eeeeee;
        margin : 10px;
        &:hover {
            border : none;
            font-weight: 600;
            background-color: rgb(0,173,181);
            color: white;
        }
    }
`;

const PageLink = styled.div`
    .link_item {
        margin: 20px;
        color: rgb(57,62,70);
        font-size : 14px;
        text-decoration-line: none;
        &:hover {
            color: rgb(0,173,181);
            font-weight: 600;
        }
    }
`;


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
                window.localStorage.setItem("rePwdId",inputId); 
                window.location.replace("/RePwd");

            } else {
                // 모달창 팝업=> 가입하신 고객정보가 일치하지 않습니다.
                setModalOpen(true);
            }
        } catch (e) {
            setModalOpen(true);
            console.log("패스워드 찾기 에러!");
        }
    } 

    return(
        <div className="container">
            <ForgotPwdBlock>
                <h5>비밀번호 찾기</h5>
                {/* 아이디 입력창 */}
                <input className="input" placeholder="아이디" value={inputId} onChange={onChangeId}></input>
                <br/>

                {/* 이메일 입력창 */}
                <input className="input" placeholder="이메일" value={inputEmail} onChange={onChangeEmail}></input>
                <br/>

                {/* 비밀번호 찾기 버튼 활성화 */}
                <button className="pwdButton" onClick={onClickPwd}>FIND PASSWORD</button>
                <br/>
            </ForgotPwdBlock>

            <PageLink>
                {/* 다른 페이지 연결 */}
                <Link to="/SignUp" className="link_item">회원가입</Link>
                <Link to="/Login" className="link_item">로그인</Link>
                <Link to="/ForgotId" className="link_item">아이디 찾기</Link>
            </PageLink>
            {modalOpen && <Modal open={modalOpen} close={closeModal} header="확인">고객정보가 일치하지 않습니다.</Modal>}    
        </div>
    )
}

export default ForgotPwd;