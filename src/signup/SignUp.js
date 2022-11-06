import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import Modal from "../util/Modal";
import MiniApi from '../api/MiniApi';

// 도연 - 회원가입 페이지 작업중 

const SignUpBlock = styled.div`
    width: 500px;
    margin-left: 500px;
    background-color : white;
    border-radius : 5px;
    border: solid #eeeeee;
    &:hover {
        border : solid rgb(0,173,181) 1px;
        font-weight: 600;
        color: rgb(0,173,181);
    } 
    
    .input {
        width : 300px;
        height : 35px;
        margin : 10px;
        padding-left: 50px;
        border-radius : 5px;
        &:hover {
            border : solid rgb(0,173,181) 0.5px;
            font-weight: 600;
            color: rgb(0,173,181);
        } 
        &:focus {
            outline : solid rgb(0,173,181) 1px;
            font-weight: 600;
        }
    }

    .star {
            color: red;

    }


    .hint {
        font-size : 14px;
        color:green;
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

    .SignUpButton {
        width: 280px;
        height: 40px;
        margin: 10px;
        background-color: white;
        border-radius: 5px;
        border: solid #eeeeee;
        &:hover {
            color: white;
            border: none;
            font-weight: 600;
            background-color: rgb(0,173,181);      
        }  
    
    }
`;



