import styled, {css} from 'styled-components'

export const CardStyled = styled.div`
  width: 200px;
  height: 200px;
  border-radius;
  background: #fff;

  ${(props) =>
    props.inactive &&
    css`
     background: #c53030;
    `}


`
export const Exemplo = styled.p`
  color: pink;

`

