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
        margin-bottom: 50px;
    }
    .title{
        margin-top: 20px;
        font-weight: 700;
        font-size: x-large;
        border: none;
        padding-bottom: 10px;
        border-bottom: solid rgb(0,173,181) 2px;
    }
`;

const DescBlcok = styled.div`
    text-align: left;
    width: 400px;
    line-height: 1.3em;
    padding-top: 15px;
    .brand {
        font-size: 1.3em;
        font-weight: 600;
    }
    .pro-name {
        margin-bottom: 5px;
        font-size: 0.9em;
    }
    .price {
        margin-top: 15px;
    }
`;

const ImageBox = styled.div`
    width: 280px;
    height: 300px;
    align-items: center;
    justify-content: center;
    img {
        width: 250px;
    }
`;

const LikeItemBox = styled.div`
    border-bottom: 1px solid #eeeeee;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 230px;
    cursor: pointer;
    &:hover {
        background-color: rgba(23,158,166,0.05);
    }
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

    // 상품명 클릭 시 해당 상품 상세페이지로 이동
    const onClickDetail = (code) => {
        console.log("상세페이지로 이동 : " + code);
        window.localStorage.setItem("Detail", code);
        window.location.replace("/ItemDetail");
    }


    return (
        <>
            <Profile/>
            <hr></hr>                    
            <Container>
                <br/>
                <div className = "itemContainer" >
                    <p className="title">관심 상품</p>
                    {like && like.map(e => (
                        <LikeItemBox key={e.id} onClick={()=> onClickDetail(e.proCode)} >
                            {/* <p>{whoLoginNow}</p> */}
                            <ImageBox>
                                <img src={e.img1Path} alt="mainImage"/>
                            </ImageBox>
                            <DescBlcok>
                                <p className="brand">{e.brand}</p>
                                <p className="pro-name">{e.proName}</p>
                                <p className="pro-name">{e.proKorName}</p>
                                <p className="price">{e.price}</p>
                            </DescBlcok>
                        </LikeItemBox>
                    ))}
                </div>
            </Container>
        </>
    );
}
export default Like;