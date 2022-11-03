import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Board from "./writeBoard";
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import MiniApi from "../api/MiniApi";
import axios from "axios";

/**
 * ------------------------------스타일드 컴포넌트 ---------------------------
 */

// 전체를 감싸는 컨테이너 스타일드 컴포넌트
const Container = styled.div`
    width: 600px;
    margin: 50px auto;
`;

// 상단의 버튼들을 감싸는 스타일드 컴포넌트
const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 480px;
    margin: 0 auto;
`;


// 버튼 스타일드 컴포넌트
const Button = styled.button`
    background-color: rgb(0,173,181);
    border-style: none;
    border-radius: 10px;
    width: 100px;
    height: 30px;
`;

// 링크 스타일드 컴포넌트
const StyledLink = styled(Link)`
    color: rgb(238,238,238);
    text-decoration: none;

`;


// 게시물 목록을 감싸는 스타일드 컴포넌트
const Contents = styled.div`
    width: 600px;
    margin: 30px auto;
    background-color: #EEEEEE;
`;

const StyledContent = styled.button`
    background-color: white;
    border-radius: 14px;
    border-style: none;
    width: 100%;
`;


// 사진 스타일드 컴포넌트
const StyledPicture = styled.img`
    float: left;
    width: 130px;
    height: 100px;
    margin: 8px 8px;
`;


// 온클릭 컨텐트 (상세페이지로 이동)
const OnclickWriteBoard = () =>{
    window.location.replace('/Board');
}

// 레드버튼 스타일드 컴포넌트
const OrangeRedStyledButton = styled.button`
    background-color: orangered;
    border-style: none;
    border-radius: 10px;
    width: 100px;
    height: 30px;
    color: #EEEEEE;
    cursor: pointer;
`;

const OnClickOrangeRed = () => {
    window.location.replace('/WriteBoard')
}
   

const MarginContent = styled.div`
    margin: 4px 16px;

    
`;


/**
 * --------------------------------- 컴포넌트 -----------------------------------
 */

// 사진 컴포넌트
const Picture = ({pic}) => {
    return (
        <>
            <StyledPicture>
            {/*  */}
            </StyledPicture>
        </>
    );
}

const OrangeRedButton = (props) => {
    return (
        <>
            <OrangeRedStyledButton onClick={OnClickOrangeRed}>{props.text}</OrangeRedStyledButton>
        </>
    );
}



// 게시물 
const Content = (props) => {
    return (
        <>  
            <MarginContent>
            <StyledContent onClick={OnclickWriteBoard} >
                <Picture>
                    
                </Picture>
                <h1>{props.title}</h1>
                
            </StyledContent>
            </MarginContent>
        </>
    );
}

// 제목
const Title = (props) => {
    return (
        <>
        
        </>
    );
}




const Boards = () => {
    const [boardInfo, setBoardInfo] = useState('');
    const [loading, setLoading] = useState(false);
    // const isLogin = window.localStorage.getItem("isLogin");
    // if(isLogin === "FALSE") window.location.replace("/");

    useEffect(() => {
        const BoardData = async () => {
            setLoading(true);
            try {
                const response = await MiniApi.boardInfo();
                setBoardInfo(response.data);
                console.log(response.data);
            } catch (e) {  
                console.log(e + "실패 입니다");
            }
            setLoading(false);
        };
        BoardData(); // 첫 페이지 로딩시 글 목록을 다 끌어옴

    }, []);

    if(loading) {
        return <Content>대기 중...</Content>
    }

  

    return (
        
        <Container>  
            <ButtonContainer>
                <Button><StyledLink to ='/' >돌아가기</StyledLink></Button>
                <Button><StyledLink to ='/' >자유게시판</StyledLink></Button>
                <Button><StyledLink to ='/' >후기게시판</StyledLink></Button>
                <OrangeRedButton text="글쓰기"></OrangeRedButton>
            </ButtonContainer>
            <h1>테스트 문자열 
                {/* {boardInfo && boardInfo.map(board => (
                    <tr key={board.docNum}>
                        <td>{board.docNum}</td><td>{board.title}</td><td>{board.boardContent}</td><td>{board.id}</td>
                    </tr>
                ))} */}
         
            </h1>

            {/* &nbsp;를 사용하여 의도적으로 공백을 넣음. 글이 아무것도 없을때 대비 */}
            <Contents>
                &nbsp;
                <Content title={boardInfo.title}></Content>
                <Content></Content>
                <Content></Content>
                
                &nbsp;
            </Contents> 
                
        </Container>
        
    );
}

export default Boards;