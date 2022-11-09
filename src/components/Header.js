import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import logo from "../images/SASHOE_LOGO-00ADB5.png";
import searchIcon from "../images/Search-00AD85.png"
import s from "react-aws-s3";

// 헤더 TOP 스타일
const StyledHeaderTop = styled.header`
  background-color: #222831;
  width: 100%;
  padding: 10px 0px 15px 0px;
  display: flex;
  justify-content: right;
  .nav-top {
    margin-right: 30px;
    .mypage-link, .mypage-like, .signup-link, .cs-link, .login, .loginout, .login-info {
      text-decoration: none;
      font-size: 13px;  
      color: #ffffff;
      background-color:#222831;
      border: none;
      cursor: pointer;
    }
    .login-info{
      margin-top: 3px;
    }
  }
`;

// 헤더 스타일
const StyledHeader = styled.header`
  background-color: #ffffff;
  width: 100%;
  /* padding: 40px; */
  /* margin-bottom: 30px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eeeeee;
`;

const HeaderLogo = styled.div`
  margin: 30px;
  .logo-home {
    width: 12em;
  }
`;

const HeaderMenu = styled.div`
  font-size: 1.45em;
  color: #222831;
  align-items: center;
  cursor: pointer;
  display: flex;

  .category, .searchBar {
    padding-right: 30px;
  }
  .itemlist, .board {
    text-decoration: none;
    font-weight: 600;
    color : #222831;
  }
  .itemlist:hover, .board:hover {
    text-decoration: none;
    color: rgb(0,173,181);
  }
  .searchBar {
    display: flex;
    box-sizing: border-box;
    .search {
      border: 1px solid rgb(0,173,181);
      padding: 8px;
    }
    button {
      cursor: pointer;
      border: none;
      background-color: rgba(0,0,0,0);
    }
    img {
      display: flex;
      width: 25px;
      height: 25px;
    }
  }
`;


// 헤더 TOP: 로그인(마이페이지), 관심상품, 고객센터
// 헤더 : 로고(home이동), SNEAKERS(상품목록), 검색창
const Header = () => {

  // 검색창(구현중💬)
  const [word, setWord] = useState("");
  
  const onSubmit = async () => {
    //setSearch(e.target.value)
    window.location.href = "itemlist/" + word;
  }

  // const onClick = () => {
  //   axios.get()
  //   .then(response => {
  //     setSearch(response.data);
  //   })
  // }

  // 로그인했을 경우 현재 ID 표시
  let whoLoginNow = window.localStorage.getItem("whoLoginNow");

  // 현재 ID에서 로그아웃하기
  const onClickLogout = () => {
    window.localStorage.removeItem("whoLoginNow");
    window.location.replace("/");
  }

  return (
    <>
      <StyledHeaderTop>
        {/* whoLoginNow 코드 추후 정리 예정ㅠㅠ */}
        {!whoLoginNow ?
        (<>
        <div className="nav-top"><div className="login-info">{whoLoginNow}</div></div>
        <div className="nav-top"><Link to = {"/Login"} className="login">로그인</Link></div>
        <div className="nav-top"><Link to = {"/Agree"} className="signup-link">회원가입</Link></div>
        <div className="nav-top"><Link to = {"/Login"} className="mypage-like">관심상품</Link></div>
        </>)
        :(<>
        <div className="nav-top"><div className="login-info">{whoLoginNow}님</div></div>
        <div className="nav-top"><button className="loginout" onClick={onClickLogout}>로그아웃</button></div>
        <div className="nav-top"><Link to = {"/Mypage"} className="mypage-link">마이페이지</Link></div>
        <div className="nav-top"><Link to = {"/Like"} className="mypage-like">관심상품</Link></div>
        </>) 
        }

      
        <div className="nav-top">
          <Link to = {"/Cs"} className="cs-link">고객센터</Link>
        </div>
      </StyledHeaderTop>
      <StyledHeader>
        <HeaderLogo>
          <div className="nav-logo">
            <Link to = {"/"}>
              <img src={logo} className="logo-home" alt="logo"/>
            </Link>
          </div>
        </HeaderLogo>
        <HeaderMenu>
          <div className="category">
            <Link to = {"/ItemList"} className="itemlist">SNEAKERS</Link>
          </div>
          <div className="category">
            <Link to = {"/Boards"} className="board">COMMUNITY</Link>
          </div>
          <div className="searchBar">
            <input className="search" onChange={(e) => {setWord(e.target.value); console.log(word);}} placeholder="검색어 입력"/>
            <button type="button" onClick={() => {onSubmit()}}><img src={searchIcon}/></button>
          </div>
        </HeaderMenu>
      </StyledHeader>
    </>
  );
};

export default Header;