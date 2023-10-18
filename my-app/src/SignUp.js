
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSignUp = () => {

    dispatch({ type: 'SIGN_UP' });

    history.push('/');
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {}
      <form onSubmit={handleSignUp}>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
