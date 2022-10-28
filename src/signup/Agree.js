import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect }  from "react";

// 도연 작업 중

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 100px;
`;

const ItemBox = styled.div`
    width: 600px;
    height: 800px;
    background-color: #EEEEEE;
    margin: 10px;
    padding: 20px 20px 20px 20px;
    text-align: left;
    border-style: groove;
`;

const JoinUs = styled.div`
    background-color: #00ADB5;
    color: aliceblue;
    font-size: xx-large;
    font-weight: bold;
    width: 150px;
    height: 50px;
    border-radius: 10px;
    margin: 0 0 10px 180px;
    display: block;
    text-align: center;
`;

const Comments = styled.p`
    color: red;
    font-size: 13px;
    margin: 0 0 10px 110px;
`;

const Item = styled.div`
    background-color: white;
    padding: 5px 15px 30px 15px;
    height: 650px;
    
`;

// const Check1 = styled.div`
//     margin-top: 10px;
//     font-size: 15px;
//     font-weight: bold;
// `; 

const JoinUsBtn = styled.button`
    background-color: black;

`;

const Agree = () => {
    
// 약관동의 체크박스 기능 구현

const [allCheck, setAllCheck] = useState(false); // 모두 체크, 기본값은 체크안된상태
const [ageCheck, setAgeCheck] = useState(false); // 나이 체크
const [useCheck, setUseCheck] = useState(false); // 이용약관 체크
const [marketingCheck, setMarketingCheck] = useState(false); // 마케팅 체크



// 전체동의 체크하면 항목 3개 모두 체크됨
// 전체동의 체크 해제하면 항목 3개 모두 체크 취소됨
const allBtnEvent = (e) => {
      setAllCheck(e.target.checked);
      setAgeCheck(e.target.checked);
      setUseCheck(e.target.checked);
      setMarketingCheck(e.target.checked);
  };
  

  // 만 14세 이상 체크
  const ageBtnEvent = (e) => {
      setAgeCheck(e.target.checked);
  };
  
  // 이용약관 체크
  const useBtnEvent = () => {
    if(useCheck === true) {
      setUseCheck(true)
    } else {
      setUseCheck(false)
    }
  };
  
  // 마케팅 동의 체크
  const marketingBtnEvent = () =>{
    if(marketingCheck === true) {
      setMarketingCheck(true)
    }else {
      setMarketingCheck(false)
    }
  };

  // 항목 3개가 모두 체크되면 전체동의가 자동으로 체크됨
    useEffect(() => {
        if(ageCheck === true && useCheck === true && marketingCheck === true) {
          setAllCheck(true)
        } else {
          setAllCheck(false)
        }
      }, [ageCheck, useCheck, marketingCheck]);


    return(
        <>
        <Link to='/'>🏠홈으로 이동🏠</Link><br />
        <Link to='/SignUp'>회원가입</Link><br />
        <Container>
            <ItemBox>
                <JoinUs>JOIN US</JoinUs>
                <Comments>👟Sa Shoe 회원가입 하고 예쁜 신발 Sa Shoe~👟 </Comments>
                    <div>
                        <input type="checkbox" value={allCheck} checked={allCheck} onClick={allBtnEvent} />
                        <label for="allCheck">전체 약관에 동의합니다.</label>
                    </div>
                <Item>
                    <div>
                        <input type="checkbox" value={ageCheck} checked={ageCheck} onClick={ageBtnEvent}/>
                        <label for="check1">만 14세 이상입니다. <span>(필수)</span></label>
                    </div>
                    <div>
                        <input type="checkbox" value={useCheck} checked={useCheck}  onClick={useBtnEvent}/>
                        <label for="check2">이용 약관에 동의합니다. <span >(필수)</span></label>
                    </div>
                    <div>
                        <input type="checkbox" value={marketingCheck} checked={marketingCheck}  onClick={marketingBtnEvent}/>
                        <label for="check3">마케팅 활용 약관에 동의합니다. <span>(선택)</span></label>
                    </div>
                    <JoinUsBtn><NavLink to='/SignUp' style={({ isActive }) => ({ color: isActive ? 'black' : 'white' })}>회원가입</NavLink></JoinUsBtn>            
                </Item>
            </ItemBox>
        </Container>
        </>
    );
}
export default Agree;