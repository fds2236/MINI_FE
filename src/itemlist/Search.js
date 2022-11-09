
import { Link } from "react-router-dom";
import { useState, useEffect} from "react";
import MiniApi from "../api/MiniApi";
import Modal from "../util/Modal";
import styled from "styled-components";

const ItemContainer = styled.div`
    :hover{opacity: 0.5}
    .item_img{
        width : 250px;
        height : 210px;
        &:hover {
           
        }
    }


`;


const OnClick = (e) => {
    window.localStorage.setItem("Detail", e);
    window.location.replace("/ItemDetail");
}


const Search = () => {
    const [searchInfo, setSearchInfo] = useState("");

    let word = window.localStorage.getItem("word");

useEffect(() => {
    const SearchData = async () => {
        try {
            window.localStorage.getItem(word);
            let response = await MiniApi.keyWord(word);

            setSearchInfo(response.data);
            console.log(response.data);
        } catch (e) {
            console.log(e + "검색 실패 입니다");
        }
    };
    SearchData();
}, []);

return (
    <>
    <div>
        {searchInfo && searchInfo.map(word => (
        <>
            <ItemContainer onClick={()=>OnClick(word.proCode)}>
                <div className="item">
                <img className="item_img" src = {word.img1Path}/>
                <div className="item_brand">{word.brand}</div>
                <div className="item_EName">{word.proName}</div>
                <div className="item_KName">{word.proKorName}</div>
                <div className="item_price">{word.price}원</div>
                </div>
                
            </ItemContainer>
        </>

        ))}
    </div>
    </>
)

}

export default Search;