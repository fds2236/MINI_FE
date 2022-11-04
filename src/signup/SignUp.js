import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import DaumPostCode from 'react-daum-postcode';
import Post from './Post';
import MiniApi from '../api/MiniApi';
import Modal from "../util/Modal";

// 도연 기능 구현 ing..

const Container = styled.div`
    padding-right: 500px;
    background-color: #EEEEEE;
    width: 1800px;
    
`;

const JoinUs = styled.div`
    color: #00ADB5;
    font-size: 50px;
    font-weight: bold;
    width: 200px;
    height: 50px;
    border-radius: 10px;
    display: block;
    text-align: center;
    padding-bottom: 10px;
`;

const Comments = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 7px;
`;
const Comments2 = styled.p`
    font-size: small;
    text-align: right;
`;
  
const ItemBox = styled.div`
    width: 900px;
    height: 615px;
    margin-left: 300px;
    padding: 0 20px 20px 20px;
    text-align: left;
`;

const ItemText = styled.span`
    display: inline-block;
    width: 110px;
    padding-left: 30px;
`;
  
const ItemText1 = styled.span`
    display: inline-block;
    width: 100px;
    margin-left: 10px;
`;
  
const ItemText2 = styled.span`
    display: inline-block;
    width: 90px;
    margin-left: 10px;
`;
  
const ItemText3 = styled.span`
    display: inline-block;
    width: 55px;
    margin-left: 10px;
`;
  
const Input = styled.input`
    width: 200px;
    margin: 0 10px 0 55px;
`;
  
const InputE = styled.input`
    width: 75px;
    margin-left: 55px;
`;

const InputList = styled.input`
    width: 88px;
    margin-left: 10px;
`;
  
const EmailList = styled.select`
    width: 100px;
    margin: 0 10px 0 10px;
`;

const InputS = styled.input`
    width: 50px;
    margin-left: 49px;
`;

const InputSS = styled.input`
    width: 50px;

`;
  
const InputEnd = styled.input`
    width: 50px;
    margin-right: 10px;
`;

const InputNum = styled.input`
    width: 197px;
    margin-left: 59px;
    
`;

const Id = styled.div`
    margin: 10px 10px 0 30px;
`;

const Pw = styled.div`
    margin: 10px 10px 0 30px;
`;

const PwCheck = styled.div`
    margin: 10px 10px 0 30px;
`;

const Name = styled.div`
    margin: 10px 10px 0 30px;
`;

const Email = styled.div`
    margin: 10px 10px 0 30px;
`;
  
const Item = styled.div`
    background-color: white;
    padding: 5px 15px 30px 15px;
`;
  
  
const Star = styled.b`
    color: #00ADB5;
`;
  
const PhoneBox = styled.div`
    
    padding: 10px;
    width: 700px;
    display: inline-block;
    margin: 0 10px 0 30px;
`;
  
  const AddrBox = styled.div`
    border: solid 1px #d8d7d7;
    padding: 10px;
    width: 700px;
    display: inline-block;
    margin: 10px 10px 0 30px;
`;
  
const NotGrid = styled.div`
    padding-bottom: 15px;
`;
  
const GridBox = styled.div`
    display: grid;
    width: 300px;
    margin-left: 30px;
    grid-template-columns: 2, 5px;
    grid-template-rows: 10x;
    grid-template-areas: 
      "star phone-box"
`;
  
const IdCheck = styled.span`
    font-size: small;
    
`;
  
const Check = styled.fieldset`
    width: 270px;
    height: 30px;
    border: none;
    padding: 5px 0 0 340px;
`;

const CancelBtn = styled.button`
  background-color: #BDBDBD;
  margin: 15px 10px 10px 250px;
  width: 200px;
  height: 40px;
  border-radius: 10px;
  border: none;

`;
  
const JoinUsBtn = styled.button`
    background-color: black;
    width: 200px;
    height: 40px;
    border-radius: 10px;
