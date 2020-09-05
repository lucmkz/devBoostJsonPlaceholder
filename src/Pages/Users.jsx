import React, { useEffect } from "react";

import { FiSearch } from "react-icons/fi";

import { Link } from "react-router-dom";

import { useContextApp } from "../Context/index";

import Card from "../Components/Card";

import Header from "../Components/Header";

const Users = () => {
  const { test, setTest } = useContextApp();

  useEffect(() => {
    console.log(test);
  }, [test]);

  return (
    <>
      <Header value="Users" />
      <Card
        name={"Mi"}
        tasksCompleted={30}
        tasksNotCompleted={10}
        taskTotal={20}
      />
      {/* <button onClick={() => setTest('oii')}>exemple state</button>
      <FiSearch size={40} color="#0ff"/>
      <button>
        <Link to="/tasks">{test}</Link>
      </button> */}
    </>
  );
};

export default Users;
