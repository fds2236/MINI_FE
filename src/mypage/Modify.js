import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Profile from "./Profile";

const ModiContain = styled.div`

`
const Modify = () => {
    const [PwdToggle, SetPwdToggle] = useState(false)
    const [EmailToggle, SetEmailToggle] = useState(false)
    const [NameToggle, setNameToggle] = useState(false)
    const [TelToggle, setTelToggle] = useState(false)
    const [AddrToggle, setAddrToggle] = useState(false)


    const togglePwdView = () => {
        SetPwdToggle(!PwdToggle)
    }
    const toggleEmailView = () => {
        SetEmailToggle(!EmailToggle)
    }
    const toggleNameView = () => {
        setNameToggle(!NameToggle)
    }
    const toggleTelView = () => {
        setTelToggle(!TelToggle)
    }
    const toggleAddrView = () => {
        setAddrToggle(!AddrToggle)
    }

    return(
        <>
        <Profile/>
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
        </div>
        </>
    )
}

export default Modify;