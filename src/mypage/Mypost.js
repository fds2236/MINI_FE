import Profile from "./Profile";
import React, { useEffect } from "react";
import styled from "styled-components";
import MiniApi from "../api/MiniApi";
import { useState } from "react";

const Contents = styled.div`
    width: 800px;
    margin: 20px auto;
    
`;

const StylePost = styled.div`
    width: 1000px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
`;

const CategoryDiv = styled.div`
    //border: 1px solid #EEEEEE;
    width: 340px;
    height: min-content;
    display: flex;
    padding: 10px;
    border-radius: 5px;
    //background-color: rgba(234,234,234,0.5);

    justify-content: center;

`;

const DetailDiv = styled.div `
    width:800px;

    box-sizing: border-box;
    border-top: 2px solid #EEEEEE;
    border-collapse: collapse;

    margin: 0 auto;
    
    
    align-items: center;
    text-align: left;
    display: grid;
    grid-template-columns: 2fr 5fr 2fr 1fr;
    grid-template-rows: 50px;
    
    &:hover {
        background-color: rgba(23,158,166,0.05);
    }
`;
const BigContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: 700;
`;
const Id = styled.div`
    font-size: 17px;
    font-weight: 400;
`;
const NowCategory = styled.div`
    font-size: 40px;
    font-weight: 700;
    color: rgb(23,158,166);

`;
const Content = styled.div`
    text-align: right;
    margin-left: 30px;
    display: flex;
 
`;

// 내 게시글 보기
const Mypost = () => {

    //const [id, setID] = useState("");
    const [mypost, setMypost] = useState("");
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    

    let whoLoginNow = window.localStorage.getItem("whoLoginNow");

    // API 호출
    useEffect(() => {
        const postData = async () => {
          
            try {
                const response = await MiniApi.mypostInfo(whoLoginNow); // 전부다 조회할때는 인자값으로 ALL
                console.log("수신 : ", response.data);
                setMypost(response.data);
            } catch (e) {  
                console.log(e + "실패 입니다");
            }
           
        };
        postData(); // 첫 페이지 로딩시 글 목록을 다 끌어옴

    }, []);
    
    const Onclickpost= (mypost) =>{
        window.localStorage.setMypost(whoLoginNow);
        window.location.replace('/Board');
    }
    

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
                <BigContainer>
                    <Contents >내 게시글 보기
                    {mypost && mypost.map(e => (
                        <DetailDiv>
                        <DetailDiv onClick={Onclickpost} key={e.id}>
                            <Id>{whoLoginNow}</Id>
                            <NowCategory>{e.CATEGORY}</NowCategory>
                            <Title>{e.TITLE}</Title>
                            <Content>{e.CONTENT}</Content>
                        </DetailDiv>
                        </DetailDiv>
                    ))}
                    </Contents>
                
                </BigContainer>
                
            </StylePost>
        </>
    );
}
export default Mypost;