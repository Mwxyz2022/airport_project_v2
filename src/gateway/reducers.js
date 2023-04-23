import { GET_ARRIVALS_LIST, GET_DEPARTURES_LIST } from './types'

const initialState = {
  flightsList: {
    departure: [],
    arrival: [],
  },
}

const flightsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DEPARTURES_LIST:
      return {
        ...state,
        flightsList: {
          ...state.flightsList,
          departure: action.payload.departureList,
        },
      }
    case GET_ARRIVALS_LIST:
      return {
        ...state,
        flightsList: {
          ...state.flightsList,
          arrival: action.payload.arrivalList,
        },
      }

    default:
      return state
  }
}

export default flightsListReducer
