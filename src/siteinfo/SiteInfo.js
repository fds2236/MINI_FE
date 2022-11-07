import styled from "styled-components";
import hasungwoon from '../siteinfo/images/하성운.png';
import itzy from '../siteinfo/images/있지.png';
import shoes from '../siteinfo/images/컨버스.png';
import map from '../siteinfo/images/지도.PNG';

// 도연 작업 완료


const Shoes = styled.img`
    width: 300px;
    height: 300px;
    margin-top: 10px;
`;

const Header = styled.div`
    background-color: #00ADB5;
    color: white;
    height: 500px;
    font-size: 100px;
    font-weight: bold;

`;

const Banner = styled.div`
    background-color: black;
    color: red;
    height: 850px;
    padding-top: 50px;
    font-size: 100px;
    font-weight: bold;
`;

const Artist = styled.div`
    color: #D4F4FA;
    height: 40px;
    font-size: 40px;
    font-style: italic;
    padding-top: 60px;
    
`;

const Comment = styled.div`
    width: 500px;
    height: 20px;
    color: white;
    font-size: medium;
    margin-left: 500px;
    margin-top: 20px;
    
`;

const Hasungwoon = styled.img`
    width: 300px;
    height: 300px;
    padding-bottom: 900px;
    margin-right: 60px;
    

    
`;

const Itzy = styled.img`
    width: 300px;
    height: 300px;
    padding-bottom: 900px;  
`;


const Footer = styled.div`
    background-color: #00ADB5;
    color: white;
    height: 500px;
    font-size: 20px;
    font-weight: bold;

    
`;


const B = styled.div`
    color: white;
    height: 10px;
    font-size: 40px;
    font-weight: bold;
    padding-top: 60px;
   
`;

const Map = styled.img`
    width: 500px;
    height: 250px;
    margin-top: 60px;
    
`;


const SiteInfo = () => {

    return(
        <>
         <div className="container">
            <Header><Shoes className="shoes" alt="shoes" src={shoes} />슈즈의 기준, Sa Shoe</Header>
            <Banner>Sa Shoe Show Room<br/> 12월 24일 OPEN<br/><Artist>초대 손님: 가수 하성운 님, 가수 있지 님<Comment>하성운 - Sneakers MV / ITZY - Sneakers MV 中 (Sa Shoe 협찬 상품)</Comment></Artist><br/>
            <Hasungwoon alt="hasungwoon" src={hasungwoon} /><Itzy alt="itzy" src={itzy} /><br/></Banner>
            <Footer><B>오시는 길</B><Map className="map" alt="map" src={map} /><br/>장소: 서울시 강남구 테헤란로 14길 6 남도빌딩 3층<br/>담당자: 김도연 / 전화: 02-123-4567</Footer>
        
        </div>
        </>
    )
}

export default SiteInfo;