import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Register from './Register.jsx';
import * as actions from '../actions/actions.js';


const mapStateToProps = store => ({
    registrationIsOpen: store.dumbletour.registrationIsOpen,
});



const mapDispatchToProps = dispatch =>({
    startRegistration: e => dispatch(actions.startRegistration()),
    completeRegistration: e => dispatch(actions.completeRegistration())
});

class NavOptions extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Fragment>
            {/* <Register startRegistration={this.props.startRegistration} completeRegistration={this.props.completeRegistration}/> */}
            {/* <Login/>
            <Itinerary/>
            <Cart/> */}
        </Fragment>
        )
    }
 }

export default connect(mapStateToProps, mapDispatchToProps)(NavOptions);