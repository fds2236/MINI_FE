import styled, {css} from "styled-components";
import React, { useEffect } from "react";
import { useState } from "react";

// 카테고리 스타일
const CategoriesBlock = styled.div`
    box-sizing: border-box;
    cursor: pointer;
    .category-set {
    margin-top: 3px;
    }

    .category-child {
    margin: 5px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding-left: 0;
    border: 1px solid #eeeeee;
    background-color: #fff;
    width: 130px;
    height: 50px;
    border-radius: 50px;
    }

    .category-child:hover {
    font-weight: 600;
    border-color: rgb(0,173,181);
    color: rgb(0,173,181);
    }

    .selected {
    border-style: none;
    font-weight: 600;
    background: rgb(0,173,181);
    color: #fff;
    }
    
    .selected:hover {
      color: #fff;
    }
`;

// 
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

  // const init = () => {
  //   let data = localStorage.getItem(reqCategory);
  //   if (data !== null) setCategory(data);
  // };
  
  // useEffect(init, []);

  return (
    <CategoriesBlock>
      <div className="category-set">{makeCategories()}</div>
    </CategoriesBlock>
  );
};

export default CategoryFilter;