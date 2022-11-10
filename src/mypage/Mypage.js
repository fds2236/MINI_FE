import Profile from "./Profile";
import React from "react";
import styled from "styled-components";

const MypageBox = styled.div`
  width: 100%;
  height: 400px;
`;


function Mypage() {
    // const [LikeToggle, setLikeToggle] = useState(false)
    // const [ModToggle, setModToggle] = useState(false)

    // const toggleLikeView = () => {
    //     setLikeToggle(!LikeToggle)
    // }
    // const toggleModView = () => {
    //     setModToggle(!ModToggle)
    // }


    //MemberServlet

    // API 호출



    return(
      <MypageBox>
        <Profile/>
       
      </MypageBox>

)
}

export default Mypage;