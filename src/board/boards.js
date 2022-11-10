import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Board from "./writeBoard";
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import MiniApi from "../api/MiniApi";
import axios from "axios";
import Modal from "../util/Modal";

/**
 * ------------------------------스타일드 컴포넌트 ---------------------------
 */



// 전체를 감싸는 컨테이너 스타일드 컴포넌트
const Container = styled.div`
    width: 1000px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
   
`;

// 상단의 버튼들을 감싸는 스타일드 컴포넌트
const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 800px;
    align-items: center;
    margin: 20px auto;
    border-bottom: 2px solid rgb(23,158,166);
    padding-bottom: 20px;
`;


// 버튼 스타일드 컴포넌트
const Button = styled.button`
    
    background-color: #eeeeee;
    font-weight: 600;
    border-style: none;
    border-radius: 10px;
    width: 100px;
    height: 30px;
    color: rgb(26,30,37);

    &:hover{
        opacity: 0.5;
    }
`;

// 링크 스타일드 컴포넌트
const StyledLink = styled(Link)`
    

`;


// 게시물 목록을 감싸는 스타일드 컴포넌트
const Contents = styled.div`
    width: 800px;
    margin: 20px auto;
    
`;

const StyledContent = styled.div`
    width: 800px;
    &:hover{
        cursor: pointer;
    }

`;


// 사진 스타일드 컴포넌트
const StyledPicture = styled.img`
    float: left;
    width: 80px;
    height: 80px;
    margin: 10px 15px;
    border-radius: 2px;
`;


// 레드버튼 스타일드 컴포넌트
const OrangeRedStyledButton = styled.button`

    background-color: rgb(0,173,181); 
    border-style: none;
    border-radius: 10px;
    width: 100px;
    height: 30px;
    color: #eeeeee;
    cursor: pointer;

    &:hover{
        opacity: 0.5;
        cursor: pointer;
     
    }
`;


const BoardButton = styled.div`

    //background-color: rgb(26,30,37);
    color: rgb(26,30,37);
    padding: 2px;
    width: 130px;
    height: 30px;
    font-weight: 700;

    &:hover{
        opacity: 0.5;
        cursor: pointer;
    }
    
`;

const SelectedBoardButton = styled.div`

    //background-color: rgb(26,30,37);
    color: rgb(26,30,37);
    padding: 2px;
    width: 130px;
    height: 30px;
    font-weight: 700;

    opacity: 0.5;
    &:hover{
        cursor: pointer;

    }
    
`;





   

const MarginContent = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid #EEEEEE;
    /* padding-top: 10px;
    padding-bottom: 10px; */




`;

// const StyledTitleContent = 

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

const TitleAndContent = styled.div`
    text-align: right;
    margin-left: 30px;
    display: flex;
 
`;

const StyledBoardNum = styled.div`
    margin: 0 10px;
    color: rgb(21,158,166);
    font-weight: 700;
    display: flex;
    align-items: center;
`;

const BigContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const NowCategory = styled.div`
    font-size: 40px;
    font-weight: 700;
    color: rgb(23,158,166);

`;

const Title = styled.div`
    font-size: 20px;
    font-weight: 700;
`;

const Id = styled.div`
    font-size: 17px;
    font-weight: 400;
`;

const WriteDate = styled.div`
    font-size: 17px;
    font-weight: 400;
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





// 온클릭 컨텐트 (상세페이지로 이동)
const OnclickBoard = (boardNum) =>{
    window.localStorage.setItem('boardNum',boardNum);
    window.location.replace('/Board');
}

const OnClickReturn = () => {
    window.location.replace('/');
}


/**
 * --------------------------------- Boards 컴포넌트 시작 -------------------------------------------
 */


const Boards = () => {

    const [boardInfo, setBoardInfo] = useState('');
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState("전체게시판");
    const [modalOpen, setModalOpen] = useState(false);

    // const isLogin = window.localStorage.getItem("isLogin");
    // if(isLogin === "FALSE") window.location.replace("/");
    // 로그인 페이지로 접속하게 하기


    const closeModal = () => {
        setModalOpen(false);
        window.location.replace('/Login');
    }


    const OnClickOrangeRed = () => {
        let checkLogin = window.localStorage.getItem("whoLoginNow");

        if(checkLogin) window.location.replace('/WriteBoard');
        else {
            setModalOpen(true);
        } 
    }

    const OrangeRedButton = (props) => {
        return (
            <>
                <OrangeRedStyledButton onClick={OnClickOrangeRed}>{props.text}</OrangeRedStyledButton>
            </>
        );
    }

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
        <BigContainer>  
        
            <Container>  
                <NowCategory>{category}</NowCategory>
                
                <ButtonContainer>
                    <Button onClick={OnClickReturn}>돌아가기</Button>

                    {/* 카테고리 선택 화면 */}
                    
                    
                    <CategoryDiv>
                    {
                        (category === "전체게시판") ? 
                        <SelectedBoardButton onClick={()=>setCategory("전체게시판")} >전체게시판</SelectedBoardButton> : 
                        <BoardButton onClick={()=>setCategory("전체게시판")} >전체게시판</BoardButton>
                    }
                    {
                        (category === "자유게시판") ?
                        <SelectedBoardButton onClick={()=>setCategory("자유게시판")} style={{
                            borderLeft: "2px solid rgb(23,158,166)",
                            borderRight: "2px solid rgb(23,158,166)"
                        }} >자유게시판</SelectedBoardButton> : 
                        <BoardButton onClick={()=>setCategory("자유게시판")} style={{
                            borderLeft: "2px solid rgb(23,158,166)",
                            borderRight: "2px solid rgb(23,158,166)"
                        }} >자유게시판</BoardButton>
                    }
                    
                    {
                        (category === "후기게시판") ? 
                        <SelectedBoardButton onClick={()=>setCategory("후기게시판")} >후기게시판</SelectedBoardButton> : 
                        <BoardButton onClick={()=>setCategory("후기게시판")} >후기게시판</BoardButton>
                    }

                    </CategoryDiv>

                    <OrangeRedButton text="글쓰기"></OrangeRedButton>
                    
                    
                </ButtonContainer>
                

                <Contents>
                
                <MarginContent>
                    
                    {boardInfo && boardInfo.map(board => (
                    
                        
                        
                        <StyledContent onClick={() => OnclickBoard(board.boardNum)} >
                            <DetailDiv>
                                <StyledBoardNum>{board.category ? "후기게시판" : "자유게시판"} &gt; {board.boardNum}</StyledBoardNum>
                                {/* <StyledPicture src="https://media.bunjang.co.kr/product/198502427_1_1662395621_w856.jpg"></StyledPicture> */}
                                <Title>{board.title}</Title>
                           
                                <Id>{board.id}</Id>
                                <WriteDate>{board.boardDate}</WriteDate>

                           
                            </DetailDiv>
                            
                        </StyledContent>
                        
                    ))}

                </MarginContent>
            
                </Contents> 
                
                    
            </Container>


        {modalOpen && <Modal open={modalOpen} close={closeModal} header="확인">로그인이 필요한 서비스 입니다</Modal>}
        </BigContainer>
        
        
    );
}

export default Boards;