import { useEffect, useState } from "react";
import styled from "styled-components"
import axios from "axios";
import CategoryFilter from "./BrandCategory";
import MiniApi from '../api/MiniApi';

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

    useEffect(() => {
      const itemData = async () => {
        try {
          const response = await MiniApi.itemInfo("ALL");
          setItemInfo(response.data);
        } catch (e) {
          console.log(e);
        }
      };
      itemData();
    }, []);


    // const onClickItemDetail = (val) => {
    //   console.log("브랜드 : " + val);
    //   window.localStorage.setItem("Detail", val);
    //   window.location.replace("/ItemDetail");
    // }

    const onClickBrand = (val) => {
      console.log("브랜드 : " + val);
      window.localStorage.setItem("Detail", val);
      window.location.replace("/ItemDetail");
    }

    return(
        <div>
            <CategoryFilter brandCategories={brandCategories} category={category} setCategory={setCategory}/>
            <div>
              {itemInfo && itemInfo.map(item => (
                    <ItemBlock key={item.PRO_CODE} >
                      <ItemDescBlock>
                        <p className="brand-name" onClick={onClickBrand}>{item.BRAND}</p>
                        <p className="item-name">{item.PRO_NAME}</p>
                        <p className="price"><span>발매가 : </span>{item.PRICE}원</p>
                        <p className="like">♡ 관심상품 </p>
                      </ItemDescBlock>
                    </ItemBlock>
                ))}
            </div>
        </div>
    )
}

export default ItemList; 