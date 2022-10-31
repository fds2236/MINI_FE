import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

// 도연 작업 완료
// 홈으로 이동 => 헤더 만들어지면 삭제, 헤더 로고 눌러서 홈으로 이동

const Container = styled.div`
    background-color: #EEEEEE;
`;

const ItemBox = styled.div`
    width: 500px;
    height: 1000px;
    margin: 0 0 0 500px;
    padding: 20px 20px 20px 20px;
    text-align: left;
    
`;

const Mark = styled.div`
    margin-left: 180px;
`;

const CheckMark = styled.div`
    background-color: #00ADB5;
    color: aliceblue;
    width: 150px;
    height: 150px;
    font-size: 130px;
    font-weight: bold;
    text-align: center;
    line-height: 130px;
    border-radius: 180px;
    margin-top: 10px;
`;

const Comp = styled.div`
    color: gray;
    font-size: x-large;
    width: 500px;
    margin-top: 20px;
    text-align: center;
    
`;

const Strong = styled.span`
    color: #00ADB5;
    font-weight: bold;
    
`;

const LoginBtn = styled.button`
    background-color: black;
    margin: 50px 0 10px 130px;
    width: 250px;
    height: 50px;
    border-radius: 10px;
`;

const clickBtn = () => {
    document.location.href('/')
}


const SignCom = () => {

    return(
        <>
        <Container>
            <ItemBox>
                <Mark><CheckMark>√</CheckMark></Mark>
                <Comp>Sa Shoe <Strong>회원가입이 완료</Strong> 되었습니다.</Comp>
                <LoginBtn onClick={clickBtn}><NavLink to='/Login' style={({ isActive }) => ({ color: isActive ? 'black' : 'white' })}>로그인</NavLink></LoginBtn><br />
            </ItemBox>
        </Container>
        </>
    );
}

export default SignCom;