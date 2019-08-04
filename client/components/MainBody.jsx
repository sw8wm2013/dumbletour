import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import SearchModal from './SearchModal.jsx'
import ResultCard from './ResultCard.jsx'

const mapStateToProps = (store) => ({
  searchBoxIsOpen: store.dumbletour.searchBoxIsOpen,
  location: store.dumbletour.location,
  arrivalDate: store.dumbletour.arrivalDate,
  departureDate: store.dumbletour.departureDate,
  searchResults: store.dumbletour.searchResults,
});

const mapDispatchToProps = dispatch =>({

})  

class MainBody extends Component{
    constructor(props){
        super(props);
    }
//"http://via.placeholder.com/300x300"
    render(){
        // transform raw results into jsx tags
        const resultCards = this.props.searchResults.map( (r) => {
          return <ResultCard  key={r.name} 
                              imgUrl={r.imgUrl}
                              name={r.name} 
                              price={r.price}
                              www={r.www}
                              ig={r.ig}/>;
        });

        return(
        <div>
          <Fragment>
            <SearchModal />
          </Fragment>
          {resultCards}
        </div>
        )
    }
 }

export default connect(mapStateToProps, mapDispatchToProps) (MainBody);