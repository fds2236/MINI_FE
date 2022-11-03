// import { Link } from "react-router-dom";
// import { useState} from "react";
// import MiniApi from "../api/MiniApi";
// import Modal from "../util/Modal";
// import styled from "styled-components";
// import axios from "axios";
// // API 옮기기
// resetPwd: async function(pw, pwdCheck) {
//     const rePwdObj = {
//         pwd: pw,
//         pwdCheck: pwdCheck
//     }
//     return await axios.post(MINI_DOMAIN + "RePwdServlet", rePwdObj, HEADER);
// }


// const RePwd = () => {
//     // 패스워드 및 패스워드 체크 입력
//     const [inputPwd, setInputPwd] = useState("");
//     const [inputPwdCk, setInputPwdCk] = useState("");
//     const [modalOpen, setModalOpen] = useState(false); // 확인 버튼 누르면 모달창 팝업

//     // 패스워드, 패스워드 체크 제한 메시지
//     const [pwdMessage, setPwdMessage] = useState("");
//     const [pwdCkMessage, setPwdCkMessage] = useState("");

//     const closeModal = () => {
//         setModalOpen(false);
//     };

//     // // 패스워드 제한(힌트)
//     // const onChangePwd = (e) => {
//     //     setInputPwd(e.target.value);
//     // }
//     // // 패스워드 체크 제한(힌트)
//     // const onChangePwdCk = (e) => {
//     //     setInputPwdCk(e.target.value)
//     // }

//     // API호출
//     // 패스워드와 패스워드체크 동일하면 비밀번호 변경
//     const onClickRePwd = async() => {
//         try{
//             const res = await MiniApi.RePwd(inputPwd, inputPwdCk);
//             console.log(res.data.result);
//         } catch (e) {
        
//         }
//     } 
    
//     return(
//         <div>
//         <h1>비밀번호 재설정</h1>
//         {/* 아이디는 자동으로 뿌려주고 싶음*/}
//         {/* 비밀번호 변경 버튼 클릭시 모달창 팝업 => 비밀번호가 정상적으로 변경되었습니다 */}
//         {/* 모달의 확인버튼 클릭시 로그인 창으로 연결 */}
//         <input type="password" placeholder="비밀번호"></input>
//         <br/>
//         <input type="password" placeholder="비밀번호 확인"></input>
//         <br />
//         <button>확인</button>
//         <br />
//         <br/>
//         </div>
//     )

// }

// export default RePwd;