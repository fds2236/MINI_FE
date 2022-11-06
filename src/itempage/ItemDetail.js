import MiniApi from "../api/MiniApi";
import { useState, useEffect } from "react";
import styled from "styled-components";

const ImageBlock = styled.div`

`;

const ItemDetailBlock = styled.div`
`;


const ItemDetail = () => {
    //const [category, setCategory] = useState("ALL");

    const getDetail = window.localStorage.getItem("Detail");
    const [itemDetail, setItemDetail] = useState('');

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

//     // 브랜드명 클릭 시 해당 브랜드 상품만 보여줌
//   const onClickBrand = (val) => {
//     console.log("브랜드 카테고리로 이동 : " + val);
//     setCategory(val);
//   }

return(
    <div>
        {itemDetail && itemDetail.map(item => (
        <div key={item.PRO_CODE}>
            <p>{item.BRAND}</p>
            <p>{item.PRO_NAME}</p>
            <p>{item.PRO_CODE}</p>
            <p>{item.LAUN_DATE}</p>
            <p>발매가 : {item.PRICE}원</p>
        </div>
        ))}
    </div>
)
}

export default ItemDetail;