import React from "react";
import styled from "styled-components";
import './Mypage.css';
import { useState, useEffect } from "react";
import Profile from "./Profile";
import MiniApi from "../api/MiniApi";

const Container = styled.div`
    margin-bottom: 100px;
    b{
        font-size: 1.6em;
        text-align: left;
    }
    div{
        height: 180px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .imageBox {
        width: 280px;
        display: flex;
        align-items: center;
        border-right: 2px solid rgb(0,173,181);
    }
    img{
        width: 250px;
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
    }, []);


    return (
        <>
            <Profile/>
            <hr></hr>                    
            <Container>
                <br/>
                <b>관심 상품</b>
                {like && like.map(e => (
                    <div key={e.id}>
                        {/* <p>{whoLoginNow}</p> */}
                        <div className="imageBox">
                            <img src={e.img1Path} alt="mainImage"/>
                        </div>
                        <p>{e.brand}</p>
                        <p>{e.proName}</p>
                        <p>{e.proKorName}</p>
                    </div>
                ))}
            </Container>
        </>
    );
}
export default Like;