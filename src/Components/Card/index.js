import React, { useState, useEffect } from "react";

import { Link } from 'react-router-dom'

import { FiChevronRight, FiCircle, FiTrash2, FiPlus, FiX, FiCheck } from "react-icons/fi";

import { CardStyled, CardHeader, BodyCard, Container, LinkPage } from "./style";
import Tasks from "../../Pages/Tasks";

const Card = ({ name, tasksCompleted, tasksNotCompleted, taskTotal, typeCard, id, tasksCompleteds, tasksNotCompleteds }) => {

  const [expanslible, setExapansible] = useState(false);
  const [tasksC, setTasksC] = useState([]);
  const [tasksInc, setTasksInc] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  
  useEffect(() => { 
      setTasksC(tasksCompleteds);
  },[tasksCompleteds]);

  useEffect(() => { 
    setTasksInc(tasksNotCompleteds);
},[tasksNotCompleteds]);

const removeTask = (id, src)=>{
  let task = [];
  if(src === 'task' ){
     task = tasksInc.filter(task => task.id !== id);
     setTasksInc([...task]);
    }else{
      task = tasksC.filter(task => task.id !== id);
      setTasksC([...task]);
    }
  }
  
//   const addDoneTask = (itemTask)=>{
//     console.log('itemTask', itemTask)
//     // const task = tasksInc.filter(task => task.id !== itemTask.id);
//     // setTasksInc([...task]);
//     // const taskToRemove = tasksInc.filter(task => task.id === itemTask.id);
//     // console.log('tasksC', tasksC)
//     // setTasksC([...tasksC, ...taskToRemove])  
// }  

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
                <LinkPage><Link to={`/tasks/${id}`}> Ver Detalhes</Link ></LinkPage> 
              </>
            )}
          </>
        )}
        {typeCard === "TASKS" && (
          <>
           <CardHeader>
              <p>{name}</p>
            </CardHeader>
            {(
              <>
                       
              {   
                tasksInc?.map(task => (
                  <BodyCard key={ task.id } isFocused={isFocused} >
                    
                    <FiCircle onClick={() => setIsFocused(!isFocused)} color={'#FE3892'} />
                      <span>{task.title}</span>
                      <FiTrash2 onClick={()=> removeTask(task.id, 'task')} color={'#CFD7E3'} />
                  
                  </BodyCard>
                ))
              }
              
              </>
            )}
          </>
        )}

        
        {typeCard === "DONE" && (
          <>
           <CardHeader>
              <p>{name}</p>
            </CardHeader>
            {(
              <>
                
              {   
                tasksC?.map(task => (
                  <BodyCard key={ task.id }>
                    <FiCheck color={'#1ADC7F'}/><span>{task.title}</span><FiTrash2 onClick={()=> removeTask(task.id, 'done')} color={'#CFD7E3'} />
                  </BodyCard>
                ))
              }
              </>
            )}
          </>
        )}
      </CardStyled>
    </Container>
  );
};

export default Card;

// ${(props) =>
//   props.inactive &&
//   css`
//    background: #c53030;
//   `}
