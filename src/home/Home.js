import { Link } from "react-router-dom";

const Home = () => {
    return(
        <>
        {/* 보여지는 텍스트는 회원가입이지만, 클릭하면 이용약관 페이지로 이동 후 동의하면 회원가입 */}
        <Link to="/Agree">회원가입</Link>
        <br/>
        <Link to="/Login">로그인</Link>
        <br/>
        <Link to="/Modify">마이페이지</Link>
        <br/>
        <Link to="/ItemList">상품목록</Link>
        <br/>
        <Link to="/SiteInfo">사이트 소개</Link>
        <br />
        <Link to="/Cs">고객센터</Link>
        <br />
        <Link to="/Boards">커뮤니티</Link>
        </>
    )
}
export default Home;