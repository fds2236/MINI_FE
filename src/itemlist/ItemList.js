import { useEffect, useState } from "react";
import styled from "styled-components"
import axios from "axios";
import { useCallback } from "react";
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
    line-height: 1em;
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

const ItemList = (props) => {
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
    console.log("브랜드 : " + val);
    setCategory(val);
  }

  return(
    <div>
      <CategoryFilter 
        brandCategories={brandCategories}
        category={category}
        setCategory={setCategory}
      />
      <SortItem
        sort={sortCondition}
        setSort={setSortCondition}
      />
      <div>
        {itemInfo && itemInfo.map(item => (
          <ItemBlock key={item.PRO_CODE}>
            <ItemDescBlock>
              <p className="brand-name" onClick={()=>onClickBrand(item.BRAND)}>{item.BRAND}</p>
              <p className="item-name">{item.PRO_NAME}</p>
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