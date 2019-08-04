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

    testBasicSearch(){
      fetch('/api/search', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({location : "MA", latitude: "999", longitude: "666", arrivalDate: "111", departureDate: "2222"})
      })
      .then(res => res.json())
      .then((res) => {
        console.log(res);
      })
    }

    render(){
        console.log('props in searchmodal:', this.props)
        return (
        <div>
          <form>
            <input type='text' value={this.props.location} onChange={(e) => this.props.handleKey(e)} placeholder='Where do you want to go?'></input>
            When do you want to arrive? <input type='date' value={this.props.arrivalDate} onChange={(e) => this.props.handleArrivalDate(e)}></input>
            When do you want to leave? <input type='date'value={this.props.departureDate} onChange={(e) => this.props.handleDepartureDate(e)}></input>
            {this.props.searchBoxIsOpen ? <button onClick={(e)=> this.props.submitSearch(e)}>Find me the cool shit!</button> : null}
            {/* {this.props.searchBoxIsOpen ? <button onClick={()=> this.testBasicSearch()}>Find me the cool shit!</button> : null} */}
          </form>
        </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchModal);