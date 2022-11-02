import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MiniApi from "../api/MiniApi";
import itemImage from "./NB_574.png"

// *********** 이미지는 css 테스트용으로 넣은 것입니다~! ***********

// 각 박스의 스타일
const ShoesItemsBlock = styled.div`
  box-sizing: border-box;
  
  .image {
    width: 200px;
  }
`;

const ShoesItems = () => {
  const [itemInfo, setItemInfo] = useState('');

  const onClickItemDetail = (val) => {
    console.log("아이템 상세 페이지로 이동 : " + val);
    window.localStorage.setItem("Detail", val);
    window.location.replace("/ItemDetail");
  }

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

  // const brands = ['nike', 'vans', 'converse', 'newbalance', 'adidas'];

  // 브랜드 필터링..? 서버랑 연결방법 고민 검색에 응용?
  // const filterItems = (query) => {
  //   brands.filter((br) => 
  //     br.toString().toLowerCase().indexOf(query.toString().toLowerCase()) > -1
  //   );
  // }

  return (
    <ShoesItemsBlock>
      {/* <tr className="ItemBox">
          <th><img src={itemImage} className="image" alt="신발사진"/></th><th>상품번호</th><th>브랜드</th><th>상품명</th><th>가격</th>
      </tr>
      {itemInfo && itemInfo.map(item => (
          <tr key={item.proCode} onClick={()=>onClickItemDetail(item.proCode)}>
              <td>{item.proCode}</td><td>{item.brand}</td><td>{item.proName}</td><td>{item.price}</td>
          </tr>
      ))} */}
    </ShoesItemsBlock>

    // <ShoesItemsBlock>
    //   {image && (
    //     <div className="shoes-thumbnail">
    //       <Link to = {"/ItemDetail"} target="_blank" rel="noopener noreferrer"/>
    //         <img src={image} alt="shoes-thumbnail" />
    //     </div>
    //   )}
    //   <div className="desc">
    //     <Link to = {"/"} className="brand-name"/>
    //   </div>
    // </ShoesItemsBlock>
  );
};
export default ShoesItems;
