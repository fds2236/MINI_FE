import { useEffect, useState } from "react";
import styled from "styled-components"
import axios from "axios";
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
    const [itemInfo, setItemInfo] = useState('');
    const [sortData, setSortData] = useState("sortByNewDate");

    useEffect(() => {
      const itemData = async () => {
        try {
          const response = await MiniApi.itemInfo(category);
          setItemInfo(response.data);
        } catch (e) {
          console.log(e);
        }
      };
      itemData();
    }, [category]);

    const onClickBrand = (val) => {
      console.log("브랜드 : " + val);
      setCategory(val);
    }

    const handleChange = (sortData) => {
      sortData.sort((a, b) => a - b);
      setSortData("sortByNewDate");
      setSortData("sortByLowPrice");
      setSortData("sortByHighPrice");
      setSortData("sortByLike");
    }

    // const onClickItemDetail = (val) => {
    //   console.log("브랜드 : " + val);
    //   window.localStorage.setItem("Detail", val);
    //   window.location.replace("/ItemDetail");
    // }

    return(
      <div>
        <CategoryFilter 
          brandCategories={brandCategories}
          category={category}
          setCategory={setCategory}
        />
        <select onChange={handleChange}>
          <option value="sortByNewDate">최신 발매순</option>
          <option value="sortByLowPrice">낮은 가격순</option>
          <option value="sortByHighPrice">높은 가격순</option>
          <option value="sortByLike">높은 관심순</option>
        </select>
        <div>
          {itemInfo && itemInfo.map(item => (
            <ItemBlock key={item.PRO_CODE}>
              <ItemDescBlock>
                <p className="brand-name" onClick={()=>onClickBrand(item.BRAND)}>{item.BRAND}</p>
                <p className="item-name">{item.PRO_NAME}</p>
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