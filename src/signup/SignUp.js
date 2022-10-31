import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import DaumPostCode from 'react-daum-postcode';


// 도연 기능 구현 ing..


const Container = styled.div`
    padding-right: 500px;
    background-color: #EEEEEE;
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
    color: black;
    font-size: 13px;
`;
const Comments2 = styled.p`
    font-size: small;
    text-align: right;
`;
  
const ItemBox = styled.div`
    width: 1000px;
    height: 615px;
    margin-left: 450px;
    padding: 0 20px 20px 20px;
    text-align: left;
`;

const ItemText = styled.span`
    display: inline-block;
    width: 110px;
    padding-left: 10px;
`;
  
const ItemText1 = styled.span`
    display: inline-block;
    width: 100px;
`;
  
const ItemText2 = styled.span`
    display: inline-block;
    width: 90px;
`;
  
const ItemText3 = styled.span`
    display: inline-block;
    width: 55px;
`;
  
const Input = styled.input`
    width: 150px;
    margin: 0 10px 0 10px;
`;
  
const InputE = styled.input`
    width: 65px;
    margin-left: 10px;
`;

const InputList = styled.input`
    width: 80px;
    margin-left: 10px;
`;
  
const EmailList = styled.select`
    width: 80px;
    margin: 0 10px 0 10px;
`;

const InputS = styled.input`
    width: 40px;
`;
  
const InputEnd = styled.input`
    width: 40px;
    margin-right: 10px;
`;

const Id = styled.div`
    margin: 10px 10px 0 10px;
`;

const Pw = styled.div`
    margin: 10px 10px 0 10px;
`;

const PwCheck = styled.div`
    margin: 10px 10px 0 10px;
`;

const Name = styled.div`
    margin: 10px 10px 0 10px;
`;

const Email = styled.div`
    margin: 10px 10px 0 10px;
`;
  
const Item = styled.div`
    background-color: white;
    padding: 5px 15px 30px 15px;
`;
  
  
const Star = styled.b`
    color: #00ADB5;
`;
  
const PhoneBox = styled.div`
    border: solid 1px #d8d7d7;
    padding: 10px;
    width: 385px;
    display: inline-block;
    margin: 0 10px 0 10px;
`;
  
  const AddrBox = styled.div`
    border: solid 1px #d8d7d7;
    padding: 10px;
    width: 385px;
    display: inline-block;
    margin: 10px 10px 0 10px;
`;
  
const NotGrid = styled.div`
    padding-bottom: 15px;
`;
  
const GridBox = styled.div`
    display: grid;
    width: 300px;
    margin-left: 10px;
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
    padding: 5px 0 0 130px;
`;

