import React, { Component } from 'react';
import './sign-up.scss';

// components
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

// authorization
import { auth, createUserProfileDocument } from '../../firebase/firebase';

class SignUp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return
    }

    try {
      // creates a new user account in firebase with the provided email and password
      // { user } is being destructured because a "user auth" object is returned if created successfully and stored in the { user } key
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName });

      // resets state
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch (error) {
      console.error(error);
    }
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have a account</h2>
        <span>Sign Up with your email and password</span>

        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />

          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp;