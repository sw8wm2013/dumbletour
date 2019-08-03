import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (store) => {
    return {

    }
};

const mapDispatchToProps = dispatch =>({

});


const MainBody = props =>(
    <div>
        <h1>Hello World</h1>
    </div>
)



export default connect(mapStateToProps, mapDispatchToProps) (MainBody);