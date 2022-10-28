import { Link } from "react-router-dom";
import { useState} from "react";
import MiniApi from "../api/MiniApi";


const Login = () => {
    // 아이디, 비밀번호 입력
    const [inputId, setInputId] = useState("");
    const [inputPwd, setInputPwd] = useState("");

    // 아이디, 비밀번호 제한 메시지
    const [idMessage, setIdMessage] = useState("");
    const [pwdMessage, setPwdMessage] = useState("");

    // 로그인 정보 유효성 검사
    const [isId, setIsId] = useState("");
    const [isPwd, setIsPwd] = useState("");

    // 로그인 실패시 팝업창 띄우기
    const [modalOpen, setModalOpen] = useState("");

    // 아이디 제한(힌트)
    const onChangeId = (e) => {
        setInputId(e)
        if(e < 4 || e > 20){
            setIdMessage("4자리 이상 20자리 미만으로 입력하세요.");
            setIsId(false);
        } else {
            setIdMessage("올바른 형식입니다.");
            setIsId(true);
        }
    }

    // 비밀번호 제한(힌트)
    const onChangePwd = (e) => {
        const pwdRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/
        const pwdRegexCurrent = e;
        setInputPwd(e)
        if(!pwdRegex.test(pwdRegexCurrent)) {
            setPwdMessage("숫자+영문자+특수문자 조합으로 8자리 이상 입력하세요.");
            setIsPwd(false);
        } else {
            setPwdMessage("올바른 형식입니다.");
            setIsPwd(true);
        }
    }

    // Api 호출
    const onClickLogin = async() => {
        try {
            const res = await MiniApi.userLogin(inputId, inputPwd);
            console.log(res.data.result);


        } catch (e) {
            setModalOpen(true);
            console.log("로그인 에러ㅠㅠ")
        }
    }



    return(
        <div className="container">
        <h1>로그인</h1>

        {/* 아이디 입력창 */}
        <div className="input">
         <label>아이디</label>
         <input value={inputId} onChange={onChangeId}></input>   
        </div>

        {/* 패스워드 입력창 */}
        <div className="input">
        <label>비밀번호</label>
        <input value={inputPwd}></input>
        </div>

        {/* 아이디 입력 제한 메시지 */}

        {/* 비밀번호 입력 제한 메시지 */}

        {/* 로그인 버튼 활성화 */}



        <br/>
        <br/>
        <br/>

        {/* 다른 페이지 연결 */}
        <div className="link">
        <Link to="/SignUp">회원가입</Link>
        <br />
        <Link to="/ForgotId">아이디 찾기</Link>
        <br />
        <Link to="/ForgotPwd">비밀번호 찾기</Link>
        </div>
        </div>
    )
}

export default Login;