import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import NavOptions from './NavOptions.jsx';


const mapStateToProps = (store) => ({
      
});

const mapDispatchToProps = dispatch =>({

});


const NavBar = props =>(
    <Fragment>
      <nav className="nav-bar">
        <h1 id='logo'>Dumbletour</h1>
        <NavOptions/>
     </nav>
    </Fragment>
)

export default connect(mapStateToProps, mapDispatchToProps) (NavBar);