import React from 'react'
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/Todos">Todos</Link>
        <Link to="/notfound">NotFound</Link>
        
      </nav>
      <h4>This is Home Page</h4>
    </div>
  )
}

export default Home;
