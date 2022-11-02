import React from 'react';
import styled from 'styled-components';

const StyledCs = styled.div`
    color: white;
    // 글자 센터
    text-align: center;
    // // 혹시모를 margin padding 초기화
    // margin: 0;
    // padding: 0;
    // margin 0 auto 는 중간 정렬용
    margin: 0 auto;
    // 전체 크기 잡기용 width height
    width: 1000px;
    height: 1000px;

    div{
        // 글자를 div로 묶어서 하나의 덩어리로 만들기
        // relative 속성으로 div 가 C1,C2 의 상대값으로 작동
        position: relative;
        // 글자 높이용 top
        top: 10%;
    }
`;

const StyledCscall = styled.div`
    width: 30rem;
    height: 30rem;
    background: rgba(0, 173, 181, 0.5);
    border-radius: 50%;
    display: inline-block;
    margin-right: -20px;
    .call {
        color:#fff;
        font-size: 50px;
        font-weight: bold;
        text-align: center;
        
    }
`;

const StyledCstime = styled.div`
    width: 30rem;
    height: 30rem;
    background-color: rgba(0, 140, 181, 0.5);
    border-radius: 50%;
    display: inline-block;
    margin-left: -20px;
    .wktime {
        color:#fff;
        font-size: 50px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 35.5px;
    }
`;

const Cs = () => {
    return(
        <StyledCs>
            <StyledCscall>
            <div>
                <p className='call'><br/>☎️<br/>고객센터<br/></p>
                <p className='call'>02) 1234 - 5678</p><br/>
            </div>
            </StyledCscall>
            
            <StyledCstime>
            <div>
                <p className='wktime'><br/>🕘<br/>업무시간<br/></p>
                <p className='wktime'>평일 09:00 ~ 18:00</p><br/>
            </div>
            </StyledCstime>    
        </StyledCs>
    );
}

export default Cs;