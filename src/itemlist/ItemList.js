import { useEffect, useState } from "react";
import styled from "styled-components"
import ShoesItems from "./ShoesItem";
import BrandCategory from "./BrandCategory";
import { useCallback } from "react";
import axios from "axios";
import CategoryFilter from "./BrandCategory";
import MiniApi from '../api/MiniApi';

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
                    <div key={item.PRO_CODE} >
                        <p>{item.PRO_CODE}</p><p>{item.BRAND}</p><p>{item.PRO_NAME}</p><p>{item.PRICE}</p>
                        <p>{item.LAUN_DATE}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ItemList; 