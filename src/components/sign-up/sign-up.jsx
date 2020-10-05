import React from "react";

import FormInput from '../form-input/form-input';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import './sign-up.styles.scss';
import CostumButton from "../costum-button/costum-button";

class SignUp extends React.Component {
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("passwords don't match");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
            })
        } catch(error){
            console.error(error);
        }
    };

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({ [name]: value})
    }


    render() {
        const { displayName, email, password, confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not a have an account</h2>
                <span>sign up with your email and password</span>
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput 
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                        >
                    </FormInput>
                    <FormInput 
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='email'
                        required
                        >
                    </FormInput>
                    <FormInput 
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                        >
                    </FormInput>
                    <FormInput 
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                        >
                    </FormInput>
                    <CostumButton type='submit'>
                        SIGN UP
                    </CostumButton>
                </form>
            </div>
        )
    }
}

export default SignUp;