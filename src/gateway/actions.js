import moment from 'moment'
import * as flightsGateway from './gateway'
import { GET_ARRIVALS_LIST, GET_DEPARTURES_LIST } from './types'

const departuresListRecieved = departureList => {
  const action = {
    type: GET_DEPARTURES_LIST,
    payload: {
      departureList,
    },
  }
  return action
}

const arrivalsListRecieved = arrivalList => {
  const action = {
    type: GET_ARRIVALS_LIST,
    payload: {
      arrivalList,
    },
  }
  return action
}

export const getFlightsList = (searchText, searchDate) => {
  const thunkAction = function (dispatch) {
    const dateForFetch = searchDate.split('-').reverse().join('-') || moment().format('YYYY-MM-DD')

    flightsGateway
      .fetchDeparturesListData(dateForFetch)
      .then(departureList => {
        const filteredDepartureList = departureList.filter(flight => {
          const flightNum = flight.flightNumber.toString().toLowerCase()
          const destination = flight.arrival.airport.iata.toLowerCase()
          const airline = flight.carrierCode.icao.toLowerCase()

          return (
            flightNum.includes(searchText.toLowerCase()) ||
            destination.includes(searchText.toLowerCase()) ||
            airline.includes(searchText.toLowerCase())
          )
        })
        return filteredDepartureList
      })
      .then(departuresList => dispatch(departuresListRecieved(departuresList)))
      .catch(error => {
        throw new Error(error.message)
      })

    flightsGateway
      .fetchArrivalsListData(dateForFetch)
      .then(arrivalList => {
        const filteredArrivalList = arrivalList.filter(flight => {
          const flightNum = flight.flightNumber.toString().toLowerCase()
          const destination = flight.departure.airport.iata.toLowerCase()
          const airline = flight.carrierCode.icao.toLowerCase()

          return (
            flightNum.includes(searchText.toLowerCase()) ||
            destination.includes(searchText.toLowerCase()) ||
            airline.includes(searchText.toLowerCase())
          )
        })
        return filteredArrivalList
      })
      .then(arrivalsList => dispatch(arrivalsListRecieved(arrivalsList)))
      .catch(error => {
        console.error(error.message)
        alert(error.message)
      })
  }

  return thunkAction
}
