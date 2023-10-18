
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const user = useSelector((state) => state.user); 

  if (user) {

    return (
      <div>
        {}
        <h2>User's Todos</h2>
        {}
        <Link to="/add-todo">Add Todo</Link>
      </div>
    );
  } else {

    return (
      <div>
        {}
        <Link to="/sign-up">Sign Up</Link>
      </div>
    );
  }
};

export default Home;
