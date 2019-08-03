import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import NavOptions from './NavOptions.jsx';


const mapStateToProps = (store) => {
    return {

    }
};

const mapDispatchToProps = dispatch =>({

});


const NavBar = props =>(
    <Fragment>
        <h1 id='logo'>Dumbletour</h1>
        <NavOptions/>
    </Fragment>
)

export default connect(mapStateToProps, mapDispatchToProps) (NavBar);