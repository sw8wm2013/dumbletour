import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapStateToProps = (store) => ({
    searchBoxIsOpen: store.dumbletour.searchBoxIsOpen,
    location: store.dumbletour.location,
    arrivalDate: store.dumbletour.arrivalDate,
    departureDate: store.dumbletour.departureDate,
    longitude: store.dumbletour.longitude,
    latitude: store.dumbletour.latitude
});

const mapDispatchToProps = dispatch =>({
    handleKey:(e) => {
        dispatch(actions.updateLocation(e.target.value))
    },
    handleArrivalDate:(e) =>{
        dispatch(actions.updateArrivalDate(e.target.value))
    },

    handleDepartureDate: (e) =>{
        dispatch(actions.updateDepartureDate(e.target.value))
    },

    submitSearch: (e) => {
        e.preventDefault();
        dispatch(actions.submitSearch());
    }
})   

class SearchModal extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
        <div>
          {this.props.searchBoxIsOpen ? 
          <form>
            <input type='text' value={this.props.location} onChange={(e) => this.props.handleKey(e)} placeholder='Where do you want to go?'></input>
            When do you want to arrive? <input type='date' value={this.props.arrivalDate} onChange={(e) => this.props.handleArrivalDate(e)}></input>
            When do you want to leave? <input type='date'value={this.props.departureDate} onChange={(e) => this.props.handleDepartureDate(e)}></input>
            <button onClick={(e)=> this.props.submitSearch(e)}>Find me the cool shit!</button>
          </form>
          : null}
        </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchModal);