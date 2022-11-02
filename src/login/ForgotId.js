import { Link } from "react-router-dom";
import { useState} from "react";
import MiniApi from "../api/MiniApi";
import Modal from '../util/Modal'
// 아이디를 찾으려면 이름과 이메일 입력 => 이메일값으로 아이디 찾기
// 찾은 아이디 뒤에서 4자리는 ****처리해주고 싶음!
// 아아디찾기 버튼 누르기
// => 아이디 존재하면 모달창에 아이디 뿌려주기
// => 아이디 없으면 모달창에 아이디가 존재하지 않습니다


const ForgotId = () => {
    // 이름, 이메일 입력
    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [findId, setFindId] = useState("아이디를 찾지 못했습니다.");

    // 아이디 찾기 버튼 클릭시 팝업창 띄우기
    const [modalOpen, setModalOpen] = useState(false);
    const closeModal = () => {
        setModalOpen(false);
    };

    // const closeModal = () => {
    //     setModalOpen(false);
    // }

    // Api 호출 => id 찾기 버튼 눌렀을 때 활성화
    const onClickId = async() => {
        try {
            const res = await MiniApi.researchId(inputName, inputEmail);
            console.log(res.data.result);
            
            setModalOpen(true);

            if(res.data.result === "OK") {
                setFindId(res.data.id); // 
                // localStorage에 JSON처리된 obj를 넣는다
                // localStorage : 로컬 저장 공간에 접근할 수 있는 Storage 객체
                // 저장한 데이터는 브라우저 세션 간에 공유됨
                // localStorage의 데이터는 만료되지 않고 sessionStorage의 데이터는 페이지 세션이 끝날 때 사라짐
                // setItem : 항목 추가
                // getItem : 항목 읽기
                // removeItem : 항목 제거
                // clear : 항목 전제 제거
            } else {
                setFindId("아이디를 찾지 못했습니다.");
            }
        } catch (e) {
            // setModalOpen(true);
            console.log("아이디 찾기 실패!")
        }
    }

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
            <button onClick={onClickId}>FIND ID</button>
            </div>
            <br/>

            {/* 다른 페이지 연결 */}
                <Link to="/SignUp">회원가입</Link>
                <br />
                <Link to="/Login">로그인</Link>
                <br />
            <Link to="/ForgotPwd">비밀번호 찾기</Link>
            {modalOpen && <Modal open={modalOpen} close={closeModal} header="확인">{findId}</Modal>}
        </div>
    )
}

export default ForgotId;