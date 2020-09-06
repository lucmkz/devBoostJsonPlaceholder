import React, { useEffect, useState } from "react";

import { Link, useRouteMatch, Redirect } from "react-router-dom";
import Card from "../Components/Card";

import Header from "../Components/Header";
import Container from "../Components/Container";
import ContainerCard from "../Components/ContainerCard";
import { useContextApp } from "../Context/index";

const Tasks = () => {
  const { params } = useRouteMatch();
  const [tasksCompleteds, setCompleteds] = useState([]);
  const [tasksIncompleteds, setIncompleteds] = useState([]);

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
    usersComplete &&
      setSelectedUserTasks({
        incomplete: usersComplete[params.id - 1]?.incompletas,
        commpletes: usersComplete[params.id - 1]?.concluidas,
      });
  }, [usersComplete]);

  useEffect(() => {
    console.log(selectedUserTasks);
  }, [selectedUserTasks]);

  return (
    <>
      {usersComplete[0]?.incompletas ? (
        <Container >
          <Header value={"Tasks"} />
          <ContainerCard  >
            <div className="haha">

            <Card 
              typeCard={"TASKS"}
              name={"Tasks"}
              tasksNotCompleteds={
                selectedUserTasks && selectedUserTasks.incomplete
              }
              />
              </div>
            {
              <Card 
                typeCard={"DONE"}
                name={"Done"}
                tasksCompleteds={
                  selectedUserTasks && selectedUserTasks.commpletes
                }
              />
            }
          </ContainerCard>
        </Container>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default Tasks;
