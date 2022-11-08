import React from "react";
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

// API 통신
const Like = () => {

    let whoLoginNow = window.localStorage.getItem("whoLoginNow");

    const [like, setLike] = useState('');
    const [proCode, setProCode] = useState('');
    const [Like_cnt, setLike_cnt] = useState('');


    useEffect(() => {
        console.log("관심상품 보기 컴포넌트!");
        const likePro = async() => {
            try {
            const response = await MiniApi.likeInfo(whoLoginNow, proCode, Like_cnt);
             setLike(response.data);
             //console.log('성공')
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
        <Container>
            <br/>
            <h2>관심 상품
            {like && like.map(e => (
                <div key={e.id}>
                    <p>{whoLoginNow}</p>
                    <p>{e.proCode}</p>
                    <p>{e.Like_cnt}</p>
                </div>
            ))}  
            </h2>

           
        </Container>
        </>
    );
}
export default Like;