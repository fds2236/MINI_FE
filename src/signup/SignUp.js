import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";


const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 100px;
`;

const JoinUs = styled.div`
background-color: #00ADB5;
color: aliceblue;
font-size: xx-large;
font-weight: bold;
width: 150px;
height: 50px;
border-radius: 10px;
margin: 0 0 10px 180px;
display: block;
text-align: center;
`;

const Comments = styled.p`
    color: red;
    font-size: 13px;
    margin: 0 0 10px 110px;
`;
const Comments2 = styled.p`
    font-size: small;
    text-align: right;
`;
  
const ItemBox = styled.div`
    background-color: #EEEEEE;
    margin: 10px;
    padding: 20px 20px 20px 20px;
    text-align: left;
    border-style: groove;
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
    padding: 5px 0 0 100px;
`;
  
const JoinUsBtn = styled.button`
    background-color: black;
    color: white;
    margin: 15px 0 10px 100px;
    width: 300px;
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
    const [emailList, setEmailList] = useState('');
    const [phone, setPhone] = useState('');
    const [addr, setAddr] = useState('');

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

    // input창 제약조건
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

    const onChangeEmailList = (e) => {
        setEmailList(e.target.value) 
        if((e.target.value) !== emailList) {
            onChangeEmailList.value = e.target.value
        
        } else onChangeEmailList.value = emailList

    }



    return (
        <Container>
            <Link to='/'>🏠홈으로 이동🏠</Link>
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
                            <InputList value={emailList} placeholder="(직접 입력)" onChange={onChangeEmailList} />
                            <EmailList value={emailList}>
                                <option value="직접 입력">직접 입력</option>
                                <option value="@naver.com">naver.com</option>
                                <option value="@gmail.com">gmail.com</option>
                                <option value="@daum.net">daum.net</option>
                                <option value="@nate.com">nate.com</option>
                                <option value="@kakao.com">kakao.com</option>
                            </EmailList><br/>
                        </Email>
                        </NotGrid>
                        <GridBox>  
                        <Star>* </Star>
                        <PhoneBox><ItemText1>전화번호</ItemText1>
                            <InputS value={phone} placeholder="010" /> - <InputS value={phone} /> - <InputEnd value={phone} /> 
                            <button className='grayBtn'> 인증번호 전송</button><br /><ItemText2>인증번호</ItemText2>
                            <Input value={phone} placeholder="인증번호 6자리" /> 
                            <button>확인</button>
                        </PhoneBox><br />
                        <AddrBox><ItemText3>주소</ItemText3>
                            <Input value={addr} placeholder="우편번호" /><button>우편번호 검색</button><br /> 
                            <ItemText3></ItemText3><Input value={addr} placeholder="주소" /><br /> 
                            <ItemText3></ItemText3><Input value={addr} placeholder="상세 주소" /> 
                        </AddrBox>
                        </GridBox>  
                    </Item>
                <JoinUsBtn>회원가입</JoinUsBtn><br />
                <Check>
                    <IdCheck>이미 아이디가 있으신가요? </IdCheck><Link to='/Login'> ＞ 로그인</Link>
                </Check>
            </ItemBox>
        </Container>
    
    ); 
}    

export default SignUp;