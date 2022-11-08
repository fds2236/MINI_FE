import Profile from "./Profile";
import React, { useEffect } from "react";
import styled from "styled-components";
import MiniApi from "../api/MiniApi";
import { useState } from "react";

const StylePost = styled.div`
    .post {
        width: 500px;
        height: 300px;
        border: 1px solid black;
    }
    
`;

// 내 게시글 보기
const Mypost = () => {

    //const [id, setID] = useState("");
    const [mypost, setMypost] = useState();
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    

    let whoLoginNow = window.localStorage.getItem("whoLoginNow");

    // API 호출
    useEffect(() => {
        const postData = async () => {
          
            try {
            
                let response = await MiniApi.mypostInfo(whoLoginNow); // 전부다 조회할때는 인자값으로 ALL
                console.log(response.data);
                setMypost(response.data);
            } catch (e) {  
                console.log(e + "실패 입니다");
            }
           
        };
        postData(); // 첫 페이지 로딩시 글 목록을 다 끌어옴

    }, []);
    
//     const onClick = async (whoLoginNow) => {
//     try {
//         const cmd = await MiniApi.mypostInfo(whoLoginNow, category, title, content);
//         setMypost(cmd.data);
//         // alert("불러오기 완료")
//     } catch (e) {
//         console.log(e);
//         // alert("오류 : " + e);
//     }
// };
    
    return(
        <>
            <Profile/>
            <hr></hr>                    
            <StylePost>
                <br/>
                <div>
                    <h2 >내 게시글 보기
                    {mypost && mypost.map(e => (
                        <div className="post">
                    
                        <div key={e.id}>
                            <p>1{whoLoginNow}</p>
                            <p>2{e.category}</p>
                            <p>3{e.title}</p>
                            <p>4{e.content}</p>
                        </div>

                        </div>
                    ))}
                
                    </h2>
                </div>
            </StylePost>
        </>
    );
}
export default Mypost;