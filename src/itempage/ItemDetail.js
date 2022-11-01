import MiniApi from "../api/MiniApi";
import { useState, useEffect } from "react";

const ItemDetail = () => {
    const getDetail = window.localStorage.getItem("Detail");
    const [itemDetail, setItemDetail] = useState("");

    useEffect(() => {
        const itemData = async () => {

            try {
                const response = await MiniApi.itemInfo(getDetail);
                setItemDetail(response.data);
                console.log(response.data)
            } catch (e) {
                console.log(e);
            }
        };
        itemData();
    }, []);

    // 리턴값 수정해야함
    return(
        <div>
           {itemDetail && itemDetail.map(item => (
            <div key={item.proCode}>
                <p>{item.proCode}</p>
                <p>{item.proName}</p>
                <p>{item.brand}</p>
                <p>{item.price}</p>
                <p>{item.launDate}</p>
            </div>
        ))}
        </div>
    )
}

export default ItemDetail;