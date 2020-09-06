import React, { useEffect, useState } from "react";

import { FiSearch } from "react-icons/fi";

import { Link } from "react-router-dom";

import { useContextApp } from "../Context/index";

import Card from "../Components/Card";

import Header from "../Components/Header";
import Container from "../Components/Container";
import CardList from "../Components/CardList";

import api from "../services";

const Users = () => {
  
  const {
    usersList,
    setUsersList,
    usersTasks,
    setUsersTasks,
    usersComplete, 
    setUsersComplete
  } = useContextApp();

  // Requisição nome de usuários
  useEffect(() => {
    const usersArr = [];

    (async function reqUsers() {
      for (let i = 1; i <= 10; i++) {
        usersArr.push(await api.get(`users/${i}`));
      }
      setUsersList(usersArr);
    })();
  }, []);

  // Requisição nome de usuários
  useEffect(() => {
    (async function reqUsers() {
      const taskList = await api.get(`todos`);
      setUsersTasks(taskList.data);
    })();
  }, []);

  useEffect(() => {
    if (usersList.length && usersTasks.length) {
      const arr = [];
      const ret = []
      usersList.forEach((element) => {
        const userTasks = usersTasks.filter(
          (iten) => iten.userId === element.data.id
        );
        arr.push({ name: element.data.name, id: element.data.id, tarefas: userTasks });
        
      });

      for (let i = 0; i < arr.length; i++) {
        const task = arr.filter((item) => item.tarefas);
        const taskComplete = task[i].tarefas.filter(item => item.completed)
        const taskIncomplete = task[i].tarefas.filter(item => !item.completed)
        const obj = {
          name: arr[i].name,
          concluidas: taskComplete,
          incompletas: taskIncomplete,
          total: task[i].tarefas,
          tasks: task[i].tarefas,
          id: arr[i].id
        };

        ret.push(obj)
      }
     
      setUsersComplete(ret)
    }
  }, [usersList, usersTasks]);

  return (
    <Container>
      <Header value="Users" />
      <CardList>
        {usersComplete &&
          usersComplete.map((user, index) => (
            <Card
              key={index}
              typeCard={"USERS"}
              name={user.name}
              tasksCompleted={user.concluidas.length}
              tasksNotCompleted={user.incompletas.length}
              taskTotal={user.total.length}
              id={user.id}
            />
          ))}
      </CardList>
    </Container>
  );
};

export default Users;
