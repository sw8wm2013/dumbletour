import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainBody from './MainBody.jsx';
import NavBar from './NavBar.jsx';


const mapStateToProps = (store) => {
    return {

    }
};

const mapDispatchToProps = dispatch =>({

});


const Wrapper = props =>(
    <div>
        {/* <h1>Hello World</h1> */}
        <NavBar/> 
        <MainBody/>
    </div>
)

export default connect(mapStateToProps, mapDispatchToProps) (Wrapper);