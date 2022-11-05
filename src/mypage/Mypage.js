import Profile from "./Profile";
import React from "react";
import Like from "./Like";
import Modify from "./Modify";
import { useState } from "react";

function Mypage() {
    // const [LikeToggle, setLikeToggle] = useState(false)
    // const [ModToggle, setModToggle] = useState(false)

    // const toggleLikeView = () => {
    //     setLikeToggle(!LikeToggle)
    // }
    // const toggleModView = () => {
    //     setModToggle(!ModToggle)
    // }

    return (
        <Profile/>
        // <div>
        // <Profile/>
        // <button style={{color: 'black'}} onClick={toggleLikeView}>관심상품</button>
        // <button style={{color: 'black'}} onClick={toggleModView}>개인정보수정</button>
        // <hr></hr>
        // {LikeToggle && <Like/> }
        // {ModToggle && <Modify/> }
            
        // </div>
  );
}

export default Mypage;