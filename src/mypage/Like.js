import React from "react";
import styled from "styled-components";
import './Mypage.css';
import { useState, useEffect } from "react";
import Profile from "./Profile";
import MiniApi from "../api/MiniApi";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .itemContainer {
        width:680px;
        margin-bottom: 10px;
    }
    .title{
        font-weight: 700;
        font-size: x-large;
        border: none;
        border-bottom: solid rgb(0,173,181) 2px;
    }
`;

const DescBlcok = styled.div`
    text-align: left;
    width: 400px;
    line-height: 1.2em;
    .brand {
        font-size: large;
        font-weight: 600;
    }
`;

const ImageBox = styled.div`
    width: 280px;
    align-items: center;
    img {
        width: 250px;
    }
`;

const LikeItemBox = styled.div`
    border-bottom: 1px solid #eeeeee;
    display: flex;
    justify-content: center;
    align-items: center;
`;

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
                <div className = "itemContainer" >
                    <p className="title">관심 상품</p>
                    {like && like.map(e => (
                        <LikeItemBox key={e.id}>
                            {/* <p>{whoLoginNow}</p> */}
                            <ImageBox>
                                <img src={e.img1Path} alt="mainImage"/>
                            </ImageBox>
                            <DescBlcok>
                                <p className="brand">{e.brand}</p>
                                <p>{e.proName}</p>
                                <p>{e.proKorName}</p>
                                <p>{e.price}</p>
                            </DescBlcok>
                        </LikeItemBox>
                    ))}
                </div>
            </Container>
        </>
    );
}
export default Like;