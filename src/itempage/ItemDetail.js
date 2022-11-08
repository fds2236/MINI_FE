import MiniApi from "../api/MiniApi";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "../util/Modal";
import notlikeIcon from "../images/NOTLike-icon-00AD85.png"
import likeIcon from "../images/Like-icon-00AD85.png"

const ImageBlock = styled.div`
    display: flex;
    flex-wrap: nowrap;
    img {
        width: 350px;
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
        padding-left: 10px;
    }
    .item-name {
        font-size: 1.4em;
        font-weight: 600;
        padding-left: 10px;
    }
    .item-Kname {
        font-size: 1.2em;
        padding-left: 10px;
        line-height: 10px;
    }

`;

const NameAndLike = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1000px;
`;


const LikeBtn = styled.div`
    cursor: pointer;
    border-radius: 8px;
    text-align: center;
    padding-top: 10px;
    width: 160px;
    height: 70px;
    margin-top: 48px;
    margin-right: 10px;
    border: 1px solid #eeeeee;
    :hover {
        color: rgb(0,173,181);
        border: 1px solid rgb(0,173,181);
    }
`;

const TableDescBlock = styled.table`
    border-top: 2px solid rgb(0,173,181);
    width: 1000px;
    margin-top: 30px;
    margin-bottom: 100px;
    font-size: 1.1em;
    color: rgb(57,62,70);
    th {
        padding-left: 10px;
        padding-top: 20px;
    }
    td {
        padding-left: 10px;
        width: 200px;
        
    }
`;


const ItemDetail = () => {
    const [itemDetail, setItemDetail] = useState('');
    const getDetail = window.localStorage.getItem("Detail");
    const [like,setLike] = useState(0);
    
    // 관심상품 등록 모달
    const [modalOpenLike, setModalOpenLike] = useState(false);
    const closeModalLikeOK = () => {
        setModalOpenLike(false); 
    }

    // 로그인 필요 서비스 모달 -> 모달창 close 후 로그인화면으로 이동
    const [modalOpenLogin, setModalOpenLogin] = useState(false);
    const closeModalLoginOK = () => {
        setModalOpenLogin(false);
        window.location.replace('/Login')
    }

    // 관심상품 클릭 시 채워진 하트로 아이콘 변경 + 관심상품 횟수 카운트
    const onClickLike = async() => {
        console.log("관심상품 등록 call?");
        let checkLogin = window.localStorage.getItem("whoLoginNow");
        const productCode = window.localStorage.getItem("PRO_CODE");
        try{
        const response = await MiniApi.itemInfo(productCode);
        setLike(response.data);
        }catch(e){
        console.log(e)
        }
        if(checkLogin) setModalOpenLike(true);
        else {
        setModalOpenLogin(true);
        }
    }

    // 상품 상세페이지
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

    // 브랜드명 클릭 시 해당 브랜드 상품만 보여줌
    const onClickBrand = (val) => {
        console.log("브랜드카테고리로 이동 : " + val);
        // window.localStorage.setItem("brand", val);
        window.localStorage.setItem('category', val);
        window.location.replace("/ItemList");
        //setCategory(val)
    }

return(
    <>
        <ItemDetailBlock>  
            {itemDetail && itemDetail.map(item => (
            <div key={item.PRO_CODE}>
                <ImageBlock>
                    <img src={item.IMG1} alt="mainImage"/><img src={item.IMG2}/><img src={item.IMG3}/>
                </ImageBlock>
                <NameAndLike>
                    <div>
                        <p className="brand-name" onClick={() => onClickBrand(item.BRAND)}>{item.BRAND}</p>
                        <p className="item-name">{item.BRAND} {item.PRO_NAME}</p>
                        <p className="item-Kname">{item.PRO_KORNAME}</p>
                    </div>
                    <LikeBtn onClickLike={() => onClickLike()}>
                        <b>관심상품</b>
                        <p className="like"><img src={likeIcon} alt={likeIcon} width="15px"></img> x 3,201</p>
                    </LikeBtn>
                </NameAndLike>
                <TableDescBlock>
                    <tr>
                        <th>상품 코드</th>
                        <th>발매일</th>
                        <th>발매가</th>
                    </tr>
                    <tr>
                        <td className="pro-code">{item.PRO_CODE}</td>
                        <td className="laun-date">{item.LAUN_DATE}</td>
                        <td>{item.PRICE}원</td>
                    </tr>
                </TableDescBlock>
            </div>
            ))}
        </ItemDetailBlock>
        {modalOpenLike && <Modal open={modalOpenLike} close={closeModalLikeOK} type={true} header="확인">관심상품 등록 완료!</Modal>}
        {modalOpenLogin && <Modal open={modalOpenLogin} close={closeModalLoginOK} type={true} header="확인">로그인이 필요한 서비스입니다</Modal>}
    </>
)
}

export default ItemDetail;