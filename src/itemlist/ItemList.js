import { useEffect, useState } from "react";
import styled from "styled-components"
import CategoryFilter from "./BrandCategory";
import MiniApi from '../api/MiniApi';
import SortItem from "./SortItem";
import notlikeIcon from "../images/NOTLike-icon-00AD85.png"
import likeIcon from "../images/Like-icon-00AD85.png"

// 스타일
const ItemBlock = styled.div`
  border: 1px solid #eeeeee;
  margin: 10px 0px 10px 30px;
  padding: 10px;
  width: 260px;
  height: 350px;
  display: block;
  float: left;
  
`;

const ItemDescBlock = styled.div`
  text-align: left;
  line-height: 0.5em;
  .brand-name {
    cursor: pointer;
    font-size: 1.2em;
    font-weight: 600;
  }
  .brand-name:hover {
    color: rgb(0,173,181);
  }
  .item-name {
    line-height: 1.1em;
  }
  .item-name:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  .laun-date {
    font-size: 0.8em;
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
    transform: translate(465%, -325%);
    cursor: pointer;
  }
  .likeIcon:hover {
    background-image: ${likeIcon};
  }
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px auto;
  width: 230px;
  height: 140px;
  margin-bottom: 20px;  
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
  const [category, setCategory] = useState("ALL");
  const [sortCondition, setSortCondition] = useState("NEW_DATE");
  const [itemInfo, setItemInfo] = useState('');
  
  useEffect(() => {
    console.log("상품 목록 보기 컴포넌트 useEffect Call !!!!!!!");
    const itemData = async () => {
      try {
        const response = await MiniApi.itemFilterInfo(category, sortCondition);
        setItemInfo(response.data);
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
    // alert(tmp);
    window.localStorage.setItem("Detail", code);
    window.location.replace("/ItemDetail");
  }
  
  // 관심상품 클릭 시 채워진 하트로 아이콘 변경 + 관심상품 횟수 카운트
  const onClickLike = () => {
      console.log("관심상품 등록 call?");
  
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
      <div>
        {itemInfo && itemInfo.map(item => (        
          <ItemBlock key={item.PRO_CODE}>
            <ItemImage>
              <img className="item-img" alt="productImage" src={item.IMG} key={item.PRO_CODE} onClick={()=> onClickDetail(item.PRO_CODE)}/>
              <img className="likeIcon" alt="likeIcon" src={notlikeIcon} onClick={() => onClickLike()}></img>
            </ItemImage>
            <ItemDescBlock>
              <p className="brand-name" onClick={()=>onClickBrand(item.BRAND)}>{item.BRAND}</p>
              <p className="item-name" key={item.PRO_CODE} onClick={()=>onClickDetail(item.PRO_CODE)}>{item.PRO_NAME}</p>
              <p className="laun-date">발매일 : {item.LAUN_DATE}</p>
              <p className="price">발매가 : {item.PRICE}원</p>
              <p className="like"><img src={likeIcon} alt={likeIcon} width="15px"></img> x 3,201</p>
            </ItemDescBlock>
          </ItemBlock>
        ))}
      </div>
  </div>
  )
}

export default ItemList; 