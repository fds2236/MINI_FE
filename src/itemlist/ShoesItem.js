import styled from "styled-components";

// 각 박스의 스타일
const ShoesItemsBlock = styled.div`
`;

const ShoesItems = ({shoes}) => {
  const {pro_code, brand, pro_name} = shoes; // 서버랑 맞추기?
  return (
    <ShoesItemsBlock>

    </ShoesItemsBlock>
  );
};
export default ShoesItems;
