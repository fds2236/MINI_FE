import { useEffect, useState } from "react";
import styled from "styled-componen
import ShoesItems from "./ShoesItem";

const ShoesListBlock = styled.div`

`;

const ItemList = (props) => {
    const [shoesItem, setShoes] = useState("");

    useEffect(() => {

    })

    return(
        <ShoesListBlock>
            {shoesItem.map(shoes => (<ShoesItems key={shoes.pro_code} shoes={shoes}/>))}
        </ShoesListBlock>
    )
}

export default ItemList; 