import styled, { css } from "styled-components";

import { darken } from 'polished'

export const CardStyled = styled.div`
  background: #292f3f;
  border-radius: 10px;
  width: 400px;
  box-shadow: 10px 5px 5px black;
  padding: 20px 0;
`;

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    font-size: 40px;

  p{
    color: #F2C94C;
  }

  svg {
    color: #FE3892;
    transition: 0.3s;
  }

  svg:hover{
    cursor: pointer;
    color: ${darken(0.2, '#FE3892')}
  }

   ${(props) =>
   props.expanslible &&
   css`
   svg {
     transform: rotate(90deg);
   }
  `}

`;

export const BodyCard = styled.div`
transition: 0.3s;
display: flex;
    justify-content: space-between;
    margin: 5px 30px;
    font-size: 20px;
    color: #CFD7E3;
    font-weight: 100;
    border-bottom: 1px solid;
`
