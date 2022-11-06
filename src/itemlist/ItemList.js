import { useEffect, useState } from "react";
import styled from "styled-components"
import CategoryFilter from "./BrandCategory";
import MiniApi from '../api/MiniApi';
import SortItem from "./SortItem";

// 스타일
const ItemBlock = styled.div`
  border: 1px solid #eeeeee;
  margin: 10px;
  padding: 10px;
  width: 250px;
  height: 200px;
  display: inline-flex;
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
  .price {
    font-size: 0.8em;
  }
  .like {
    font-size: 0.8em;
  }
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
        const response = await MiniApi.itemInfo(category, sortCondition);
        setItemInfo(response.data);
      } catch (e) {
        console.log(e);
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
  const onClickDetail = (val) => {
    console.log("상세페이지로 이동 : " + val);
    window.localStorage.setItem("Detail", val);
    window.location.replace("/ItemDetail");
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
            <ItemDescBlock>
              <p className="brand-name" onClick={()=>onClickBrand(item.BRAND)}>{item.BRAND}</p>
              <p className="item-name" key={item.PRO_CODE} onClick={()=>onClickDetail(item.PRO_CODE)}>{item.PRO_NAME}</p>
              <p className="laun-date">{item.LAUN_DATE}</p>
              <p className="price">발매가 : {item.PRICE}원</p>
              <p className="like">♡ 관심상품 </p>
            </ItemDescBlock>
          </ItemBlock>
        ))}
      </div>
  </div>
  )
}

export default ItemList; 