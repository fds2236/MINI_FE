import { useEffect, useState } from "react";
import styled from "styled-components"
import CategoryFilter from "./BrandCategory";
import MiniApi from '../api/MiniApi';
import Modal from "../util/Modal";
import SortItem from "./SortItem";
import notlikeIcon from "../images/NOTLike-icon-00AD85.png"
import likeIcon from "../images/Like-icon-00AD85.png"

// 스타일
const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  margin: auto 20px;
`;

const ItemBlock = styled.div`
  border: 1px solid #eeeeee;
  margin: 10px;
  padding: 10px;
  width: 260px;
  height: 360px;
  /* display: block; */
  /* float: left; */
`;

const ItemDescBlock = styled.div`
  text-align: left;
  line-height: 0.5em;
  padding: 10px;
  .brand-name {
    cursor: pointer;
    font-size: 1.2em;
    font-weight: 600;
  }
  .brand-name:hover {
    color: rgb(0,173,181);
  }
  .pro-name {
    line-height: 1.1em;
    font-size: 0.95em;
  }
  .pro-name:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const DescBlock = styled.div`
  display: table;
  align-content: flex-start;
  .laun-date {
    font-size: 0.8em;
  }
  .price {
    font-weight: 600;
    font-size: 1.05em;
  }
  .like {
    font-size: 0.8em;
  }
`;

const ItemImage = styled.div`
  img {
    width: 230px;
    cursor: pointer;
  }
  .likeIcon {
    width: 23px;
    position: absolute;
    transform: translate(490%, -260%);
    cursor: pointer;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 230px;
  height: 140px;
  margin-bottom: 30px;  
`;

// 브랜드 카테고리 배열
const brandCategories = [
  {
    name: 'ALL',
    value: 'ALL'
  },
  {
    name: 'NIKE',
    value: 'NIKE'
  },
  {
    name: 'CONVERSE',
    value: 'CONVERSE'
  },
  {
    name: 'ADIDAS',
    value: 'ADIDAS'
  },
  {
    name: 'VANS',
    value: 'VANS'
  },
  {
    name: 'NEW BALANCE',
    value: 'NEW BALANCE'
  }
]

const ItemList = () => {
  const [category, setCategory] = useState(window.localStorage.getItem('category'));
  const [sortCondition, setSortCondition] = useState("NEW_DATE");
  const [itemInfo, setItemInfo] = useState('');
  const [like,setLike] = useState(0);

  // 좋아요 버튼
  const [likeOk, setLikeOk] = useState(false);

  // 관심상품 등록 모달
  const [modalOpenLike, setModalOpenLike] = useState(false);
  const closeModalLikeOK = () => {
    setModalOpenLike(false); 
  }

  // 관심상품 취소 모달
  const [modalOpenNotLike, setModalOpenNotLike] = useState(false);
  const closeModalNotLikeOK = () => {
    setModalOpenNotLike(false); 
  }

  // 로그인 필요 서비스 모달 -> 모달창 close 후 로그인화면으로 이동
  const [modalOpenLogin, setModalOpenLogin] = useState(false);
  const closeModalLoginOK = () => {
    setModalOpenLogin(false);
    window.location.replace('/Login')
  }

  useEffect(() => {
    console.log("상품 목록 보기 컴포넌트 useEffect Call !!!!!!!");
    const itemData = async () => {
      try {
        const response = await MiniApi.itemFilterInfo(category, sortCondition);
        setItemInfo(response.data);
        window.localStorage.setItem("PRO_CODE",response.data.value[0]);
      } catch (e) {
        console.log("홈화면 아이템리스트 오류 : " + e);
      }
    };
    itemData();
  }, [category, sortCondition]);

  // 브랜드명 클릭 시 해당 브랜드 상품만 보여줌
  const onClickBrand = (val) => {
    console.log("브랜드 카테고리로 이동 : " + val);
    setCategory(val);
  }

  // 상품명 클릭 시 해당 상품 상세페이지로 이동
  const onClickDetail = (code) => {
    console.log("상세페이지로 이동 : " + code);
    window.localStorage.setItem("Detail", code);
    window.location.replace("/ItemDetail");
  }
  
  // 관심상품 클릭 시 채워진 하트로 아이콘 변경 + (관심상품 횟수 카운트)
  const onClickLike = async() => {
    //console.log("관심상품 등록 call?");
    let checkLogin = window.localStorage.getItem("whoLoginNow");
    const productCode = window.localStorage.getItem("PRO_CODE");
    try{
      const response = await MiniApi.itemInfo(productCode);
      window.localStorage.setItem(response.data);
    }catch(e){
      console.log(e)
    }
    if(checkLogin){
      //window.localStorage.setItem("id", "");
      //window.localStorage.setItem(response.data);

      // 빈 하트일 때 (false) 클릭하면 '관심상품 등록 완료' 모달
      if (likeOk === false) {
        setModalOpenLike(true); 
        setLikeOk(!likeOk);
      }
      else {
        setModalOpenNotLike(true);
        setLikeOk(!likeOk);
      }
    } 
    else {
      setModalOpenLogin(true);
    }
  }

  return(
    <div>
      <CategoryFilter 
        brandCategories={brandCategories}
        category={category}
        setCategory={setCategory}
      />
      <SortItem
        sortCondition={sortCondition}
        setSortCondition={setSortCondition}
      />
      <ItemContainer>
        {itemInfo && itemInfo.map(item => (        
          <ItemBlock key={item.PRO_CODE}>
            <ItemImage>
              <img className="item-img" alt="productImage" src={item.IMG1} key={item.PRO_CODE} onClick={()=> onClickDetail(item.PRO_CODE)}/>
              <img className="likeIcon" alt="likeIcon" src={likeOk ? likeIcon : notlikeIcon} onClick={()=> onClickLike()}></img>
            </ItemImage>
            <ItemDescBlock>
              <div className="name">
                <p className="brand-name" onClick={()=>onClickBrand(item.BRAND)}>{item.BRAND}</p>
                <p className="pro-name" key={item.PRO_CODE} onClick={()=>onClickDetail(item.PRO_CODE)}>{item.PRO_NAME}</p>
              </div>
              <DescBlock>
                <p className="laun-date">발매일 : {item.LAUN_DATE}</p>
                <p className="price">{item.PRICE}원</p>
                <p className="like"><img src={likeIcon} alt={likeIcon} width="15px"></img> x 3,201</p>
              </DescBlock>
            </ItemDescBlock>
          </ItemBlock>
        ))}
      </ItemContainer>
      {modalOpenLike && <Modal open={modalOpenLike} close={closeModalLikeOK} type={true} header="&nbsp;">관심상품 등록 완료!</Modal>}
      {modalOpenNotLike && <Modal open={modalOpenNotLike} close={closeModalNotLikeOK} type={false} header="&nbsp;">관심상품 취소 완료</Modal>}
      {modalOpenLogin && <Modal open={modalOpenLogin} close={closeModalLoginOK} type={true} header="&nbsp;">로그인이 필요한 서비스입니다</Modal>}
  </div>
  )
}

export default ItemList; 