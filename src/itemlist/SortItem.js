import styled from "styled-components";

const SortStyleBlock = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  select {
    width: 150px;
    padding: .8em .5em;
    border: none;
  }
`;

const SortItem = ({sortCondition, setSortCondition}) => {
  
  const handleChange = (event) => {
    console.log("onChange Call??????");
    setSortCondition(event.target.value);
  }

  return (
    <SortStyleBlock>
      <select onChange={handleChange}>
        <option value="LAUN_DATE">최신 발매순</option>
        <option value="LOW_PRICE">낮은 가격순</option>
        <option value="HIGH_PRICE">높은 가격순</option>
        {/* <option value="sortByLike" onChange={onChangeLike}>관심 많은순</option> */}
      </select>
    </SortStyleBlock>
);
}
export default SortItem;