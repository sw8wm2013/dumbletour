import React, { Component, Fragment } from 'react';
import RegisterModal from './RegisterModal.jsx';


const Register = props =>(
    <div>
        <button onClick={()=>props.startRegistration()}>Register</button>
        <RegisterModal completeRegistration={props.completeRegistration}>
            <form>
                <input placeholder='Sign In With Google'></input>
            </form>
        </RegisterModal>
    </div>
)


export default Register;