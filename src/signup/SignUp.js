import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import Modal from "../util/Modal";
import MiniApi from '../api/MiniApi';
import Post from './Post';



// 도연 - 회원가입 페이지 작업중 


const Header = styled.div`
    .title {
        color: rgb(0,173,181);
        font-weight: bold;
    }
    .comment {
        color: rgb(0,155,171);
        font-style: italic;
    }

    .star {
        color: red;
    }
`;

const SignUpBlock = styled.div`
    width: 780px;
    height: 450px;
    position: relative;
    margin: 0 auto;
    background-color : white;
    border-radius : 5px;
    border: solid #eeeeee;
    display: flex;
    flex-direction: column;


    &:hover {
        border : solid rgb(0,173,181) 1px;
        font-weight: 600;
        color: rgb(0,173,181);
    } 
    p{
        text-align: right;
        margin-right: 30px;
    }
    b{
        display: flex;
        display: inline;
    }
    label{
        margin-top: 10px;
        display: flex;
        display: inline;
        float: left;
        text-align: left;
        width: 150px;
        margin-left: 30px;
    }
    button{
        position: relative;
        float: left;
        margin: 8px;
    }
    input, .inputemail  {
        float: left;
        width : 200px;
        margin : 10px;
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
    .inputemail{
        width: 155px;  
    }
    .user_enroll_text{
        margin-left: 10px;
    }
    .star {
            color: red;

    }
    .hint {
        font-size : 10px;
        color:green;
        display: flex;
        margin-left: 190px;
        
    }
    .address_search {
        padding-left: 7px;
    }
    .comment2 {
        font-size: 13px;
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

    // 이메일
    const [write, setWrite] = useState('');
    const [wrtieDomain, setWriteDomain] = useState('');
    const [select, setSelect] = useState('');
    // const [final, setFinal] = useState('');
    const[isSelect,setIsSelect] = useState(false);

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
            setIdMsg(false);
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
            setPwdMsg(false);
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
            setNameMsg(false);
            setIsName(true)
        }
    }

    // // 이메일 힌트
    // const onChangeEmail = (e) => { 
    //     const emailRegex = /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/;
    //     const emailCurrent = e.target.value;
    //     setEmail(emailCurrent);
    //     if (!emailRegex.test(emailCurrent)) {
    //         setEmailMsg("이메일을 다시 입력해주세요. '@'를 포함해야 합니다.")
    //         setIsEmail(false)
    //     } else {
    //         setIsEmail(true);
    //     }
    // }

    // 전화번호 힌트
    const onChangePhone = (e) => { 
        const phoneRegex =  /\d{3}-\d{4}-\d{4}/;
        const phoneCurrent = e.target.value;
        setPhone(phoneCurrent);
        if (!phoneRegex.test(phoneCurrent)) {
            setPhoneMsg("전화번호를 다시 입력해주세요. '-'을 포함해야 합니다.")
            setIsPhone(false)
        } else {
            setPhoneMsg(false);
            setIsPhone(true);
        }
    }

    // 주소
    const [enroll_company, setEnroll_company] = useState({
        address:'',
    });

    const [popup, setPopup] = useState(false);

    const handleInput = (e) => {
        console.log(e.target.value);
        setAddr(e.target.value);
        setEnroll_company({
            ...enroll_company,
            [e.target.name]:e.target.value,
        })
        console.log(e.target.name);
    }

    const handleComplete = (data) => {
        setPopup(!popup);
    }
    
    // 이메일 아이디 작성
    const writeName = (e) =>{
        const writename = e.target.value;
        setWrite(writename);
        console.log(write);
    }
    // 선택한 도메인 
    const  selectDomain = (e) =>{
        //선택한 도메인을 sel 변수에 담음
        const sel = e.target.value
        // sel 변수가 "@"(직접인 경우)
        if(sel === "@"){
            setSelect(sel);
            // IsSelect 는 숨겨져있는 창을 보여주기 위한 용도
            // IsSelect 의 기본값은 false 이고, true 가되면 입력창이 화면에 출력됨
            // 화면출력로직은 아래에 있음
            setIsSelect(true);
        }else{
            // 선택한 도메인이 직접입력이 아닌 경우 , (isselect = false)입력창을 보여주지 않고
            // setSelect를 이용하여 선택한 이메일을 select에 담아줌
            setIsSelect(false);
            setSelect(sel);
        }
        if(isSelect===false){
            const email2 = write + select
            setEmail(email2);
            console.log(inputEmail)
        }else{
            const email3 = write + "@" + wrtieDomain
            setEmail(email3);
            console.log(inputEmail)
        }
        
    }    
    // 작성한 도메인
    const domainWrite = (e) =>{
        // 직접입력되는 값을 받아주는 input 창 
        // isSelect 가 false 일경우 화면에 보이지 않음
        setWriteDomain(e.target.value);
    }    
    

    console.log(inputEmail);
    // 최종 확인
    // const sumit = () =>{
    //     if(isSelect==false){
    //         setFinal(write + select);
    //     }else{
    //         setFinal(write + "@" + wrtieDomain);
    //     }
    // }
    // console.log(final);
         

    // 모달
    const [modalOpenIdCheck, setModalOpenIdCheck] = useState(false); // 아이디 중복일 때
    const closeModalIdCheck = () => {
        setModalOpenIdCheck(false); 
    }

    const [modalOpenIdOK, setModalOpenIdOK] = useState(false); // 아이디 중복 아닐 때
    const closeModalIdOK = () => {
        setModalOpenIdOK(false); 
    }

    const [modalOpenSignUp, setModalOpenSignUp] = useState(false); // 회원가입 버튼 눌렀을 때
    const closeModalSignUp = () => { // 모달 창 닫기
        setModalOpenSignUp(false); 
    }
    


    
    // API 호출
    const onClickSignUp = async() => {  // 회원가입 
        let tranMail ='';
        if(isSelect===false){
            tranMail = write + select;
            setEmail(write + select);
            
        }else{
            tranMail = write + "@" + wrtieDomain;
            setEmail(write + "@" + wrtieDomain);
        }
        try {
            const res = await MiniApi.signUp(inputId, inputPwd, inputName, tranMail, inputPhone, enroll_company.address);
            
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
                console.log("사용 가능한 아이디 입니다.");
                setModalOpenIdOK(true);
                
            } else {
                console.log("이미 존재하는 아이디 입니다.");
                setModalOpenIdCheck(true);
                
            }
         } catch (e) {
         } 
       } 
    
    return(
        <div className='container'>
    
            <Header><h1 className='title'>JOIN US</h1>
            <p className='comment'>👟 슈즈의 기준, Sa shoe 회원가입하고 인싸되기</p></Header>
            {/* 회원가입 */}

            <SignUpBlock>
            <p className='comment2'><b className='star'>* </b> 필수 입력</p>

            {/* 아이디 입력창 */}
            <div className='divv'>
                <label className='label'><b className='star'>*</b>아이디</label>
                <input className="id" value={inputId} onChange={onChangeId}></input>
                <button onClick={onClickIdCheck}>중복 확인</button>
            </div>

            {/* 아이디 입력 제한 메시지 */}
            <div className="hint">
           {3 < inputId.length < 21 && <span className={`message ${isId ? 'success' : 'error'}`}>{idMsg}</span>}
           </div>


            {/* 비밀번호 입력창 */}
            <div>
                <label className='label'><b className='star'>*</b>비밀번호</label>
                <input className="pwd" value={inputPwd} type="password" onChange={onChangePwd} required></input>
            </div>

            {/* 비밀번호 입력 제한 메시지 */}
           <div className="hint">
           {7 < inputPwd.length < 21 && <span className={`message ${isPwd ? 'success' : 'error'}`}>{pwdMsg}</span>}
           </div>
                            
            {/* 비밀번호 확인 입력창 */}
            <div>
                <label className='label'><b className='star'>*</b>비밀번호 확인</label>
                <input className="pwdCheck" value={inputPwdCheck} type="password" onChange={onChangePwdCheck} required></input>
            </div>

            {/* 비밀번호 확인 입력 제한 메시지 */}
           <div className="hint">
           {7 < inputPwd.length < 21 && <span className={`message ${isPwdCheck ? 'success' : 'error'}`}>{pwdCheckMsg}</span>}
           </div>

            {/* 이름 입력창 */}
            <div>
                <label className='label'><b className='star'>*</b>이름</label>
                <input className="name" value={inputName} onChange={onChangeName} required></input>
            </div>

            {/* 이름 입력 제한 메시지 */}
            <div className="hint">
            <span className={`message ${isName ? 'success' : 'error'}`}>{nameMsg}</span>
            </div>

            {/* 이메일 입력창 */}
            
            <div>
            <label className='label'><b className='star'>*</b>이메일</label>
            <input className='email' value={write} onChange={writeName}></input>
             {/* isSelect && 구문은 isSelect 가 참일경우, {} 안의 input 박스가 화면에 보여집니다 */}
             {isSelect &&
                 <span><input className='inputemail' value={wrtieDomain} onChange={domainWrite}></input></span>
             }
             <select className='inputemail' value={select} onChange={selectDomain}>
                 <option >메일을 선택하세요</option>
                 <option value={"@naver.com"}>naver.com</option>
                 <option value={"@gmail.com"}>gmail.com</option>
                 <option value={"@daum.com"}>daum.net</option>
                 <option value={"@nate.com"}>nate.com</option>
                 <option value={"@kakao.com"}>kakao.com</option>
                 <option value={"@"}>직접입력</option>
             </select>
             {/* <button onClick={sumit}></button> */}
                {/* <label className='label'><b className='star'>*</b>이메일</label>
                <input className="input" value={inputEmail} onChange={onChangeEmail} required></input> */}
            </div>

            {/* 이메일 입력 제한 메시지 */}
            <div className="hint">
            <span className={`message ${isEmail ? 'success' : 'error'}`}>{emailMsg}</span>
            </div>

            {/* 전화번호 입력창 */}
            <div>
                <label><b className='star'>*</b>전화번호</label>
                <input className='phone' value={inputPhone} onChange={onChangePhone} required></input>
            </div>

            {/* 전화번호 입력 제한 메시지 */}
           <div className="hint">
           <span className={`message ${isPhone ? 'success' : 'error'}`}>{phoneMsg}</span>
           </div>

            {/* 주소 입력창 */}
            <div>
                <label className="address_search">주소</label>
                <input className="addr" type="text" required={true} name="address" onChange={handleInput} value={enroll_company.address}/>
                <button onClick={handleComplete}>주소 검색</button>
                {popup && <Post company={enroll_company} setcompany={setEnroll_company}></Post>}    
            </div>
                            

            
            </SignUpBlock>
            
            <PageLink>
            {/* <button><Link to="/" className="link_item">취소하기</Link></button> */}
            <button onClick={onClickSignUp} className="SignUpButton">회원가입</button></PageLink>
      

            <div>이미 아이디가 있으신가요? <button><PageLink><Link to="/Login" className="link_item">＞ 로그인</Link></PageLink></button></div>
            {/* 모달 */}
            {modalOpenIdCheck && <Modal open={modalOpenIdCheck} close={closeModalIdCheck} header="확인">이미 가입된 아이디입니다.</Modal>}
            {modalOpenIdOK && <Modal open={modalOpenIdOK} close={closeModalIdOK} header="확인">사용 가능한 아이디입니다.</Modal>}
            {modalOpenSignUp && <Modal open={modalOpenSignUp} close={closeModalSignUp} header="확인">회원가입에 실패했습니다. 다시 확인해주세요.</Modal>}
        </div>
        
    )

}
export default SignUp;