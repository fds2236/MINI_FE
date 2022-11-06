import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import MiniApi from "../api/MiniApi";

/**
 * ------------------------------스타일드 컴포넌트 ---------------------------
 */


// 전체를 감싸는 컨테이너 스타일드 컴포넌트
const Container = styled.div`
    width: 600px;
    margin: 50px auto;
    background-color: #EEEEEE;
    border: 1px solid #EEEEEE;
`;

// 글 목록을 감싸는 스타일드 컴포넌트
const Contents = styled.div`
    width: 550px;
    height: fit-content;
    margin: 30px auto;
    background-color: white;
    

`;

// 제목 버튼 틀 스타일드 컴포넌트
const TitleAndBtn = styled.div`
    margin: 50px auto;
    width: 600px;
    display: flex;
    height: 90px;
    justify-content: space-between;

`;

// 리턴 버튼 스타일드 컴포넌트
const ReturnStyledButton = styled.button`
    background-color: #EEEEEE;
    border-style: none;
    border-radius: 10px;
    color: gray;
    cursor: pointer;
    border: 1px solid black;
    height: 30px;
`;

// 버튼 스타일드 컴포넌트
const Button = styled.button`
    background-color: rgb(0,173,181);
    border-style: none;
    border-radius: 10px;
    width: 130px;
    height: 30px;
`;

// 오렌지 버튼 스타일드 컴포넌트
const OrangeRedStyledButton = styled.button`
    background-color: orangered;
    border-style: none;
    border-radius: 10px;
    width: 100px;
    height: 30px;
    color: #EEEEEE;
    margin-bottom: 100px;
`;



/**
 * --------------------------------- 컴포넌트 -----------------------------------
 */


//리턴 버튼 컴포넌트
const ReturnButton = (props) => {
    return (
        <>
            <ReturnStyledButton onClick={OnClickToList} >{props.text}</ReturnStyledButton>
        </>
    );
}

//목록으로 돌아가는 onClick 컴포넌트
const OnClickToList = () => {   
    window.location.replace('/Boards');
}

// 삭제하기 onClick 컴포넌트
// const OnClickDelete = async() => {
//     try {
//         console.log(nowBoardNum);
//         const response = await MiniApi.boardInfo(nowBoardNum);
//         setBoardDetail(response.data);
//         console.log(response.data)
//     } catch (e) {
//         console.log(e);
//     }
// }





const Board = () => {


    const nowBoardNum = window.localStorage.getItem("boardNum");
    const [boardDetail, setBoardDetail] = useState("");

    useEffect(() => {
        const boardData = async () => {

            try {
                console.log(nowBoardNum);
                const response = await MiniApi.boardInfo(nowBoardNum);
                setBoardDetail(response.data);
                console.log(response.data)
            } catch (e) {
                console.log(e);
            }
        };
        boardData();
    }, []);

    return(

        <>
            <TitleAndBtn>
            {/* <Title text={"글 제목"}></Title> */}
            <ReturnButton text={"목록으로 돌아가기"}></ReturnButton>
            </TitleAndBtn>

        {boardDetail && boardDetail.map(board => (
            <>
            <Container>   
            <Contents>
                &nbsp;
                    
                    <h1>{board.title}</h1>
                         
                    <h3>{board.boardContent}</h3>
                    <p>작성일 : {board.boardDate} <br></br> 작성자 : {board.id}</p>
                    
                    
                &nbsp;
            </Contents>
            </Container>
            <OrangeRedStyledButton >삭제하기</OrangeRedStyledButton>
            </>
            
        ))}    

        

        </>
    );
}

export default Board;