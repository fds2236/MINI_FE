import styled from "styled-components";
import { Link } from "react-router-dom";
import './Mypage.css';

const Box = styled.div`
    display: flex; 
    text-align: center; // 가운데 정렬
    justify-content: center; // 가운데 정렬
`;
const Container = styled.div`
    border: 1px solid black;
    border-radius:10px;
    width :50%;
    height: 150px;
    background: #fff;
    margin: 0 0 10px 20px;
    display: flex;    
`;

const Mypage = () => {
    return (
        <Box>
            <div>
                <Link to={"/"}><li className="li"><b>마이페이지</b></li></Link><br />
                <Link to={"/Modify"}><li className="li">개인 정보 수정</li></Link><br />
                <Link to={"/Like"}><li className="li">관심 상품</li></Link><br />
                <Link to={"/Content"}><li className="li">내 게시글 보기</li></Link><br />
            </div>
            <Container>
                <div className="user-img">😂
                </div>
                <div className="user">
                    <p>이름</p>
                    <p>이메일</p>
                    <button>프로필수정</button><button>작성한 글</button>
                </div>
            </Container>
        </Box>
    );
}
export default Mypage;