`;

const Hint = styled.div`
    color: red;
    padding-left: 235px;
    font-size: small;
`;

const InputAddr1 = styled.input`
    width: 350px;
    margin-left: 95px;

`;

const InputAddr2 = styled.input`
    width: 350px;
    margin-left: 160px;

`;

const Btn = styled.button`
    margin-left: 10px;
`;




const SignUp = () => {
    // 회원정보 입력받는 부분
    const [id, setId] = useState(''); 
    const [pwd, setPwd] = useState('');
    const [pwdCheck, setPwdCheck] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailName, setEmailName] = useState('');
    const [autoMail, setAutoMail] = useState('');
    const [phone, setPhone] = useState('');
 
    
    const [addrNum, setAddrNum] = useState('');
    const [addr1, setAddr1] = useState('');
    const [addr2, setAddr2] = useState('');
    const [FinEmail , setFinEmail] = useState('');
    const [self, setSelf] = useState('');

    // input창 오류 메시지
    const [idMsg, setIdMsg] = useState(''); 
    const [pwdMsg, setPwdMsg] = useState(''); 
    const [pwdCheckMsg, setPwdCheckMsg] = useState(''); 
    /* const [nameMsg, setNameMsg] = useState('');
    const [emailMsg, setEmailMsg] = useState('');
    const [emailNameMsg, setEmailNameMsg] = useState('');
    const [phone1Msg, setPhone1Msg] = useState('');
    const [phone2Msg, setPhone2Msg] = useState('');
    const [phone3Msg, setPhone3Msg] = useState('');
    const [phoneNumMsg, setPhoneNumMsg] = useState('');
    const [addrNumMsg, setAddrNumMsg] = useState('');
    const [addr1Msg, setAddr1Msg] = useState('');
    const [addr2Msg, setAddr2Msg] = useState(''); */
    

    // input창 유효성 검사
    const [isId, setIsId] = useState('');
    const [isPwd, setIsPwd] = useState('');
    const [isPwdCheck, setIsPwdCheck] = useState('');
    const [isName, setIsName] = useState('');
    const [isEmail, setIsEmail] = useState('');
    const [isEmailName, setIsEmailName] = useState('');
    const [isPhone1, setIsPhone1] = useState('');
    const [isPhone2, setIsPhone2] = useState('');
    const [isPhone3, setIsPhone3] = useState('');
    const [isPhoneNum, setIsPhoneNum] = useState('');
    const [isAddrNum, setIsAddrNum] = useState('');
    const [isAddr1, setIsAddr1] = useState('');
    const [isAddr2, setIsAddr2] = useState('');

    // 팝업 창 띄우기

    // 회원가입 안될 때
    const [modalOpenSignUp, setModalOpenSignUp] = useState(false); //디폴트가 모달X

    // 회원가입 모달 창 닫는 거
    const closeModalSignUp = () => {
        setModalOpenSignUp(false); // 모달 창 닫기
    }


    // 아이디 중복일 때 팝업창 띄우기
    const [modalOpenIdCheck, setModalOpenIdCheck] = useState(false); //디폴트가 모달X

    // 아이디 중복 모달 창 닫는 거
    const closeModalIdCheck = () => {
        setModalOpenIdCheck(false); // 모달 창 닫기
    }
   

    // 아이디 체크
    const onChangId = (e) => {
        setId(e.target.value)
        if (e.target.value.length < 4 || e.target.value.length > 20) {
            setIdMsg("아이디는 4자리 이상 20자리 이하입니다.");
            setIsId(false);    
        } else {
            setIdMsg("아이디가 올바른 형식입니다.");
            setIsId(true);
        }
    }

    // 비밀번호 체크
    const onChangePwd = (e) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/;
        const passwordCurrent = e.target.value ;
        setPwd(passwordCurrent)
        if (!passwordRegex.test(passwordCurrent)) {
            setPwdMsg("비밀번호는 8자 이상이어야 하고 영문자, 숫자, 특수문자를 모두 포함해야 합니다.");
            setIsPwd(false)
        } else {
            setPwdMsg("비밀번호가 올바른 형식입니다.")
            setIsPwd(true);
        }        
    }

    // 비밀번호 확인 체크
    const onChangePwdCheck = (e) => {
        const passwordCurrent = e.target.value ;
        setPwdCheck(passwordCurrent)
        if (passwordCurrent !== pwd) {
            setPwdCheckMsg("비밀번호가 일치하지 않습니다. 다시 확인해주세요.")
            setIsPwdCheck(false)
        } else {
            setPwdCheckMsg("비밀번호가 일치합니다.")
            setIsPwdCheck(true);
        }      
    }


    const onChangeName = (e) => setName(e.target.value);
    const onChangeEmail = (e) => setEmail(e.target.value);
    const onChangePhone1 = (e) => setPhone1(e.target.value);
    const onChangePhone2 = (e) => setPhone2(e.target.value);
    const onChangePhone3 = (e) => setPhone3(e.target.value);
    const onChangePhoneNum = (e) => setPhoneNum(e.target.value);
    const onChangeAddrNum = (e) => setAddrNum(e.target.value);
    const onChangeAddr1 = (e) => setAddr1(e.target.value);
    const onChangeAddr2 = (e) => setAddr2(e.target.value);


    // 이메일 

    const onChangeAutoMail = (e) => {
       
        const a = e.target.value
        setAutoMail(a);
    }
    
    const onChangeEmailName = (e) => {
        setEmailName(e.target.value);
        if((e.target.value) !== autoMail) {
            onChangeEmailName.value = e.target.value
        
        } else {
            onChangeEmailName.value = autoMail
        }

    }

    const [enroll_company, setEnroll_company] = useState({
        address:'',
    });

    const [popup, setPopup] = useState(false);

    const handleInput = (e) => {
        setEnroll_company({
            ...enroll_company,
            [e.target.name]:e.target.value
        })
    };

    const handleComplete = (data) => {
        setPopup(!popup);
    };

    const Final = () =>{
        setFinEmail(email+"@"+autoMail);
        console.log(FinEmail);
    
    } 

    


    // API 호출

    // 회원가입
    const onClickSignUp = async() => {
        try {
            const res = await MiniApi.SignUp(id, pwd, pwdCheck, name, email, phone, addr);

            console.log(res.data.result);

            if(res.data.result === "NOK") {
            } else {
                    console.log("회원가입에 실패했습니다. 다시 확인해주세요.");
                    setModalOpenSignUp(true);
                }
            } catch (e) {
        }
    }
    
    // 아이디 중복확인
    const onClickIdCheck = async() => {
        try {
            const res = await MiniApi.idCheck(id);

            console.log(res.data.result);

            if(res.data.result === "OK") {
            } else {
                console.log("이미 존재하는 아이디 입니다.");
                setModalOpenIdCheck(true);
                
            }
         } catch (e) {
         } 
       } 
 
    
    return (
        <>
        <Container>
            <ItemBox>
                <JoinUs>JOIN US</JoinUs>
                <Comments>👟 슈즈의 기준, Sa shoe 회원가입하고 인싸되기 </Comments>
                    <Item>
                        <Comments2><Star>* </Star>표시 필수 입력</Comments2>
                        <NotGrid>

                        {/* 아이디 입력창 */}
                        <Id><Star>* </Star><ItemText>아이디</ItemText>
                            <Input value={id} placeholder="아이디" onChange={onChangId}  />
                            <button onClick={onClickIdCheck} >중복 확인</button>
                           
                        </Id>

                        {/* 아이디 오류 메세지 */}
                        <Hint>
                        {3 < Id.length < 21 && <span className={`message ${isPwd ? 'success' : 'error'}`}>{idMsg}</span>}
                        </Hint>
                        
                        {/* 비밀번호 입력창 */}
                        <Pw><Star>* </Star><ItemText>비밀번호</ItemText>
                            <Input value={pwd} placeholder="비밀번호" onChange={onChangePwd} />
                        </Pw>

                        {/* 비밀번호 오류 메세지 */}
                        <Hint>
                        {7 < Id.length < 21 && <span className={`message ${isPwdCheck ? 'success' : 'error'}`}>{pwdMsg}</span>}
                        </Hint>

                        {/* 비밀번호 확인 입력창 */}
                        <PwCheck><Star>* </Star><ItemText>비밀번호 확인</ItemText>
                            <Input value={pwdCheck} placeholder="비밀번호 확인" onChange={onChangePwdCheck} />
                        </PwCheck>

                        {/* 비밀번호 확인 오류 메세지 */}
                        <Hint>
                        {pwd !== pwdCheck && <span className={`message ${isName ? 'success' : 'error'}`}>{pwdCheckMsg}</span>}
                        </Hint>

                        {/* 이름 입력창 */}
                        <Name><Star>* </Star><ItemText>이름</ItemText>
                            <Input value={name} placeholder="이름" onChange={onChangeName}  />
                        </Name>

                        {/* 이메일 입력창 */}
                        <Email><Star>* </Star><ItemText>이메일</ItemText>
                            <InputE value={email} placeholder="이메일" onChange={onChangeEmail} /> @
                            <InputList className='write' value={emailName} placeholder="(직접 입력)"  />
                            <InputList value={autoMail} placeholder="(직접 입력)" onChange={onChangeEmailName} />
                            <EmailList onChange={onChangeAutoMail}>
                                <option value={'직접입력'}>직접 입력</option>
                                <option value={"naver.com"}>naver.com</option>
                                <option value={"gmail.com"}>gmail.com</option>
                                <option value={"daum.net"}>daum.net</option>
                                <option value={"nate.com"}>nate.com</option>
                                <option value={"kakao.com"}>kakao.com</option>
                            </EmailList><br/>
                        </Email>
                        </NotGrid>

                        {/* 전화번호 입력창 */}
                        <GridBox>  
                        <Star>* </Star>
                        <PhoneBox><ItemText1>전화번호</ItemText1>
                            <InputS value={phone} placeholder="전화번호" onChange={onChangePhone1}/>
                           
                        </PhoneBox><br />

                        {/* 주소 입력창 */}
                        <AddrBox><ItemText3>주소</ItemText3>
                        <InputAddr1 className="user_enroll_text" placeholder="주소"  type="text" required={true} name="address" onChange={handleInput} value={enroll_company.address}/>
                        <Btn onClick={handleComplete}>주소 검색</Btn>
                        {popup && <Post company={enroll_company} setcompany={setEnroll_company}></Post>} <br />
                        <InputAddr2 placeholder="상세 주소" ></InputAddr2>
                            
                        </AddrBox>
                        </GridBox>  
                    </Item>
                    <CancelBtn><NavLink to='/Home' >취소하기</NavLink></CancelBtn>
                    <JoinUsBtn><NavLink to='/SignCom' onClick={onClickSignUp} >회원가입</NavLink></JoinUsBtn><br />
                <Check>
                    <IdCheck>이미 아이디가 있으신가요? </IdCheck><Link to='/Login'> ＞ 로그인</Link>
                </Check>
            </ItemBox>
            {modalOpenIdCheck && <Modal open={modalOpenIdCheck} close={closeModalIdCheck} header="확인">이미 가입된 아이디입니다.</Modal>}
            {modalOpenSignUp && <Modal open={modalOpenSignUp} close={closeModalIdCheck} header="확인">회원가입에 실패했습니다. 다시 확인해주세요.</Modal>}
        </Container>
        </>
    ); 
}    

export default SignUp;