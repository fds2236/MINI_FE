import { useEffect, useState } from "react";

const SortItem = () => {
  const [order, setOrder] = useState("");
  // const sortedItems = {item.LAUN_DATE}.sort((a, b) => b[order] - a[order]);
  const handleNewClick = () => {
    setOrder("createdAt");
  };

  const handleBestClick = () => {
    setOrder("rating");
  }; 

  return (
    <></>
  );
}

export default SortItem;