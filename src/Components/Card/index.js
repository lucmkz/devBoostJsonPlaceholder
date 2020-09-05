import React, { useState } from "react";

import { FiChevronRight } from "react-icons/fi";

import { CardStyled, CardHeader, BodyCard } from "./style";

const Card = ({ name, tasksCompleted, tasksNotCompleted, taskTotal, typeCard }) => {

  console.log('Type', typeCard)
  const [expanslible, setExapansible] = useState(false);

  return (
    <CardStyled>
      {typeCard === "USERS" && (
        <>
          <CardHeader expanslible={expanslible}>
            <p>{name}</p>
            <FiChevronRight onClick={() => setExapansible(!expanslible)} />
          </CardHeader>
          {expanslible && (
            <>
              <BodyCard>
                <span>Tasks concluídas</span>
                {tasksCompleted}
              </BodyCard>
              <BodyCard>
                <span>Total não concluídas</span>
                {tasksNotCompleted}
              </BodyCard>
              <BodyCard>
                <span>Total das tasks</span>
                {taskTotal}
              </BodyCard>
            </>
          )}
        </>
      )}
    </CardStyled>
  );
};

export default Card;

// ${(props) =>
//   props.inactive &&
//   css`
//    background: #c53030;
//   `}
