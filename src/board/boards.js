import { Link } from "react-router-dom";
import styled from "styled-components";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

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
    width: 400px;
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


// 게시물 
const Content = () => {
    return (
        <>  
            <MarginContent>
            <StyledContent>
                <Picture>
                    
                </Picture>
                
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
    return (

        <Container>  
            <ButtonContainer>
                <Button><StyledLink to ='/' >Back To Home</StyledLink></Button>
                <Button><StyledLink to ='/' >자유게시판</StyledLink></Button>
                <Button><StyledLink to ='/' >후기게시판</StyledLink></Button>
            </ButtonContainer>

            {/* &nbsp;를 사용하여 의도적으로 공백을 넣음. 글이 아무것도 없을때 대비 */}
            <Contents>
                &nbsp;
                <Content></Content>
                <Content></Content>
                <Content></Content>
                &nbsp;
            </Contents> 
                
        </Container>
        
    );
}

export default Boards;