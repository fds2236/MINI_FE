import { Link } from "react-router-dom";
import { useState} from "react";
import MiniApi from "../api/MiniApi";
import Modal from '../util/Modal'
import styled from "styled-components";

const ForgotIdBlock = styled.div`
    .input {
        width : 270px;
        height : 35px;
        background-color : white;
        border-radius : 5px;
        border: solid  1.5px #eeeeee;
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

    .idButton {
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


const ForgotId = () => {
    // 이름, 이메일 입력 => 이메일값으로 ID찾음
    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [findId, setFindId] = useState("아이디를 찾지 못했습니다."); 

    // 아이디 찾기 버튼 클릭시 팝업창 띄우기
    const [modalOpen, setModalOpen] = useState(false);
    const closeModal = () => {
        setModalOpen(false);
    };

    const onChangeName = (e) => {
        setInputName(e.target.value);
    }

    const onChangeEmail = (e) => {
        setInputEmail(e.target.value);
    }

    // Id찾기 Api 호출 => id 찾기 버튼 눌렀을 때 활성화
    const onClickId = async() => {
        try {
            const res = await MiniApi.researchId(inputName, inputEmail);
            console.log(res.data.result);
            setModalOpen(true);
            // localStorage에 JSON처리된 obj를 넣는다
            // localStorage : 로컬 저장 공간에 접근할 수 있는 Storage 객체
            // 저장한 데이터는 브라우저 세션 간에 공유됨
            // localStorage의 데이터는 만료되지 않고 sessionStorage의 데이터는 페이지 세션이 끝날 때 사라짐
            // setItem : 항목 추가
            // getItem : 항목 읽기
            // removeItem : 항목 제거
            // clear : 항목 전제 제거

            if(res.data.result === "OK") {
                setFindId(res.data.id); // 찍어주기위해 id값 저장!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            } else {
                setFindId("존재하는 아이디가 없습니다.");
            }
        } catch (e) {
            // setModalOpen(true);
            console.log("아이디 찾기 실패!")
        }
    }

    return(
        <div className="container">
            <ForgotIdBlock>
                <h5>아이디 찾기</h5>
                {/* 이름 입력창 */}
                <input className="input" placeholder="이름" value={inputName} onChange={onChangeName}></input>
                <br/>

                {/* 이메일 입력창 */}
                <input className="input" placeholder="이메일"  value={inputEmail} onChange={onChangeEmail}></input>
                <br/>

                {/* 아이디 찾기 버튼 활성화 */}
                <button className="idButton" onClick={onClickId}>FIND ID</button>
            </ForgotIdBlock>

                
            <PageLink>
                {/* 다른 페이지 연결 */}
                <Link to="/SignUp" className="link_item">회원가입</Link>
                <Link to="/Login" className="link_item">로그인</Link>
                <Link to="/ForgotPwd" className="link_item">비밀번호 찾기</Link>
            </PageLink>
            {modalOpen && <Modal open={modalOpen} close={closeModal} header="확인">{findId}</Modal>}
        </div>
    )
}

export default ForgotId;