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
  flex-wrap: wrap;
  justify-content: space-around;

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


    const onClickItemDetail = (val) => {
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
                        <p>{item.BRAND}</p><p>{item.PRO_NAME}</p><p>{item.PRICE}원</p>
                    </ItemBlock>
                ))}
            </div>
        </div>
    )
}

export default ItemList; 