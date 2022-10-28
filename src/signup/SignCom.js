import { Link } from "react-router-dom";
import styled from "styled-components";

// 도연 작업중

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 100px;
`;

const ItemBox = styled.div`
    width: 500px;
    height: 600px;
    background-color: #EEEEEE;
    margin: 10px;
    padding: 20px 20px 20px 20px;
    text-align: left;
    border-style: groove;
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
    color: white;
    margin: 15px 0 10px 100px;
    width: 300px;
    height: 40px;
    border-radius: 10px;
`;

const clickBtn = () => {
    document.location.href('/')
}



const SignCom = () => {

    return(
        <>
        <Link to='/'>🏠홈으로 이동🏠</Link><br />
        <Link to="/SignUp">회원가입</Link>
        <Container>
            <ItemBox>
                <Mark><CheckMark>√</CheckMark></Mark>
                <Comp>Sa Shoe <Strong>회원가입이 완료</Strong> 되었습니다.</Comp>
                <LoginBtn onClick={clickBtn}><Link to='/Login'>로그인</Link></LoginBtn><br />
            </ItemBox>
        </Container>
        </>
    );
}

export default SignCom;