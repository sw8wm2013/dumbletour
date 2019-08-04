import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import SearchModal from './SearchModal.jsx'

const mapStateToProps = (store) => {
    return {

    }
};

const mapDispatchToProps = dispatch =>({

});



class MainBody extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <Fragment>
            <SearchModal />
        </Fragment>
        )
    }
 }



export default connect(mapStateToProps, mapDispatchToProps) (MainBody);