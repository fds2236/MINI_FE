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
    display: flex;
    flex-direction: column;
`;

// 상단의 버튼들을 감싸는 스타일드 컴포넌트
const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 580px;
    align-items: center;
    margin: 20px auto;
`;


// 버튼 스타일드 컴포넌트
const Button = styled.button`
    background-color: rgb(0,173,181);
    border-style: none;
    border-radius: 10px;
    width: 100px;
    height: 30px;

    &:hover{
        background-color: rgba(0,173,181,0.5);
        color: black;
    }
`;

// 링크 스타일드 컴포넌트
const StyledLink = styled(Link)`
    color: rgb(238,238,238);
    text-decoration: none;

`;


// 게시물 목록을 감싸는 스타일드 컴포넌트
const Contents = styled.div`
    width: 580px;
    margin: 0 auto;
    background-color: #EEEEEE;
    
`;

const StyledContent = styled.div`
    width: 550px;
    border-radius: 10px;
    box-sizing: border-box;
    border-radius: 14px;
    border-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 16px;

   



   

`;


// 사진 스타일드 컴포넌트
const StyledPicture = styled.img`
    float: left;
    width: 70px;
    height: 70px;
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

    &:hover{
        background-color: rgba(253,44,8,0.5);
     
    }
`;





   

const MarginContent = styled.div`
display: flex;
flex-direction: column;
padding-top: 10px;


`;

// const StyledTitleContent = 

const CategoryDiv = styled.div`
    border: 1px solid #EEEEEE;
    width: 340px;
    display: flex;
    padding: 10px;
    border-radius: 10px;
    background-color: #EEEEEE;
    justify-content: space-between;

`;

const DetailDiv = styled.div `
    width: 550px;

    background-color: white;
    align-items: center;
    display: grid;
    grid-template-columns: 60px 75px 300px;
    grid-template-rows: 80px ;
    border-radius:10px;
    &:hover {
        background-color: rgb(250,250,250);
    }

`;

const TitleAndContent = styled.div`
    text-align: left;
    margin-left: 20px;

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

const OnClickOrangeRed = () => {
    let checkLogin = window.localStorage.getItem("whoLoginNow");

    if(checkLogin) window.location.replace('/WriteBoard');
    else {
        alert("로그인이 필요한 서비스 입니다");
        window.location.replace('/Login');
    }



    
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
    const [category, setCategory] = useState("전체게시판");

    // const isLogin = window.localStorage.getItem("isLogin");
    // if(isLogin === "FALSE") window.location.replace("/");
    // 로그인 페이지로 접속하게 하기

    useEffect(() => {
        const BoardData = async () => {
            setLoading(true);
            try {
                let response = null;
                if(category === "전체게시판") {response = await MiniApi.boardInfo('ALL');} // 전부다 조회할때는 인자값으로 ALL
                else if(category === "자유게시판") {response = await MiniApi.boardInfo('자유게시판');}
                else {response = await MiniApi.boardInfo('후기게시판');}
                
                setBoardInfo(response.data);
                console.log(response.data);
            } catch (e) {  
                console.log(e + "실패 입니다");
            }
            setLoading(false);
        };
        BoardData(); // 첫 페이지 로딩시 글 목록을 다 끌어옴

    }, [category]);


    if(loading) {
        return <Container><h1>Loading .... </h1></Container>
    }

    // 카테고리 값을 바꾸어 주는 컴포넌트 
    const handleCategorySelect = (e) => {
        console.log(e.target.value); // 카테고리 값이 잘 바뀌었는지 확인
        setCategory(e.target.value);
      };
  

    return (
        
        <Container>  
            <ButtonContainer>
                <Button><StyledLink to ='/' >돌아가기</StyledLink></Button>
                {/* 카테고리 선택 화면 */}
                
                
                <CategoryDiv>
                <div>
                <input
                    type="radio"
                    value="전체게시판"
                    checked = {category === "전체게시판"}
                    onChange = {handleCategorySelect}
                />
                <label>
                    전체게시판
                </label>
                </div>
                <div>
                <input
                    type="radio"
                    value="자유게시판"
                    checked = {category === "자유게시판"}
                    onChange = {handleCategorySelect}
                />
                <label>
                    자유게시판
                </label>
                </div>
                <div>
                <input
                    type="radio"
                    value="후기게시판"
                    checked = {category === "후기게시판"}
                    onChange = {handleCategorySelect}
                />
                <label>
                    후기게시판
                </label>
                </div>
                </CategoryDiv>

                <OrangeRedButton text="글쓰기"></OrangeRedButton>
                
            </ButtonContainer>
            

            <Contents>
               
            <MarginContent>
                
                {boardInfo && boardInfo.map(board => (
                   
                    
                    
                    <StyledContent onClick={() => OnclickBoard(board.boardNum)} >
                        <DetailDiv>
                        <p>{board.boardNum}</p>
                        <StyledPicture src="https://media.bunjang.co.kr/product/198502427_1_1662395621_w856.jpg"></StyledPicture>
                        <TitleAndContent >
                            <h4>{board.title}</h4>
                            {/* <p>{board.id}</p> */}
                            <p>{board.boardContent}</p>
                        </TitleAndContent>
                        </DetailDiv>
                        
                        
                    </StyledContent>
                    
                ))}
                &nbsp;
            </MarginContent>
        
            </Contents> 
                
        </Container>
        
    );
}

export default Boards;