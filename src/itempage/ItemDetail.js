import MiniApi from "../api/MiniApi";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Board from "../board/board";

const ImageBlock = styled.div`
    img {
        width: 450px;
        margin: 30px auto;
    }
`;

const ItemDetailBlock = styled.div`
    display: flex;
    justify-content: center;
    text-align: left;
    .brand-name {
        cursor: pointer;
        font-size: 1.6em;
        font-weight: 700;
        color: rgb(0,173,181);
    }
    .item-name {
        font-size: 1.3em;
        font-weight: 600;
    }


`;


const ItemDetail = () => {
    //const [category, setCategory] = useState("");
    const [itemDetail, setItemDetail] = useState('');
    const getDetail = window.localStorage.getItem("Detail");
    
    useEffect(() => {
        console.log("상품 상세보기 컴포넌트 useEffect Call !!!");
        const itemDetailData = async () => {
            try {
                const response = await MiniApi.itemInfo(getDetail);
                setItemDetail(response.data);
                console.log(response.data)
            } catch (e) {
                console.log(e);
            }
        };
        itemDetailData();
    }, [getDetail]);

    // useEffect(() => {
    //     console.log("브랜드로 이동");
    //     const itemData = async () => {
    //         try {
    //             const rsp = await MiniApi.itemInfo(category);
    //             setCategory(rsp.data);
    //         } catch (e) {
    //             console.log(e)
    //         }
    //     };
    //     itemData();
    // }, [category]);

    // 브랜드명 클릭 시 해당 브랜드 상품만 보여줌
    const onClickBrand = (val) => {
        console.log("브랜드카테고리로 이동 : " + val);
        window.localStorage.setItem("brand", val);
        window.location.replace("/ItemList");
    }

return(
    <>
        <ItemDetailBlock>  
            {itemDetail && itemDetail.map(item => (
            <div key={item.PRO_CODE}>
                <ImageBlock>
                    <img src={item.IMG}/>
                </ImageBlock>
                <p className="brand-name" onClick={() => onClickBrand}>{item.BRAND}</p>
                <p className="item-name">{item.BRAND} {item.PRO_NAME}</p>
                <p className="pro-code">{item.PRO_CODE}</p>
                <p className="laun-date">{item.LAUN_DATE}</p>
                <p>발매가 : {item.PRICE}원</p>
            </div>
            ))}
        </ItemDetailBlock>
        {/* <Board/> */}
    </>
)
}

export default ItemDetail;