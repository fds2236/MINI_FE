import { Link } from 'react-router-dom';
import styled from 'styled-components';

// 푸터 스타일
const StyledFooter = styled.footer`
    /* bottom: 0;
    margin-bottom: 0; */
    background-color: #222831;
    position: absolute;
    /* height: 20vh; */
    width: 100%;
    padding: 10px 12px 15px 12px;
    line-height: 25px;
    display:flex;
    flex-direction: column;
    height: 100px;
    margin-top: auto;
    .nav-bottom {
    margin-right: 30px;
    .about, .agree, .privacy, .home {
      text-decoration: none;
      font-size: 13px;
      color: #ffffff;
    }
}
`;




const Footer = () => {
    return (
        <>
            <StyledFooter>
                <div>
                    <Link to={"/SiteInfo"} className="about">회사소개</Link>
                </div>
                <div>
                    <Link to={"/Agree"} className="agree">이용약관</Link>
                </div>
                <div>
                    <Link to={"/Privacy"} className="privacy">개인정보처리방침</Link></div>
                <div>
                    <Link to={"/Home"} className="home">SaShoe</Link>
                </div> <br/>
            <div className="sashoe">
                대표:정경수 | 소재지: 서울시 강남구 테헤란로 14길 6 남도빌딩 3층 | 사업자등록번호: 101-50-41461<br/>
                개인정보관리책임자:이수빈 | e-mail: ‘SASHOE' '123@sashoe.co.kr' | FAX: 02-514-2236
            </div>
            </StyledFooter>
        </>

    );
}

export default Footer;