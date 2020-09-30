import React from 'react';

import FormInput from '../form-input/form-input'
import CostumButton from '../costum-button/costum-button'

import { SignInWithGoogle } from "../../firebase/firebase.utils"

import './sign-in.styles.scss'

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state= {
            email: '',
            password: '',
        };
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: ''})
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    };

    render(){
       return(
           <div className="sign-in">
               <h2>I already have an account</h2>
               <span>Sign in with your email and password</span>

               <form onSubmit={this.handleSubmit}>
                   <FormInput name="email" type="email" value={this.state.email} label="email" required/>
                   <FormInput name="password" type="password" value={this.state.email} handleChange={this.handleChange} label="password" required/>
                    <div className="buttons">
                        <CostumButton type="submit"> Sign in </CostumButton>
                        <CostumButton onClick={SignInWithGoogle} isGoogleSignIn> Sign in with Google</CostumButton>
                   </div>
               </form>
           </div>
       );
    }
}

export default SignIn;