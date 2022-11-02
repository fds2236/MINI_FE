import React, { useState, Link } from 'react';


const Like = () => {
    const [like, setLike] = useState(0);
    return (
        <>
            <div>
                {/* <Link to={"Mypage"}><li className="li"><b>마이페이지</b></li></Link><br />
                <Link to={"/Modify"}><li className="li">개인 정보 수정</li></Link><br />
                <Link to={"/Like"}><li className="li">관심 상품</li></Link><br />
                <Link to={"/Content"}><li className="li">내 게시글 보기</li></Link><br /> */}
            </div>
            <h2>관심 상품</h2><hr/>
            <button onClick={() => setLike(like + 1)}>+1😂</button>

        </>
    );
}
export default Like;