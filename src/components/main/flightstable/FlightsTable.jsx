import React from 'react'
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux'

import './flighttable.scss'

import { terminalStyles } from './tableutils'

import * as flightListSelector from '../../../gateway/selectors'

const FlightsTable = ({ flightsDep, flightsArr }) => {
    const { pathname } = useLocation()
    let flightList = []
    let isDeparture = null

    if (pathname === '/departures' && flightsDep) {
        flightList = flightsDep
        isDeparture = true
    }

    if (pathname === '/arrivals' && flightsArr) {
        flightList = flightsArr
        isDeparture = false
    }

    return (
        <table className="flight-table">
            {flightList.length ? (
                <>
                    <thead>
                        <tr className="flight-table__line__header">
                            <th className="header__item terminal">Terminal</th>
                            <th className="header__item loctime">Local time</th>
                            <th className="header__item destination">Destination</th>
                            <th className="header__item airline">Airline</th>
                            <th className="header__item flight-num">Flight</th>
                        </tr>
                    </thead>
                    <tbody>
                        {flightList.map(flight => {
                            const term = isDeparture
                                ? flight.departure.terminal
                                : flight.arrival.terminal

                            const passTime = isDeparture
                                ? flight.departure.passengerLocalTime
                                : flight.arrival.passengerLocalTime

                            const destination = isDeparture
                                ? flight.arrival.airport.iata
                                : flight.departure.airport.iata

                            const airline = flight.carrierCode.icao

                            const { flightNumber } = flight

                            return (
                                <tr
                                    className="flight-table__line__info"
                                    key={flightNumber + passTime}
                                >
                                    <th className="flight-table__item terminal">
                                        <span
                                            className="flight-terminal"
                                            style={terminalStyles(term)}
                                        >
                                            {term}
                                        </span>
                                    </th>
                                    <th className="flight-table__item loctime">{passTime}</th>
                                    <th className="flight-table__item destination">
                                        {destination}
                                    </th>

                                    <th className="flight-table__item airline">
                                        <div className="airline__company">
                                            <span className="airline__company__title">
                                                {airline}
                                            </span>
                                        </div>
                                    </th>
                                    <th className="flight-table__item flight-num">
                                        <span>{flightNumber}</span>
                                    </th>
                                </tr>
                            )
                        })}
                    </tbody>
                </>
            ) : (
                <tbody className="nothing-found">
                    <tr>
                        <th>
                            <span>No Flight</span>
                        </th>
                    </tr>
                </tbody>
            )}
        </table>
    )
}

const mapState = state => ({
    flightsDep: flightListSelector.depFlightListSelector(state),
    flightsArr: flightListSelector.arrFlightListSelector(state),
})

export default connect(mapState, null)(FlightsTable)
