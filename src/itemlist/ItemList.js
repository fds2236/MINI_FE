import { useEffect, useState } from "react";
import styled from "styled-components"
import ShoesItems from "./ShoesItem";
import BrandCategory from "./BrandCategory";
import { useCallback } from "react";
import axios from "axios";
import CategoryFilter from "./BrandCategory";

const brandCategories = [
    {
      name: 'all',
      value: 'all'
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
    const [category, setCategory] = useState("all");
    // const onSelect = useCallback(category => setCategory(category), []);

    // const [shoesItem, setShoesItem] = useState("");

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             // 여기수정해야됨
    //             // const query = props.category === 'all' ? 'all' : `category=${props.category}`;
    //             // const response = await axios.get(``);
    //             // setShoes(response.data.shoesItem);
    //         } catch (e) {
    //             console.log(e);
    //         }
    //     };
    //     fetchData();
    // }, [props.category]);
            

    return(
        <div>
            <CategoryFilter brandCategories={brandCategories} category={category} setCategory={setCategory}/>
        </div>
        // <ShoesListBlock>
        //     {shoesItem.map(shoes => (<ShoesItems key={shoes.pro_code} shoes={shoes}/>))}
        // </ShoesListBlock>
    )
}

export default ItemList; 