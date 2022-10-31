import React from 'react';
import styled from 'styled-components';

const StyledCscall = styled.div`
    width: 30rem;
    height: 30rem;
    background: cornflowerblue;
    border-radius: 50%;
    margin: -20px;
    position: relative;
    display: inline-block;
    margin: 0 auto;

`;

const StyledCstime = styled.div`
    width: 30rem;
    height: 30rem;
    background-color: skyblue;
    border-radius: 50%;
    margin: -20px;
    position: relative;
    display: inline-block;
    margin: 0 auto;
`;

const Cs = () => {
    return(
        <div>
        <StyledCscall>
        <p>깡깡</p>
        </StyledCscall>

        <StyledCstime/>
        </div>
    );
}

export default Cs;