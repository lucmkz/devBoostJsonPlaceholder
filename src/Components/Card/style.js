import styled, { css } from "styled-components";

import { darken } from "polished";

export const Container = styled.div`
  height: 200px;
  max-width: 660px;
  min-width: 370px;
`;

export const CardStyled = styled.div`
  background: #292f3f;
  border-radius: 10px;
  box-shadow: 10px 5px 5px black;
  padding: 20px 0;
  margin: 20px;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  font-size: 25px;

  p {
    color: #f2c94c;
    white-space: nowrap;
  }

  svg {
    color: #fe3892;
    transition: 0.3s;
  }

  svg:hover {
    cursor: pointer;
    color: ${darken(0.2, "#FE3892")};
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
  color: #cfd7e3;
  font-weight: 100;
  border-bottom: 1px solid;

  ${(props) =>
    props.expanslible &&
    css`
      svg {
        color: #f2c94c;
      }
    `}
`;

export const LinkPage = styled.span`
  justify-content: center;
  align-items: center;
  display: flex;
  margin-top: 10px;
  a {
    color: #fe3892;
    text-decoration: none;
    &:hover {
      cursor: pointer;
      color: ${darken(0.2, "#FE3892")};
    }
  }
  &:hover {
    cursor: pointer;
    color: ${darken(0.2, "#FE3892")};
  }
`;
