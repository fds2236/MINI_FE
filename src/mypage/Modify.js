import React from "react";
import { useState } from "react";
import styled from "styled-components";
import MiniApi from "../api/MiniApi";
import Profile from "./Profile";

const ModiContain = styled.div`

`
const Modify = () => {


    // const [id, setId] = useState('');
    const [inputId, setInputId] = useState("");
    const [pwd, setPwd] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [addr, setAddr] = useState('');
    const [phone, setPhone] = useState('');

    // const onChangeId = (e) => setId(e.target.value);
    const onChangeId = (e) => setInputId(e.target.value);
    const onChangePwd = (e) => setPwd(e.target.value);
    const onChangeName = (e) => setName(e.target.value);
    const onChangeEmail = (e) => setEmail(e.target.value);
    const onChangeAddr = (e) => setAddr(e.target.value);
    const onChangePhone = (e) => setPhone(e.target.value);

    // const [PwdToggle, SetPwdToggle] = useState(false)
    // const [EmailToggle, SetEmailToggle] = useState(false)
    // const [NameToggle, setNameToggle] = useState(false)
    // const [TelToggle, setTelToggle] = useState(false)
    // const [AddrToggle, setAddrToggle] = useState(false)


    // const togglePwdView = () => {
    //     SetPwdToggle(!PwdToggle)
    // }
    // const toggleEmailView = () => {
    //     SetEmailToggle(!EmailToggle)
    // }
    // const toggleNameView = () => {
    //     setNameToggle(!NameToggle)
    // }
    // const toggleTelView = () => {
    //     setTelToggle(!TelToggle)
    // }
    // const toggleAddrView = () => {
    //     setAddrToggle(!AddrToggle)
    // }


    let whoLoginNow = window.localStorage.getItem("whoLoginNow");


    // API호출
    const onSubmit = async (whoLoginNow) => {
        try {
            const res =  await MiniApi.editMem(whoLoginNow, pwd, name, email, addr, phone);
            alert("전송했습니다");
            //  window.localStorage.setItem("callEmail", email);

        } catch (e) {
            alert("오류 : " + e);
        }
    }


    return(
        <>
        <Profile/>
        {/* 로그인한 id, 이메일 회원정보 띄워줘야 함 */}
        {/* <input
            placeholder="id 입력 하세요 ....."
            value={id}
            onChange={onChangeId}
        ></input>  */}

        <div>{whoLoginNow}</div>

        <input
            placeholder="pwd 입력 하세요 ....."
            value={pwd}
            onChange={onChangePwd}
        ></input> 
        <input
            placeholder="name입력 하세요 ....."
            value={name}
            onChange={onChangeName}
        ></input> 
        <input
            placeholder="email 입력 하세요 ....."
            value={email}
            onChange={onChangeEmail}
        ></input> 
        <input
            placeholder="addr 입력 하세요 ....."
            value={addr}
            onChange={onChangeAddr}
        ></input> 
        <input
            placeholder="phone 입력 하세요 ....."
            value={phone}
            onChange={onChangePhone}
        ></input> 

        <button onClick={()=>onSubmit(whoLoginNow)} >제출</button>










        {/* <Profile/>
        <div>
        <h2>로그인 정보</h2>
        <hr/>
        <br/>
        <p>이메일 변경</p>
        <br/>
        <button style={{color: 'black'}} onClick={toggleEmailView}>변경</button>
        {EmailToggle &&
        <div>
        <p>새로운 이메일 입력</p>
        <input type="text" placeholder="이메일"></input>
        <button> 제출</button>
        </div>
        }


        <p>비밀번호 변경</p>
        <br/>
        <button style={{color: 'black'}} onClick={togglePwdView}>변경</button>
        {PwdToggle &&
        <div>
        <p>이전 비밀번호 입력</p>
        <input type="text" placeholder="이전 비번"></input>
        <br/>
        <p>새로운 비밀번호 입력</p>
        <input type="text" placeholder="new 비번"></input>
        </div>
        }

        <p>이름 변경</p>
        <br/>
        <button style={{color: 'black'}} onClick={toggleNameView}>변경</button>
        {NameToggle &&
        <div>
        <p>새로운 비밀번호 입력</p>
        <input type="text" placeholder="새로운 이름"></input>
        </div>
        }

        <p>전화번호 변경</p>
        <br/>
        <button style={{color: 'black'}} onClick={toggleTelView}>변경</button>
        {TelToggle &&
        <div>
        <p>새로운 전화번호 입력</p>
        <input type="text" placeholder="전화번호"></input>
        </div>
        }

        <p>주소 변경</p>
        <br/>
        <button style={{color: 'black'}} onClick={toggleAddrView}>변경</button>
        {AddrToggle &&
        <div>
        <p>새로운 주소 입력</p>
        <input type="text" placeholder="주소"></input>
        </div>
        }
        </div> */}
        </>
    )
}

export default Modify;