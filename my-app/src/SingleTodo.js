
import React from 'react';
import { useParams } from 'react-router-dom';

const SingleTodo = () => {
  const { todoId } = useParams(); 

  return (
    <div>
      {}
      <h2>Todo Details</h2>
      <p>Title: {todoId}</p>
      <p>Description: Description of the todo</p>
    </div>
  );
};

export default SingleTodo;
