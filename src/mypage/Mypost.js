import Profile from "./Profile";
import React from "react";
import styled from "styled-components";
import MiniApi from "../api/MiniApi";
import { useState } from "react";

const StylePost = styled.div`

`;

// 내 게시글 보기
const Mypost = () => {

    let whoLoginNow = window.localStorage.getItem("whoLoginNow");
    
    //const [id, setID] = useState("");
    const [mypost, setMypost] = useState("");
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    // API 호출
    const onClick = async (whoLoginNow) => {
    try {
        const cmd = await MiniApi.mypostInfo(whoLoginNow, category, title, content);
        setMypost(cmd.data);
        // alert("불러오기 완료")
    } catch (e) {
        console.log(e);
        // alert("오류 : " + e);
    }
}
    return(
        <>
        <Profile/>
        <hr></hr>                    
        <StylePost>
            <br/>
            <div>
                <h2 onClick={()=>onClick(whoLoginNow)}>내 게시글 보기
            <div>
                {mypost && mypost.map(post => (
                    <div key={whoLoginNow}>
                    <p>{post.id}</p>
                    <p>{post.category}</p>
                    <p>{post.title}</p>
                    <p>{post.content}</p>
                    </div>
                ))}
            </div>
                </h2>
            </div>
            

        </StylePost>
        </>
    );
}
export default Mypost;