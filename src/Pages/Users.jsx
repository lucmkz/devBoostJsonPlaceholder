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
  const [ usersComplete, setUsersComplete ] = useState([]);


  const {
    usersList,
    setUsersList,
    usersTasks,
    setUsersTasks,
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
        arr.push({ name: element.data.name, tarefas: userTasks });
      });

      for (let i = 0; i < arr.length; i++) {
        const task = arr.filter((item) => item.tarefas);
        const taskComplete = task[i].tarefas.filter(item => item.completed)
        const taskIncomplete = task[i].tarefas.filter(item => !item.completed)
        const obj = {
          name: arr[i].name,
          concluidas: taskComplete.length,
          incompletas: taskIncomplete.length,
          total: task[i].tarefas.length
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
              tasksCompleted={user.concluidas}
              tasksNotCompleted={user.incompletas}
              taskTotal={user.total}
            />
          ))}
      </CardList>
    </Container>
  );
};

export default Users;
