import { useEffect, useState } from "react";
import styled from "styled-components"
import ShoesItems from "./ShoesItem";
import BrandCategory from "./BrandCategory";
import { useCallback } from "react";
import axios from "axios";

const ShoesListBlock = styled.div`
    box-sizing: border-box;
`;

const ItemList = (props) => {
    const [brandCategories, setCategory] = useState("");
    const onSelect = useCallback(category => setCategory(category), []);

    const [shoesItem, setShoes] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                // 여기수정해야됨
                // const query = props.category === 'all' ? 'all' : `category=${props.category}`;
                // const response = await axios.get(``);
                // setShoes(response.data.shoesItem);
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, [props.category]);
            

    return(
        <div>
            <BrandCategory category={brandCategories} onSelect={onSelect}/>
            <ShoesListBlock>
                {shoesItem.map(shoes => (<ShoesItems key={shoes.pro_code} shoes={shoes}/>))}
            </ShoesListBlock>
        </div>
    )
}

export default ItemList; 