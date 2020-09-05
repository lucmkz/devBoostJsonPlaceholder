import React from 'react'

import { CardStyled, Exemplo } from './style'

const Card = () => {
  return (
    <CardStyled inactive={false}>
      <Exemplo>
        Teste
      </Exemplo>
    </CardStyled>
  )
}

export default Card;