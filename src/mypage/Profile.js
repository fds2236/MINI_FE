import styled from "styled-components";
import { Link} from "react-router-dom";
// import './Mypage.css';
import { useState,useEffect } from "react";
import MiniApi from "../api/MiniApi";

const Box = styled.div`
    /* display: flex; 
    text-align: center; // 가운데 정렬
    justify-content: center; // 가운데 정렬 */

    margin: 30px auto;
    display: flex;
    justify-content: center;


    .side{

        margin-right: 40px;

    }


/* 
    .myPage{


    }
    .editInfo{

    }
    .likeProduct{

    }
    .myBoard{

    } */

`;


const MyPage = () => {
    window.location.replace('/Mypage');
}
const EditInfo = () => {
    window.location.replace('/Modify');
}
const LikeProduct = () => {
    window.location.replace('/Like');
}
const MyBoard = () => {
    window.location.replace('/Mypost');
}


const Img = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 50%;
    padding: 10px ;
    margin: 20px;
`;



const Container = styled.div`
    border: 2px solid #eeeeee;
    display: flex; 
    align-items: center;
    width: 500px;
    text-align: left;
    
    .Info{
        margin-left: 20px;
        margin-top: 15px;
        justify-content: center;
        align-items: center;
    }

`;

const CategoryDiv = styled.div`

    margin: 10px;
    background-color: rgb(23,158,166);
    color : #eeeeee;
    height: 30px;
    width: 130px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        opacity: 0.5;
    }

`;

const Profile = () => {
    // const [CastToggle, setCastToggle] = useState(false)

    // const toggleCastView = () => {
    //     setCastToggle(!CastToggle)
    // }

    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [memberInfo, setMemberInfo] = useState("");
    
    let whoLoginNow = window.localStorage.getItem("whoLoginNow");
    // let callEmail = window.localStorage.getItem("callEmail");

    // API호출(이메일)
    // const onClickProfile = async() => {
    //     try{
    //         const res = await MiniApi.userEmail(id); // 
    //         console.log(res.data.result);
    //         if(res.data.result === "OK") {
    //             setFindEmail(res.data.email); // 찍어주기위해 id값 저장!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //             window.localStorage.setItem("callEmail", findEmail)
    //         } else {
    //             setFindEmail("이메일 없음");
    //         }
    //     } catch (e) {
    //         console.log("이메일 정보 불러오기 실패!")
    //     }
    // } 

    useEffect(() => {
        const MemberData = async () => {
          
            try {
            
                let response = await MiniApi.userEmail(whoLoginNow); // 전부다 조회할때는 인자값으로 ALL
                console.log(response.data);
                setMemberInfo(response.data);
            } catch (e) {  
                console.log(e + "실패 입니다");
            }
           
        };
        MemberData(); // 첫 페이지 로딩시 글 목록을 다 끌어옴

    }, []);




    
   
    
    return (

        <Box>
            <div className="side">
                {/* <Link to={"/Mypage"}><li className="li"><b>마이페이지</b></li></Link><br />
                <Link to={"/Modify"}><li className="li">개인 정보 수정</li></Link><br />
                <Link to={"/Like"}><li className="li">관심 상품</li></Link><br />
                <Link to={"/Mypost"}><li className="li">내 게시글 보기</li></Link><br /> */}
                
                <CategoryDiv onClick={MyPage} >마이페이지</CategoryDiv>
                <CategoryDiv onClick={EditInfo} >개인 정보 수정</CategoryDiv>
                <CategoryDiv onClick={LikeProduct} >관심 상품</CategoryDiv>
                <CategoryDiv onClick={MyBoard} >내 게시글 보기</CategoryDiv>



            </div>
            {memberInfo&&memberInfo.map(member=>(
                <Container>
                    <Img src="/img/프로필.jpg"></Img>
                    <div className="Info">
                        <p><b>아이디 : </b>{whoLoginNow}</p>
                        <p><b>이름 : </b>{member.name}</p>
                        <p><b>이메일 : </b>{member.email}</p>
                    </div>
                </Container>
            ))}
            
        </Box>
    )
};
export default Profile;