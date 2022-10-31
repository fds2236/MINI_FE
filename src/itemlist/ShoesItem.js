import styled from "styled-components";
import { Link } from "react-router-dom";

// 각 박스의 스타일
const ShoesItemsBlock = styled.div`
  width: 200px;
  height: 150px;
`;

const ShoesItems = ({shoes}) => {
  const {pro_code, brand, pro_name, image} = shoes; // db랑 맞추나? api?
  const brands = ['nike', 'vans', 'converse', 'newbalance', 'adidas'];

  // 브랜드 필터링..? 서버랑 연결방법 고민
  const filterItems = (query) => {
    brands.filter((br) => 
      br.toString().toLowerCase().indexOf(query.toString().toLowerCase()) > -1
    );
  }

  return (
    <ShoesItemsBlock>
      {image && (
        <div className="shoes-thumbnail">
          <Link to = {"/ItemDetail"} target="_blank" rel="noopener noreferrer"/>
            <img src={image} alt="shoes-thumbnail" />
        </div>
      )}
      <div className="desc">
        <Link to = {"/"} className="brand-name"/>
      </div>
    </ShoesItemsBlock>
  );
};
export default ShoesItems;
