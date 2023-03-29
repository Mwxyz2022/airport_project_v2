import { GET_DEPARTURES_LIST, GET_ARRIVALS_LIST } from './actions'

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

// FOR API Airport Sikorsky

// import { GET_FLIGHTS_LIST } from './actions'

// const initialState = {
//     flightsList: [],
// }

// const flightsListReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case GET_FLIGHTS_LIST:
//             return {
//                 ...state,
//                 flightsList: action.payload.flightsList,
//             }
//         default:
//             return state
//     }
// }

// export default flightsListReducer
