import * as types from './actionTypes'

export const startRegistration = () => ({
    type: types.START_REGISTRATION
  });

export const completeRegistration = () =>({
    type: types.COMPLETE_REGISTRATION
})

export const updateLocation = (value) => ({
  type: types.UPDATE_LOCATION,
  payload: value
})

export const updateArrivalDate = (value) => ({
  type: types.UPDATE_ARRIVAL_DATE,
  payload: value
})

export const updateDepartureDate = (value) => ({
  type: types.UPDATE_DEPARTURE_DATE,
  payload: value
})

export const submitSearch = () =>{
    return (dispatch, getState) => {
      const { location, latitude, longitude, arrivalDate, departureDate} = getState().dumbletour;
      // console.log(location)
      fetch('/api/search', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({location, latitude, longitude, arrivalDate, departureDate})
      })
      .then((res) => {
        console.log(res);
        return res.json()})
      .then(json => dispatch(receivedResults(json)));
    }
  }             




