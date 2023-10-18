
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const AddTodo = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAddTodo = () => {

    dispatch({ type: 'ADD_TODO' });

    history.push('/');
  };

  return (
    <div>
      <h2>Add Todo</h2>
      {}
      <form onSubmit={handleAddTodo}>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Description" />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
