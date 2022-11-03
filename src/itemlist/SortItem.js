import { useEffect, useState } from "react";
import styled from "styled-components";
import MiniApi from "../api/MiniApi";

const SortStyleBlock = styled.div`

`;

const SortItem = () => {
  
  const [sortData, setSortData] = useState("sortByNewDate");

  useEffect(() => {
    const itemData = async () => {
      try {
        const response = await MiniApi.itemInfo(sortData);
        response.sort((a, b) => b - a);
        setSortData(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    itemData();
  }, [sortData]);

  const handleChange = () => {
    setSortData("sortByNewDate");
    setSortData("sortByLowPrice");
    setSortData("sortByHighPrice");
    setSortData("sortByLike");
  }

  // const handleNewClick = () => {
  //   setSortData("sortByNewDate");
  // };
  // const handLowPriceClick = () => {
  //   setSortData("sortByLowPrice");
  // }
  // const handHighPriceClick = () => {
  //   setSortData("sortByHighPrice");
  // }
  // const handLikeClick = () => {
  //   setSortData("sortByLike");
  // }
  
  return (
    <SortStyleBlock>
      <select onChange={handleChange}>
        <option value="sortByNewDate">최신 발매순</option>
        <option value="sortByLowPrice">낮은 가격순</option>
        <option value="sortByHighPrice">높은 가격순</option>
        <option value="sortByLike">높은 관심순</option>
      </select>
      {/* <div className="sortList">
        {sortData === "sortByNewDate" ? itemInfo.map(items => <SortItem items={items} key={items.id}/>):null}
        {sortData === "sortByLowPrice" ? itemInfo.map(items => <SortItem items={items} key={items.id}/>):null}
        {sortData === "sortByHighPrice" ? itemInfo.map(items => <SortItem items={items} key={items.id}/>):null}
        {sortData === "sortByLike" ? itemInfo.map(items => <SortItem items={items} key={items.id}/>):null}
      </div> */}
    </SortStyleBlock>
  );
  
// const SortItem = async (array) => {
//     const originArray = array;

//     const sortArray = await Promise.all(
//       originArray.map(async (x) => [
//       await MiniApi.itemInfo(),
//       x,
//     ])
//   );

}
export default SortItem;