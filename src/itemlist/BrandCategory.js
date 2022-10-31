import styled, {css} from "styled-components";
import React, { useEffect } from "react";
import { useState } from "react";

// const CategoriesBlock = styled.div`
//   font-size: 1.5rem;
//   cursor: pointer;
//   text-decoration: none;
//   background-color: #eeeeee;

//   &:hover {
//     background-color: #222831;
//   }

//   ${props => 
//     props.active && css`
//       font-weight: 600;
//       background-color: #222831;
//   `}

// `;

const Box = styled.div`
    background: ${props => props.color || 'blue'};
    padding: 1rem;
    display: flex;
    width: 1024px;
    margin: 0 auto;
    @media (max-width: 1024px) {
        width: 768px;
    }
    @media (max-width: 768px) {
        width: 90%;
    }
`;

const CategoriesBlock = styled.div`
    box-sizing: border-box;

    .category-set {
    margin-top: 3px;
    }

    .category-child {
    margin: 5px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding-left: 0;
    border: 1px solid grey;
    background-color: #fff;
    width: 130px;
    height: 50px;
    border-radius: 50px;
    }

    .category-child:hover {
    font-weight: bolder;
    border-color: black;
    }

    .selected {
    border-style: none;
    font-weight: 800;
    background: rgb(12, 77, 162);
    color: #fff;
    }
`;

const reqCategory = "reqCategory";

const CategoryFilter = ({ brandCategories, category, setCategory }) => {


  
  const makeCategories = () => {
    if (brandCategories.length === 0) return;
    
    return brandCategories.map((item, idx) => (
      <div 
        key={idx}
        className={item.value === category ? "category-child selected" : "category-child"}
        onClick={() => {
          setCategory(item.value);
          localStorage.setItem(reqCategory, item.value);
        }}
      >
        {item.name}
      </div>
    ));
  };

  const init = () => {
    let data = localStorage.getItem(reqCategory);
    if (data !== null) setCategory(data);
  };
  
 // useEffect(init, []);

  return (
    <CategoriesBlock>
      <div className="category-set">{makeCategories()}</div>
    </CategoriesBlock>
  );
};

export default CategoryFilter;

// const BrandCategory = ({onSelect, category}) => {
//   const [category, setCategory] = useState("all");

//   return (
//     <CategoriesBlock>
//       {brandCategories.map(c => (
//         <Category
//           key={c.name}
//           active={category === c.name}
//           onClick={() => onSelect(c.name)}
//         >{c.text}</Category>
//       ))}
//     </CategoriesBlock>
//   )
// };

// export default BrandCategory;