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
// 더 큰 전체를 감싸는 컨테이너 스타일드 컴포넌트
const BigContainer = styled.div`
    width: 600px;
    margin: 50px auto;


    
`;

// 글 목록을 감싸는 스타일드 컴포넌트
const Contents = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 550px;
    height: fit-content;
    margin: 30px auto;
    margin-bottom: 0;
    background-color: white;
    

`;

// 제목 버튼 틀 스타일드 컴포넌트
const TitleAndBtn = styled.div`
    margin: 0 auto;
    display: flex;
    width: 600px;
    height: 50px;
    align-items: flex-end;
`;

// 리턴 버튼 스타일드 컴포넌트
const ReturnStyledButton = styled.button`
    background-color: #EEEEEE;
    border-style: none;
    border-radius: 10px;
    color: black;
    cursor: pointer;
    width: 138px;
    height: 30px;

    &:hover{
        background-color: rgba(0,0,0,0.2);
        color: black;
    }
`;

// 버튼 스타일드 컴포넌트
const Button = styled.button`
    background-color: rgb(0,173,181);
    border: 2px solid white;
    border-radius: 10px;
    width: 80px;
    height: 30px;
    color: white;
    margin: 10px auto;

    &:hover{
        background-color: rgba(0,173,181,0.5);
    }

    
`;

// 오렌지 버튼 스타일드 컴포넌트
const OrangeRedStyledButton = styled.button`
    background-color: orangered;
    border-style: none;
    border-radius: 10px;
    width: 100px;
    height: 30px;
    color: #EEEEEE;
    margin: 30px auto;
    float: right;

    &:hover{
        background-color: rgba(252,44,8,0.5);
    }
    

`;

// 사진 스타일드 컴포넌트
const StyledPicture = styled.img`

    width: 300px;
    height: 300px;
    margin: 8px 8px;
    border-radius: 3px;
`;

// 타이틀 에어리어 스타일 컴포넌트
const StyledTextArea = styled.textarea`
    width: 500px;
    height: 50px;
    border-style: none;
    border: 3px solid rgb(0,173,181);
    border-radius:10px;
    font-size: 18px;
`;

const StyledReplyArea = styled.div`
    margin: 100px auto;
    margin-bottom: 80px;
    display: flex;
    flex-direction: column;
   
    align-items: center;

    

`;

const StyledMyId = styled.div`
    
    width: 500px;

    font-size: 20px;
    font-weight: 700;
    margin: 10px;
    
    text-align: left;
    margin-top: 28px;

  
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







const Board = () => {

    // 페이지를 삭제하기 위한 현재 아이디 
    let whoLoginNow = window.localStorage.getItem('whoLoginNow');


    const nowBoardNum = window.localStorage.getItem("boardNum");
    const [boardDetail, setBoardDetail] = useState("");
    const [reply,setReply] = useState("");

    const onChangeReply = (e) => {
        setReply(e.target.value);
    }

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

    // 삭제하기 onClick 컴포넌트
    const OnClickDelete = async(boardNum, id) => {
        

        try {
            const stringBoardNum = String(boardNum);
            const response = await MiniApi.boardDelete(stringBoardNum,id);
            console.log(response.data);

            if(response.data.includes("NOK")) alert("작성자가 아닙니다. 목록으로 되돌아갑니다");
            else alert("삭제가 완료 되었습니다. 목록으로 되돌아 갑니다");
            window.location.replace('/Boards');
        } catch (e) {
            console.log("오류" + e);
            alert("오류" + e);
        }
    }

    return(

        <>
            <TitleAndBtn>
                <ReturnButton text={"목록으로 돌아가기"}></ReturnButton>
            </TitleAndBtn>

        {boardDetail && boardDetail.map(board => (
            <BigContainer>
            <Container>   
            <Contents>
                &nbsp;
                    
                    <h1>{board.title}</h1>
                    <StyledPicture src="https://media.bunjang.co.kr/product/198502427_1_1662395621_w856.jpg"></StyledPicture>
                         
                    <h3>{board.boardContent}</h3>
                    
                   
                    
                &nbsp;
            </Contents>
            <p>작성일 : {board.boardDate} <br></br> 작성자 : {board.id}</p>
            <OrangeRedStyledButton onClick={() => OnClickDelete(board.boardNum, whoLoginNow)} >삭제하기</OrangeRedStyledButton>
            
            








            </Container>

            <StyledReplyArea>
                <StyledMyId>{whoLoginNow}</StyledMyId>
                <StyledTextArea 
                            placeholder="댓글을 입력 하세요 ....."
                            value={reply}
                            onChange={onChangeReply}
                        >
                </StyledTextArea>
                <Button>댓글 등록</Button>
            </StyledReplyArea>
            
            
            </BigContainer>
            
        ))}    

        

        </>
    );
}

export default Board;