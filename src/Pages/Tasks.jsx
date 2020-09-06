import React,{ useEffect, useState } from 'react'

import { Link, useRouteMatch } from 'react-router-dom'
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
  setUsersComplete
} = useContextApp();

useEffect(() => {  
  const tasksUser = usersComplete.filter(task => task.id == params.id)[0];
  const tasksCompleteds = tasksUser.tasks.filter(item => item.completed);
  console.log('tasksCompleteds', tasksCompleteds)
  const tasksIncompleteds = tasksUser.tasks.filter(item => !item.completed);
  setCompleteds(tasksCompleteds)
  setIncompleteds(tasksIncompleteds)
}, [usersComplete])

  return (
    <>
      <Container>
        <Header value={'Tasks'} />
        <ContainerCard>
            <Card typeCard={'TASKS'} name={'Tasks'}  tasksNotCompleteds={ tasksIncompleteds } />
            {<Card typeCard={'DONE'} name={'Done'}  tasksCompleteds={ tasksCompleteds }/>}
        </ContainerCard>        
      </Container>
    </>
  )
}

export default Tasks;