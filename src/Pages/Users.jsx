import React, { useEffect } from "react";

import { FiSearch } from "react-icons/fi";

import { Link } from "react-router-dom";

import { useContextApp } from "../Context/index";

import Card from "../Components/Card";

import Header from "../Components/Header";

import api from '../services'

const Users = () => {
  const {usersList, setUsersList} = useContextApp();

  useEffect(() => {

    console.log('oioio')
    // (async function reqUsers (){
      // for (let i = 0; i < 10; i++) {
      //   const aa = await api.get(`users/${i}`)
      //   console.log(aa)
      // }
    // })()

  }, []);

  return (
    <>
      <Header value="Users" />
      <Card
        typeCard={'USERS'}
        name={"Mi"}
        tasksCompleted={30}
        tasksNotCompleted={10}
        taskTotal={20}
      />
    </>
  );
};

export default Users;
