import React, { Component } from 'react';
import './sign-in.scss';

// components
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { auth, signInWithGoogle } from '../../firebase/firebase';

class SignIn extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try{
      await auth.signInWithEmailAndPassword(email, password);
      
      // reset state
      this.setState({email: '', password: ''});
    } catch (error) {
      console.error(error);
    }
  }
  
  handleChange = event => {
    const { value, name } = event.target;

    this.setState({[name]: value});
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            label='email'
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />

          <FormInput
            name='password'
            type='password'
            label='password'
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />

          <div className='buttons-container'>
            <CustomButton type='submit'>
              Sign In
            </CustomButton>

            {/* isGoogleSignIn automatically passes a value of 'true' if nothing is assigned to it (the boolean is needed for button styling purposes) */}
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;