const SignUp = () => {
    // 회원정보 입력받는 부분
    const [inputId, setId] = useState(''); 
    const [inputPwd, setPwd] = useState('');
    const [inputPwdCheck, setPwdCheck] = useState('');
    const [inputName, setName] = useState('');
    const [inputEmail, setEmail] = useState('');
    const [inputPhone, setPhone] = useState('');
    const [inputAddr, setAddr] = useState('');

    // 오류 메세지
    const [idMsg, setIdMsg] = useState(''); 
    const [pwdMsg, setPwdMsg] = useState(''); 
    const [pwdCheckMsg, setPwdCheckMsg] = useState('');
    const [nameMsg, setNameMsg] = useState('');
    const [emailMsg, setEmailMsg] = useState('');
    const [phoneMsg, setPhoneMsg] = useState('');
    

    // 유효성 검사
    const [isId, setIsId] = useState('');
    const [isPwd, setIsPwd] = useState('');
    const [isPwdCheck, setIsPwdCheck] = useState('');
    const [isName, setIsName] = useState('');
    const [isEmail, setIsEmail] = useState('');
    const [isPhone, setIsPhone] = useState('');
 
    // 아이디 힌트
    const onChangeId = (e) => {
        const idRegex = /^[a-z]+[a-z0-9]{3,19}$/g;
        const idCurrent = e.target.value;
        setId(idCurrent)
        if (!idRegex.test(idCurrent)) {
            setIdMsg("아이디는 영문자로 시작해야하며 4자 이상 영문자, 숫자 조합입니다.");
            setIsId(false);    
        } else {
            setIsId(true);
        }
    }

    // 비밀번호 힌트
    const onChangePwd = (e) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/;
        const passwordCurrent = e.target.value;
        setPwd(passwordCurrent)
        if (!passwordRegex.test(passwordCurrent)) {
            setPwdMsg("비밀번호는 8자 이상, 영문자, 숫자, 특수문자를 모두 포함해야 합니다.");
            setIsPwd(false)
        } else {
            setIsPwd(true);
        }        
    }

    // 비밀번호 확인 힌트
    const onChangePwdCheck = (e) => {
        const passwordCurrent = e.target.value;
        setPwdCheck(passwordCurrent)
        if (passwordCurrent !== inputPwd) {
            setPwdCheckMsg("비밀번호가 일치하지 않습니다. 다시 확인해주세요.")
            setIsPwdCheck(false)
        } else {
            setPwdCheckMsg("비밀번호가 일치합니다.")
            setIsPwdCheck(true);
        }    
    }  

    // 이름 힌트
    const onChangeName = (e) => {
        const nameRegex = /^[가-힣a-zA-Z]+$/;
        const nameCurrent = e.target.value;
        setName(nameCurrent);
        if (!nameRegex.test(nameCurrent)) {
            setNameMsg("이름을 확인해주세요.")
            setIsName(false)
        } else {
            setIsName(true)
        }
    }

    // 이메일 힌트
    const onChangeEmail = (e) => { 
        const emailRegex = /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/;
        const emailCurrent = e.target.value;
        setEmail(emailCurrent);
        if (!emailRegex.test(emailCurrent)) {
            setEmailMsg("이메일을 다시 입력해주세요. '@'를 포함해야 합니다.")
            setIsEmail(false)
        } else {
            setIsEmail(true);
        }
    }

    // 전화번호 힌트
    const onChangePhone = (e) => { 
        const phoneRegex =  /\d{3}-\d{4}-\d{4}/;
        const phoneCurrent = e.target.value;
        setPhone(phoneCurrent);
        if (!phoneRegex.test(phoneCurrent)) {
            setPhoneMsg("전화번호를 다시 입력해주세요. '-'을 포함해야 합니다.")
            setIsPhone(false)
        } else {
            setIsPhone(true);
        }
    }

    // 주소
    const onChangeAddr = (e) => setAddr(e.target.value);


         

    // 모달
    const [modalOpenSignUp, setModalOpenSignUp] = useState(false); // 회원가입 버튼 눌렀을 때
    const closeModalSignUp = () => { // 모달 창 닫기
        setModalOpenSignUp(false); 
    }
    
    const [modalOpenIdCheck, setModalOpenIdCheck] = useState(false); // 아이디 중복확인 버튼 눌렀을 때
    const closeModalIdCheck = () => {
        setModalOpenIdCheck(false); 
    }

    
    // API 호출
    const onClickSignUp = async() => {  // 회원가입 
        try {
            const res = await MiniApi.signUp(inputId, inputPwd, inputName, inputEmail, inputPhone, inputAddr);

            console.log(res.data.result);

            if(res.data.result === "OK") {
                window.location.replace("/SignCom");
            } else {
                    console.log("회원가입에 실패했습니다. 다시 확인해주세요.");
                    setModalOpenSignUp(true);
                }
            } catch (e) {
        }
    }


    const onClickIdCheck = async() => { // 아이디 중복확인
        try {
            const res = await MiniApi.idCheck(inputId);

            console.log(res.data.result);

            if(res.data.result === "OK") {
            } else {
                console.log("이미 존재하는 아이디 입니다.");
                setModalOpenIdCheck(true);
                
            }
         } catch (e) {
         } 
       } 
    
    return(
        <div className="container">
            
            {/* 회원가입 */}
            <h1>JOIN US</h1>
            <p>👟 슈즈의 기준, Sa shoe 회원가입하고 인싸되기</p>
            <p><b className='star'>*</b>필수 입력</p>

            <SignUpBlock>
            {/* 아이디 입력창 */}
            <div className="input">
                <label><b className='star'>*</b>아이디</label>
                <input className="id" value={inputId} onChange={onChangeId}></input>
                <button onClick={onClickIdCheck}>중복 확인</button>
            </div>

            {/* 아이디 입력 제한 메시지 */}
            <div className="hint">
           {3 < inputId.length < 21 && <span className={`message ${isId ? 'success' : 'error'}`}>{idMsg}</span>}
           </div>


            {/* 비밀번호 입력창 */}
            <div className="input">
                <label><b className='star'>*</b>비밀번호</label>
                <input className="pwd" value={inputPwd} type="password" onChange={onChangePwd} required></input>
            </div>

            {/* 비밀번호 입력 제한 메시지 */}
           <div className="hint">
           {7 < inputPwd.length < 21 && <span className={`message ${isPwd ? 'success' : 'error'}`}>{pwdMsg}</span>}
           </div>
                            
            {/* 비밀번호 확인 입력창 */}
            <div className="input">
                <label><b className='star'>*</b>비밀번호 확인</label>
                <input className="pwdCheck" value={inputPwdCheck} type="password" onChange={onChangePwdCheck} required></input>
            </div>

            {/* 비밀번호 확인 입력 제한 메시지 */}
           <div className="hint">
           {7 < inputPwd.length < 21 && <span className={`message ${isPwdCheck ? 'success' : 'error'}`}>{pwdCheckMsg}</span>}
           </div>

            {/* 이름 입력창 */}
            <div className="input">
                <label><b className='star'>*</b>이름</label>
                <input className="name" value={inputName} onChange={onChangeName} required></input>
            </div>

            {/* 이름 입력 제한 메시지 */}
            <div className="hint">
            <span className={`message ${isName ? 'success' : 'error'}`}>{nameMsg}</span>
            </div>

            {/* 이메일 입력창 */}
            <div className="input">
                <label><b className='star'>*</b>이메일</label>
                <input className="email" value={inputEmail} onChange={onChangeEmail} required></input>
            </div>

            {/* 이메일 입력 제한 메시지 */}
            <div className="hint">
            <span className={`message ${isEmail ? 'success' : 'error'}`}>{emailMsg}</span>
            </div>

            {/* 전화번호 입력창 */}
            <div className="input">
                <label><b className='star'>*</b>전화번호</label>
                <input className="phone" value={inputPhone} onChange={onChangePhone} required></input>
            </div>

            {/* 전화번호 입력 제한 메시지 */}
           <div className="hint">
           <span className={`message ${isPhone ? 'success' : 'error'}`}>{phoneMsg}</span>
           </div>

            {/* 주소 입력창 */}
            <div className="input">
                <label>주소</label>
                <input className="addr" value={inputAddr} onChange={onChangeAddr}></input>
            </div>
            </SignUpBlock>
            
            <PageLink>
            {/* <button><Link to="/" className="link_item">취소하기</Link></button> */}
            <button onClick={onClickSignUp} className="SignUpButton">회원가입</button></PageLink>
            

            <div>이미 아이디가 있으신가요?</div><PageLink><button><Link to="/Login" className="link_item"> ＞ 로그인</Link></button></PageLink>

            {/* 모달 */}
            {modalOpenIdCheck && <Modal open={modalOpenIdCheck} close={closeModalIdCheck} header="확인">이미 가입된 아이디입니다.</Modal>}
            {modalOpenSignUp && <Modal open={modalOpenSignUp} close={closeModalSignUp} header="확인">회원가입에 실패했습니다. 다시 확인해주세요.</Modal>}
        </div>
        
    )

}
export default SignUp;