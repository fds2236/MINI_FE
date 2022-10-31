import { Link } from "react-router-dom";
import styled from "styled-components";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useState } from "react";


/**
 * --------------------------- 스타일드 컴포넌트 ------------------------
 */

// ---- [글쓰기 틀 관련] ----

// 전체를 감싸는 컨테이너 스타일드 컴포넌트
const Container = styled.div`
    width: 600px;
    margin: 50px auto;
`;

// 글쓰기 목록을 감싸는 스타일드 컴포넌트
const Contents = styled.div`
    width: 600px;
    margin: 30px auto;
    background-color: #EEEEEE;
    display: flex;
    flex-direction: column;
`;

// 텍스트 에리어의 마진을 주기 위한 스타일드 컴포넌트
const MarginContent = styled.div`
    margin: 4px 16px;
`;





// ---- [버튼관련] ----


// 상단의 버튼들을 감싸는 스타일드 컴포넌트
const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 400px;
    margin: 0 auto;
`;



// 버튼 스타일드 컴포넌트
const StyledButton = styled.button`
    background-color: rgb(0,173,181);
    border-style: none;
    border-radius: 10px;
    width: 100px;
    height: 30px;
    color: #EEEEEE;
`;

// 레드버튼 스타일드 컴포넌트
const OrangeRedStyledButton = styled.button`
    background-color: orangered;
    border-style: none;
    border-radius: 10px;
    width: 100px;
    height: 30px;
    color: #EEEEEE;
`;

// 리턴 버튼 스타일드 컴포넌트
const ReturnStyledButton = styled.button`
    background-color: #EEEEEE;
    border-style: none;
    border-radius: 10px;
    width: 130px;
    height: 30px;
    color: gray;
    cursor: pointer;
    
`;





// ---- [텍스트 에리어 관련] ----


// 스타일드 텍스트 에리어
const StyledTextArea = styled.textarea`
    width: 550px;
    height: 500px;
    margin: 22px auto;
    border-style: none;
    font-size: 20px;

    
`;

// 타이틀 에어리어 스타일 컴포넌트
const StyledTitleArea = styled.textarea`
    width: 550px;
    height: 50px;
    margin: 0 auto;
    margin-top: 10px;
    border-style: none;
    font-size: 20px;

   


`;






/**
 * ------------------------------- 컴포넌트 --------------------------------
 */

// 버튼 컴포넌트
const Button = (props) => {
    return (
        <>
            <StyledButton>{props.text}</StyledButton>
        </>
    );
}

// 레드버튼 컴포넌트
const OrangeRedButton = (props) => {
    return (
        <>
            <OrangeRedStyledButton>{props.text}</OrangeRedStyledButton>
        </>
    );
}

// 리턴 버튼 컴포넌트
const ReturnButton = (props) => {

    return (
        <>
            <ReturnStyledButton onClick={OnClickToList} >{props.text}</ReturnStyledButton>
        </>
    );
}

// 제목쓰기 컴포넌트
const TitleArea = () => {

    const [TitleValue, setTitleValue] = useState("");
    const onChange= (event) => {
		const v = event.target.value
		setTitleValue(v)
	}

    return (
        <>
            <StyledTitleArea 
                placeholder="제목을 입력 하세요 ....."
                value={TitleValue}
                onChange={onChange}
            ></StyledTitleArea>
        </>
    );
} 



// 글쓰기 컴포넌트
const TextArea = () => {

    const [textValue, setTextValue] = useState("");
    const onChange= (event) => {
		const v = event.target.value
		setTextValue(v)
	}

    return (
        <>
            <StyledTextArea 
                placeholder="본문 내용을 입력 하세요 ....."
                value={textValue}
                onChange={onChange}
            ></StyledTextArea>
        </>
    );
}

// 목록으로 돌아가는 onClick
const OnClickToList = () => {   
    window.location.replace('/Boards');
}


    
    
   


const WriteBoard = () => {
    return(
        <Container>  
            <ButtonContainer>
                <ReturnButton text={"목록으로 돌아가기"}></ReturnButton>
                <Button text={"자유게시판"}></Button>
                <Button text={"후기게시판"}></Button>
            </ButtonContainer>

            {/* &nbsp;를 사용하여 의도적으로 공백을 넣음. 글이 아무것도 없을때 대비 */}
            <Contents>
                &nbsp;
                    <TitleArea></TitleArea>
                    <TextArea></TextArea>
                &nbsp;  
            </Contents> 

            <OrangeRedButton text={"글쓰기"}></OrangeRedButton>
                
        </Container>
    );
}

export default WriteBoard;