const CancelBtn = styled.button`
  background-color: #BDBDBD;
  margin: 15px 10px 10px 100px;
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






const SignUp = () => {
    // 회원정보 입력받는 부분
    const [id, setId] = useState(''); 
    const [pw, setPw] = useState('');
    const [pwCheck, setPwCheck] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [autoMail, setAutoMail] = useState('');
    const [phone1, setPhone1] = useState('');
    const [phone2, setPhone2] = useState('');
    const [phone3, setPhone3] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [addNum, setAddrNum] = useState('');
    const [addr1, setAddr1] = useState('');
    const [addr2, setAddr2] = useState('');

    // input창 오류 메시지
    const [idMsg, setIdMsg] = useState(''); 
    const [pwMsg, setPwMsg] = useState(''); 
    const [pwCheckMsg, setPwCheckMsg] = useState(''); 
    const [nameMsg, setNameMsg] = useState('');
    const [emailMsg, setEmailMsg] = useState('');
    const [phoneMsg, setPhoneMsg] = useState('');
    const [addrMsg, setAddrMsg] = useState('');
    

    // input창 유효성 검사
    const [isId, setIsId] = useState('');
    const [isPw, setIsPw] = useState('');
    const [isPwCheck, setIsPwCheck] = useState('');
    const [isName, setIsName] = useState('');
    const [isEmail, setIsEmail] = useState('');
    const [isPhone, setIsPhone] = useState('');
    const [isAddr, setIsAddr] = useState('');
    

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
    const onChangePw = (e) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/;
        const passwordCurrent = e.target.value ;
        setPw(passwordCurrent)
        if (!passwordRegex.test(passwordCurrent)) {
            setPwMsg("비밀번호는 8자 이상이어야 하고 영문자, 숫자, 특수문자를 모두 포함해야 합니다.");
            setIsPw(false)
        } else {
            setPwMsg("비밀번호가 올바른 형식입니다.")
            setIsPw(true);
        }        
    }

    // 비밀번호 확인 체크
    const onChangePwCheck = (e) => {
        const passwordCurrent = e.target.value ;
        setPwCheck(passwordCurrent)
        if (passwordCurrent !== pw) {
            setPwCheckMsg("비밀번호가 일치하지 않습니다. 다시 확인해주세요.")
            setIsPwCheck(false)
        } else {
            setPwCheckMsg("비밀번호가 일치합니다.")
            setIsPwCheck(true);
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
        setAutoMail(e.target.value);
    }

    const onChangeEmailInput = (e) => {
        setEmailInput(e.target.value);
        if((e.target.value) !== autoMail) {
            onChangeEmailInput.value = e.target.value
        
        } else {
            onChangeEmailInput.value = autoMail
        }

    }


    return (
        <>
        <Container>
            <ItemBox>
                <JoinUs>JOIN US</JoinUs>
                <Comments>👟Sa Shoe 회원가입 하고 예쁜 신발 Sa Shoe~👟 </Comments>
                    <Item>
                        <Comments2><Star>* </Star>표시 필수 입력</Comments2>
                        <NotGrid>
                        <Id><Star>* </Star><ItemText>아이디</ItemText>
                            <Input value={id} placeholder="아이디" onChange={onChangId}  />
                            <button>중복 확인</button>
                        </Id>
                        <Pw><Star>* </Star><ItemText>비밀번호</ItemText>
                            <Input value={pw} placeholder="비밀번호" onChange={onChangePw} />
                        </Pw>
                        <PwCheck><Star>* </Star><ItemText>비밀번호 확인</ItemText>
                            <Input value={pwCheck} placeholder="비밀번호 확인" onChange={onChangePwCheck} />
                        </PwCheck>
                        <Name><Star>* </Star><ItemText>이름</ItemText>
                            <Input value={name} placeholder="이름" onChange={onChangeName}  />
                        </Name>
                        <Email><Star>* </Star><ItemText>이메일</ItemText>
                            <InputE value={email} placeholder="이메일" onChange={onChangeEmail} /> @
                            <InputList value={autoMail} placeholder="(직접 입력)" onChange={onChangeEmailInput} />
                            <EmailList value={autoMail} onChange={onChangeAutoMail}>
                                <option value="직접 입력">직접 입력</option>
                                <option value="naver.com">naver.com</option>
                                <option value="gmail.com">gmail.com</option>
                                <option value="daum.net">daum.net</option>
                                <option value="nate.com">nate.com</option>
                                <option value="kakao.com">kakao.com</option>
                            </EmailList><br/>
                        </Email>
                        </NotGrid>
                        <GridBox>  
                        <Star>* </Star>
                        <PhoneBox><ItemText1>전화번호</ItemText1>
                            <InputS value={phone1} placeholder="010" onChange={onChangePhone1}/> - <InputS value={phone2} onChange={onChangePhone2} /> - <InputEnd value={phone3} onChange={onChangePhone3} /> 
                            <button className='grayBtn'> 인증번호 전송</button><br /><ItemText2>인증번호</ItemText2>
                            <Input value={phoneNum} placeholder="인증번호 6자리" onChange={onChangePhoneNum} /> 
                            <button>확인</button>
                        </PhoneBox><br />
                        <AddrBox><ItemText3>주소</ItemText3>
                            <Input value={addNum} placeholder="우편번호" onChange={onChangeAddrNum} /><button>우편번호 검색</button><br /> 
                            <ItemText3></ItemText3><Input value={addr1} placeholder="주소" onChange={onChangeAddr1} /><br /> 
                            <ItemText3></ItemText3><Input value={addr2} placeholder="상세 주소" onChange={onChangeAddr2} /> 
                        </AddrBox>
                        </GridBox>  
                    </Item>
                    <Link to='/Popup'>팝업</Link>
                    <CancelBtn><NavLink to='/Home' style={({ isActive }) => ({ color: isActive ? 'black' : 'white' })}>취소하기</NavLink></CancelBtn>
                    <JoinUsBtn><NavLink to='/SignCom' style={({ isActive }) => ({ color: isActive ? 'black' : 'white' })}>회원가입</NavLink></JoinUsBtn><br />
                <Check>
                    <IdCheck>이미 아이디가 있으신가요? </IdCheck><Link to='/Login'> ＞ 로그인</Link>
                </Check>
            </ItemBox>
        </Container>
        </>
    ); 
}    

export default SignUp;