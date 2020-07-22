import React from 'react';
import './signin-signup.scss';

// components
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

const SignInAndSignUp = () => {
  return (
    <div className='sign-in-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInAndSignUp;

