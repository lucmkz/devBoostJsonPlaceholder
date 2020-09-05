import React from 'react';
import {FiUser, FiFileText} from 'react-icons/fi';

import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png';
import { Aside } from './style';

const AsideMenu = () => {
  return (
    <Aside> 
      <img src={logo} alt="G6 - D Tasks"/>
      <div> <Link to="/"> <FiUser/> Users </Link> </div>
      <div> <Link to="/tasks" > <FiFileText/> Tasks </Link> </div>
      
    </Aside>
  )
}
export default AsideMenu;