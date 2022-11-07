import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import ItemList from "../itemlist/ItemList";


/**
 *  ------------------- 스타일드 컴포넌트 -----------------
 */

const ImageContainer = styled.div`
    position: relative;

`;

const ImageText = styled.div`
    position: absolute;
    top : 20%;
    left: 25%;
    color: black; 

    &:hover {
        color: white;
        cursor: pointer;
    }
`;

const ImageText2 = styled.div`
    position: absolute;
    top : 45%;
    left: 61%;
    color: black; 

    &:hover {
        color: white;
        cursor: pointer;
    }
`;

const ImageText3 = styled.div`
    position: absolute;
    top : 20%;
    left: 45%;
    color: white; 

    &:hover {
        color: black;
        cursor: pointer;
    }
`;

const BrandName = styled.div`
    font-size: 40px;
    font-weight: 700;
`;

const Caption = styled.div`
    font-size: 20px;
    font-weight: 300;
`;




/**
 *  ------------------------- 컴포넌트 -----------------------
 */

const Home = () => {
    return(
        <>

        <Carousel fade>
        <Carousel.Item>
     
            <ImageContainer>
                <img
                style={{ height: "400px" }}
                className="d-block w-100"
                src="/img/나이키1.jpg"
                alt="First slide"
                />

                <ImageText>
                    <BrandName>NIKE</BrandName>
                    <Caption>click here to Category</Caption>
                </ImageText>

            </ImageContainer>
      
        </Carousel.Item>
        <Carousel.Item>
            <ImageContainer>
                <img
                style={{ height: "400px" }}
                className="d-block w-100"
                src="/img/뉴발란스1.jpg"
                alt="Second slide"
                />

                <ImageText2>
                    <BrandName>NEW BALANCE</BrandName>
                    <Caption>click here to Category</Caption>
                </ImageText2>

            </ImageContainer>
        </Carousel.Item>
        <Carousel.Item>
        <ImageContainer>
                <img
                style={{ height: "400px" }}
                className="d-block w-100"
                src="/img/반스3.jpeg"
                alt="Second slide"
                />

                <ImageText3>
                    <BrandName>VANS</BrandName>
                    <Caption>click here to Category</Caption>
                </ImageText3>

            </ImageContainer>
        </Carousel.Item>
        </Carousel>

        &nbsp;

        {/* 아이템 리스트 컴포넌트 호출 */}
        <ItemList></ItemList>

        &nbsp;

        {/* 보여지는 텍스트는 회원가입이지만, 클릭하면 이용약관 페이지로 이동 후 동의하면 회원가입 */}
        {/* <Link to="/Agree">회원가입</Link>
        <br/>
        <Link to="/Mypage">마이페이지</Link>
        <br/>
        <Link to="/ItemList">상품목록</Link>
        <br/>
        <Link to="/SiteInfo">사이트 소개</Link>
        <br />
        <Link to="/Cs">고객센터</Link>
        <br />
        <Link to="/Boards">커뮤니티</Link> */}
        </>
    )
}
export default Home;