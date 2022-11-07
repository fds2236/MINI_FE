import styled from "styled-components";
import './Mypage.css';
import { useState, useEffect } from "react";
import Profile from "./Profile";
import MiniApi from "../api/MiniApi";

const Container = styled.div`
        
        /* text-align: center; // 가운데 정렬 */
        /* justify-content: center; // 가운데 정렬 */
    div{
        border-radius:10px;
        /* width :50%; */
        height: 150px;
        background: #fff;
        margin: 0 0 10px 20px;
        display: inline-block;
        margin-bottom: 200px;
    }
    .grid{
        /* flex-wrap: wrap; */
        
    }
    .grid-item{
        /* display: inline-grid; */
        border: 1px solid black;
        /* grid-template-columns: 200px 200px 200px 200px; */
        /* grid-template-rows: 200px; */
        
    }
    .dataimg{
        width: 200px;
        height: 150px;
        object-fit: contain;
    }
`
const Like = () => {
    const [like, setLike] = useState('ALL');

    useEffect(() => {
        console.log("관심상품 보기 컴포넌트!");
        const likePro = async() => {
            try {
            const response = await MiniApi.LikeInfo(like);
            setLike(response.data);
            } catch (e) {
                console.log(e);
            }
        };
        likePro();
    });


    return (
        <>
        <Profile/>
        <hr></hr>                    
        {/* <Container>
            <br/>
            <h2>관심 상품</h2>
            <div className="grid">
                <div className="grid-item">
                    <img class = "dataimg" src ="/img/NB_574.png" alt="이미지"/>
                    <p>상품명 : </p>
                    <p>가격 : </p>
                    <p>아무거나</p>
                </div>
            </div>
        </Container> */}
        </>
    );
}
export default Like;