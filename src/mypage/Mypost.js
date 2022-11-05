import Profile from "./Profile";
import React from "react";
import styled from "styled-components";

const StylePost = styled.div`

`;

// 내 게시글 보기
const Mypost = () => {
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