import { Link } from "react-router-dom";
import styled from "styled-components";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useState } from "react";
import MiniApi from "../api/MiniApi";


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
    align-items: center;
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

    &:hover{
        background-color: rgba(253,44,8,0.5);

    }
`;

// 리턴 버튼 스타일드 컴포넌트
const ReturnStyledButton = styled.button`
    background-color: orangered;
    border-style: none;
    border-radius: 10px;
    width: 130px;
    height: 30px;
    color: #EEEEEE;
    cursor: pointer;

    &:hover{
        background-color: rgba(253,44,8,0.5);

    }
    
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
    margin-top: 20px;
    border-style: none;
    font-size: 20px;
`;

const CategoryDiv = styled.div`
    border: 1px solid #EEEEEE;
    width: 200px;
    display: flex;
    padding: 10px;
    border-radius: 10px;
    background-color: #EEEEEE;
    justify-content: space-between;

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



// 리턴 버튼 컴포넌트
const ReturnButton = (props) => {
    

    return (
        <>
            <ReturnStyledButton onClick={OnClickToList} >{props.text}</ReturnStyledButton>
        </>
    );
}




// 목록으로 돌아가는 onClick
const OnClickToList = () => {   
    window.location.replace('/Boards');
}



const WriteBoard = () => {
    const [id, setId] = useState('');
    const [boardNum, setBoardNum] = useState('');
    const [category, setCategory] = useState("0");
    const [title, setTitle] = useState('');
    const [boardContent, setBoardContent] = useState('');
    const [submit, setSubmit] = useState(false); // 서버로 전송할 수 있는 조건 체크
    const [resData, setResData] = useState(''); // 서버에서 받는 결과 데이터

    // 이벤트 체크 함수 만들기
    const onChangeId = (e) => setId(e.target.value); // 현재 이벤트가 발생한 입력창의 값을 useState에 세팅
    const onChangeBoardNum = (e) => setBoardNum(e.target.value);
    const onChangeCategory = (e) => setCategory(e.target.value);
    const onChangeTitle = (e) => {
        console.log("title : " + e.target.value);
        setTitle(e.target.value);
        isSubmit();
    }
    const onChangeBoardContent = (e) => {
        console.log("boardContent : " + e.target.value);
        setBoardContent(e.target.value);
        isSubmit();
    }
    
    // 레드버튼 컴포넌트
    const SubmitButton = (props) => {
        setId(window.localStorage.getItem("whoLoginNow"));
        console.log("now ID : "+id);
        return (
            <>
                <OrangeRedStyledButton onClick={onSubmit} >{props.text}</OrangeRedStyledButton>
            </>
        );
    }
    
    // 서버에게 회원 가입 정보를 전송할지에 대한 여부 판단 ( 다 있으면 submit이 true);
    const isSubmit = () => {
        if(boardContent && title && category) setSubmit(true);
    }

    // 전송 버튼이 눌려지면 동작하는 함수, 함수가 비동기 통신을 해야 하므로 async 키워드 추가
    const onSubmit = async () => {
        try {
            const res =  await MiniApi.boardReg(category, title, boardContent,id);
            setResData(res.data);
            window.location.replace("/Boards");

        } catch (e) {
            alert("오류 : " + e);
        }
    }

    // 카테고리 값을 바꾸어 주는 컴포넌트 
    const handleCategorySelect = (e) => {
        console.log(e.target.value); // 카테고리 값이 잘 바뀌었는지 확인
        setCategory(e.target.value);
        isSubmit();
      };

    return (
        <Container>  
            <ButtonContainer>
                <ReturnButton text={"목록으로 돌아가기"}></ReturnButton>

                {/* 카테고리 선택 화면 */}
                <CategoryDiv>
                <div>
                <input
                    type="radio"
                    value="0"
                    checked = {category === "0"}
                    onChange = {handleCategorySelect}
                
                />
                <label>
                    자유게시판
                </label>
                </div>
                <div>
                <input
                    type="radio"
                    value="1"
                    checked = {category === "1"}
                    onChange = {handleCategorySelect}
                />
                <label>
                    후기게시판
                </label>
                </div>
                </CategoryDiv>
                
            </ButtonContainer>

            <Contents>
                    {/* 제목 입력 칸 */}
                    <StyledTitleArea 
                        placeholder="제목을 입력 하세요 ....."
                        value={title}
                        onChange={onChangeTitle}
                    >
                    </StyledTitleArea>
                    {/* 본문 입력 칸 */}
                    <StyledTextArea 
                        placeholder="본문 내용을 입력 하세요 ....."
                        value={boardContent}
                        onChange={onChangeBoardContent}
                    ></StyledTextArea>
            </Contents>            
            {submit && <SubmitButton text={"글쓰기"}></SubmitButton>}
        </Container>
    );
};


export default WriteBoard;