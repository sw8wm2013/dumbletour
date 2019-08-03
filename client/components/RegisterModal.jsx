import React, { Component, Fragment } from 'react';

const RegisterModal = props =>(
    <Fragment>
        <button onClick={()=>props.completeRegistration()}>X</button>
    </Fragment>
)


export default RegisterModal;