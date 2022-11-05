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

const StyledContent = styled.div`
    background-color: white;
    border-radius: 14px;
    border-style: none;
    width: 100%;
    display: flex;
    justify-content:flex-start;
`;


// 사진 스타일드 컴포넌트
const StyledPicture = styled.img`
    float: left;
    width: 90px;
    height: 90px;
    margin: 8px 8px;
    border-radius: 5px;
`;


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









   

const MarginContent = styled.div`
    margin: 4px 16px;  
`;

// const StyledTitleContent = 













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

const OnClickOrangeRed = () => {
    window.location.replace('/WriteBoard')
}


// 온클릭 컨텐트 (상세페이지로 이동)
const OnclickBoard = (boardNum) =>{
    window.localStorage.setItem('boardNum',boardNum);
    window.location.replace('/Board');
}


/**
 * --------------------------------- Boards 컴포넌트 시작 -------------------------------------------
 */


const Boards = () => {

    const [boardInfo, setBoardInfo] = useState('');
    const [loading, setLoading] = useState(false);

    // const isLogin = window.localStorage.getItem("isLogin");
    // if(isLogin === "FALSE") window.location.replace("/");
    // 로그인 페이지로 접속하게 하기

    useEffect(() => {
        const BoardData = async () => {
            setLoading(true);
            try {
                const response = await MiniApi.boardInfo('ALL'); // 전부다 조회할때는 인자값으로 ALL
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
        return <Container><h1>Loading .... </h1></Container>
    }
  

    return (
        
        <Container>  
            <ButtonContainer>
                <Button><StyledLink to ='/' >돌아가기</StyledLink></Button>
                <Button><StyledLink to ='/' >자유게시판</StyledLink></Button>
                <Button><StyledLink to ='/' >후기게시판</StyledLink></Button>
                <OrangeRedButton text="글쓰기"></OrangeRedButton>
            </ButtonContainer>
            

            {/* &nbsp;를 사용하여 의도적으로 공백을 넣음. 글이 아무것도 없을때 대비 */}
            <Contents>
                &nbsp;
                
                {boardInfo && boardInfo.map(board => (
                   
                    
                    <MarginContent>
                    <StyledContent onClick={() => OnclickBoard(board.boardNum)} >
                        <p>{board.boardNum}</p>
                        <StyledPicture src="https://media.bunjang.co.kr/product/198502427_1_1662395621_w856.jpg"></StyledPicture>
                        <div >
                            <h2>{board.title}</h2>
                            {/* <p>{board.id}</p> */}
                            <p>{board.boardContent}</p>
                        </div>
                        
                        
                    </StyledContent>
                    </MarginContent>
                ))}
                
                
                &nbsp;
            </Contents> 
                
        </Container>
        
    );
}

export default Boards;