import React, { useState, useEffect, useCallback } from "react";

import { Link } from "react-router-dom";

import {
  FiChevronRight,
  FiCircle,
  FiTrash2,
  FiCheck,
} from "react-icons/fi";

import { CardStyled, CardHeader, BodyCard, Container, LinkPage } from "./style";

import { useContextApp } from "../../Context";

const Card = ({
  name,
  tasksCompleted,
  tasksNotCompleted,
  taskTotal,
  typeCard,
  id,
  tasksCompleteds,
  tasksNotCompleteds,
}) => {
  const [expanslible, setExapansible] = useState(false);
  const [tasksC, setTasksC] = useState([]);
  const [tasksInc, setTasksInc] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const {
    usersList,
    setUsersList,
    usersTasks,
    setUsersTasks,
    usersComplete,
    setUsersComplete,
    selectedUserTasks,
    setSelectedUserTasks,
  } = useContextApp();

  useEffect(() => {
    setTasksC(tasksCompleteds);
  }, [tasksCompleteds]);

  useEffect(() => {
    setTasksInc(tasksNotCompleteds);
  }, [tasksNotCompleteds]);

  const removeTask = (id) => {
    setSelectedUserTasks({
      incomplete: selectedUserTasks.incomplete.filter(i => i.id !== id),
      commpletes: selectedUserTasks.commpletes.filter(i => i.id !== id)
    })
  };

  const incompleteToComplete = useCallback((id) => {
    const task = selectedUserTasks.incomplete.find(e => e.id === id)
    setSelectedUserTasks({
      incomplete: selectedUserTasks.incomplete.filter(i => i.id !== id),
      commpletes: [...selectedUserTasks.commpletes, task]
    })
  })

  return (
    <Container>
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
                <LinkPage>
                  <Link to={`/tasks/${id}`}> Ver Detalhes</Link>
                </LinkPage>
              </>
            )}
          </>
        )}
        {typeCard === "TASKS" && (
          <>
            <CardHeader>
              <p>{name}</p>
            </CardHeader>
            {
              <>
                {tasksInc?.map((task) => (
                  <BodyCard key={task.id} isFocused={isFocused} >
                    <FiCircle
                      onClick={() => incompleteToComplete(task.id)}
                      color={"#FE3892"}
                    />
                    <span>{task.title}</span>
                    <FiTrash2
                      onClick={() => removeTask(task.id)}
                      color={"#CFD7E3"}
                    />
                  </BodyCard>
                ))}
              </>
            }
          </>
        )}

        {typeCard === "DONE" && (
          <>
            <CardHeader>
              <p>{name}</p>
            </CardHeader>
            {
              <>
                {tasksC?.map((task) => (
                  <BodyCard key={task.id}>
                    <FiCheck color={"#1ADC7F"} />
                    <span>{task.title}</span>
                    <FiTrash2
                      onClick={() => removeTask(task.id, "done")}
                      color={"#CFD7E3"}
                    />
                  </BodyCard>
                ))}
              </>
            }
          </>
        )}
      </CardStyled>
    </Container>
  );
};

export default Card;
