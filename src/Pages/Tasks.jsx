import React from 'react'

import { Link } from 'react-router-dom'


const Tasks = () => {
  return (
    <>
      <h1>Tasks</h1>
      <button>
        <Link to="/">
          User
        </Link>
      </button>
    </>
  )
}

export default Tasks;