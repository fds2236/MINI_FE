import Profile from "./Profile";
import React from "react";
import styled from "styled-components";
import MiniApi from "../api/MiniApi";

const StylePost = styled.div`

`;

// 내 게시글 보기
const Mypost = async() => {
    try {
        const res = await MiniApi.mypostInfo();
        alert("불러오기 완료")
    } catch (e) {
        alert("오류 : " + e);
    }
    return(
        <>
        <Profile/>
        <hr></hr>                    
        <StylePost>
            <br/>
            <h2>내 게시글 보기</h2>


        </StylePost>
        </>
    );
}
export default Mypost;