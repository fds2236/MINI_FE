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
                <div key={item.PRO_CODE} >
                    <p>{item.PRO_CODE}</p><p>{item.BRAND}</p><p>{item.PRO_NAME}</p><p>{item.PRICE}</p>
                    <p>{item.LAUN_DATE}</p>
                </div>
            ))}
        </div>
    )
}

export default ItemDetail;