import styled from "styled-components";
import { Link} from "react-router-dom";
import './Mypage.css';
import { useState } from "react";
import MiniApi from "../api/MiniApi";

const Box = styled.div`
    /* display: flex; 
    text-align: center; // 가운데 정렬
    justify-content: center; // 가운데 정렬 */

    .side{
        margin-left: 30px;
        list-style: none;
        float: left;
    }
`;
const Container = styled.div`
    border: 1px solid black;
    border-radius:10px;
    width :50%;
    height: 150px;
    background: #fff;
    margin: 0 0 10px 30px;
    display: flex;    
    margin-left: 200px;
justify-content: center; // 가운데 정렬
text-align: center; // 가운데 정렬
`;

const Profile = () => {
    // const [CastToggle, setCastToggle] = useState(false)

    // const toggleCastView = () => {
    //     setCastToggle(!CastToggle)
    // }

    // API호출(이메일)
    // const onClickProf = async() => {
    //     try{
    //         const res = await MiniApi.userEmail()
    //     }
    // }


    let whoLoginNow = window.localStorage.getItem("whoLoginNow");
    let callEmail = window.localStorage.getItem("callEmail");
    
    return (

        <Box>
            <div className="side">
                <Link to={"/Mypage"}><li className="li"><b>마이페이지</b></li></Link><br />
                <Link to={"/Modify"}><li className="li">개인 정보 수정</li></Link><br />
                <Link to={"/Like"}><li className="li">관심 상품</li></Link><br />
                <Link to={"/Mypost"}><li className="li">내 게시글 보기</li></Link><br />
            </div>
            <Container>
                <div className="user-img">😂
                </div>
                <div className="user">
                    <p>이름 : {whoLoginNow}</p>
                    <p>이메일 : </p>
                </div>
            </Container>
            
        </Box>
    )
};
export default Profile;