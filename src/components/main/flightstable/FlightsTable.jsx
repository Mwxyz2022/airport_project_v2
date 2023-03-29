import React from 'react'
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux'

import moment from 'moment'

import './flighttable.scss'

import { terminalStyles, getFlightStatus } from './tableutils'

import * as flightListSelector from '../../../gateway/selectors'

// API https://rapidapi.com/oag-oag-default/api/flight-info-api/
// date 2021-12-12
const flightListDEMO = {
    departure: [
        {
            carrierCode: {
                iata: 'LO',
                icao: 'LOT',
            },
            serviceSuffix: '',
            flightNumber: 756,
            sequenceNumber: 1,
            flightType: 'Scheduled',
            departure: {
                airport: {
                    iata: 'IEV',
                },
                terminal: '0',
                date: '2021-12-12',
                passengerLocalTime: '05:40',
            },
            arrival: {
                airport: {
                    iata: 'WAW',
                },
                terminal: '',
                date: '2021-12-12',
                passengerLocalTime: '06:20',
            },
            aircraftType: {
                iata: 'E90',
            },
            serviceTypeCode: {
                iata: 'J',
            },
            segmentInfo: {
                numberOfStops: 0,
                intermediateAirports: {
                    iata: [],
                },
            },
            oagFingerprint: '9b44e26d577668a04d4106494634eb750f0745d59ac7b7ae6b4b0174281d801a',
            codeshare: {
                jointOperationAirlineDesignators: [],
                comments010: [],
            },
        },
        {
            carrierCode: {
                iata: 'W6',
                icao: 'WZZ',
            },
            serviceSuffix: '',
            flightNumber: 6115,
            sequenceNumber: 1,
            flightType: 'Scheduled',
            departure: {
                airport: {
                    iata: 'IEV',
                },
                terminal: 'A',
                date: '2021-12-12',
                passengerLocalTime: '06:10',
            },
            arrival: {
                airport: {
                    iata: 'NUE',
                },
                terminal: '',
                date: '2021-12-12',
                passengerLocalTime: '07:35',
            },
            aircraftType: {
                iata: '320',
            },
            serviceTypeCode: {
                iata: 'J',
            },
            segmentInfo: {
                numberOfStops: 0,
                intermediateAirports: {
                    iata: [],
                },
            },
            oagFingerprint: 'dc228fd848c321b7862ae2487c755cc4b0a2a5e5c6bed6d07a9ac0f905b0279f',
            codeshare: {
                jointOperationAirlineDesignators: [],
                comments010: [],
            },
        },
        {
            carrierCode: {
                iata: 'W6',
                icao: 'WZZ',
            },
            serviceSuffix: '',
            flightNumber: 6127,
            sequenceNumber: 1,
            flightType: 'Scheduled',
            departure: {
                airport: {
                    iata: 'IEV',
                },
                terminal: 'A',
                date: '2021-12-12',
                passengerLocalTime: '06:20',
            },
            arrival: {
                airport: {
                    iata: 'VIE',
                },
                terminal: '0',
                date: '2021-12-12',
                passengerLocalTime: '07:20',
            },
            aircraftType: {
                iata: '320',
            },
            serviceTypeCode: {
                iata: 'J',
            },
            segmentInfo: {
                numberOfStops: 0,
                intermediateAirports: {
                    iata: [],
                },
            },
            oagFingerprint: '733cd7bef7bf55c9134ffd773cf87eda35378bc1723e6528ed06f2ed1e60da0c',
            codeshare: {
                jointOperationAirlineDesignators: [],
                comments010: [],
            },
        },
        {
            carrierCode: {
                iata: '7B',
                icao: 'UBE',
            },
            serviceSuffix: '',
            flightNumber: 103,
            sequenceNumber: 1,
            flightType: 'Scheduled',
            departure: {
                airport: {
                    iata: 'IEV',
                },
                terminal: 'A',
                date: '2021-12-12',
                passengerLocalTime: '07:25',
            },
            arrival: {
                airport: {
                    iata: 'ODS',
                },
                terminal: '',
                date: '2021-12-12',
                passengerLocalTime: '08:25',
            },
            aircraftType: {
                iata: '738',
            },
            serviceTypeCode: {
                iata: 'J',
            },
            segmentInfo: {
                numberOfStops: 0,
                intermediateAirports: {
                    iata: [],
                },
            },
            oagFingerprint: '0ffa74871c3f6cec3a389135f1453c1e893d4442998a6512563e0ffd22314780',
            codeshare: {
                jointOperationAirlineDesignators: [],
                comments010: [],
            },
        },
        {
            carrierCode: {
                iata: 'W6',
                icao: 'WZZ',
            },
            serviceSuffix: '',
            flightNumber: 2474,
            sequenceNumber: 1,
            flightType: 'Scheduled',
            departure: {
                airport: {
                    iata: 'IEV',
                },
                terminal: 'A',
                date: '2021-12-12',
                passengerLocalTime: '09:35',
            },
            arrival: {
                airport: {
                    iata: 'BUD',
                },
                terminal: '2B',
                date: '2021-12-12',
                passengerLocalTime: '10:20',
            },
            aircraftType: {
                iata: '32Q',
            },
            serviceTypeCode: {
                iata: 'J',
            },
            segmentInfo: {
                numberOfStops: 0,
                intermediateAirports: {
                    iata: [],
                },
            },
            oagFingerprint: '396c23c2282ad6af09825600d12840b9480fef02049369f4b9e6af19046e70c1',
            codeshare: {
                jointOperationAirlineDesignators: [],
                comments010: [],
            },
        },
        {
            carrierCode: {
                iata: 'W6',
                icao: 'WZZ',
            },
            serviceSuffix: '',
            flightNumber: 1568,
            sequenceNumber: 1,
            flightType: 'Scheduled',
            departure: {
                airport: {
                    iata: 'IEV',
                },
                terminal: 'A',
                date: '2021-12-12',
                passengerLocalTime: '09:45',
            },
            arrival: {
                airport: {
                    iata: 'WAW',
                },
                terminal: '',
                date: '2021-12-12',
                passengerLocalTime: '10:15',
            },
            aircraftType: {
                iata: '32Q',
            },
            serviceTypeCode: {
                iata: 'J',
            },
            segmentInfo: {
                numberOfStops: 0,
                intermediateAirports: {
                    iata: [],
                },
            },
            oagFingerprint: '37b1716fcf4c3b8d8cc166e56d894b290a58afea3d8892c5ba2efbac1650f819',
            codeshare: {
                jointOperationAirlineDesignators: [],
                comments010: [],
            },
        },
        {
            carrierCode: {
                iata: 'W6',
                icao: 'WZZ',
            },
            serviceSuffix: '',
            flightNumber: 6049,
            sequenceNumber: 1,
            flightType: 'Scheduled',
            departure: {
                airport: {
                    iata: 'IEV',
                },
                terminal: 'A',
                date: '2021-12-12',
                passengerLocalTime: '11:30',
            },
            arrival: {
                airport: {
                    iata: 'NAP',
                },
                terminal: '',
                date: '2021-12-12',
                passengerLocalTime: '13:15',
            },
            aircraftType: {
                iata: '320',
            },
            serviceTypeCode: {
                iata: 'J',
            },
            segmentInfo: {
                numberOfStops: 0,
                intermediateAirports: {
                    iata: [],
                },
            },
            oagFingerprint: 'b198973bbee99b5dc0b6bcbe06f0f439fc3f777b3e924b4dcc086aca15f10f98',
            codeshare: {
                jointOperationAirlineDesignators: [],
                comments010: [],
            },
        },
        {
            carrierCode: {
                iata: 'W6',
                icao: 'WZZ',
            },
            serviceSuffix: '',
            flightNumber: 6285,
            sequenceNumber: 1,
            flightType: 'Scheduled',
            departure: {
                airport: {
                    iata: 'IEV',
                },
                terminal: 'A',
                date: '2021-12-12',
                passengerLocalTime: '13:30',
            },
            arrival: {
                airport: {
                    iata: 'TLL',
                },
                terminal: '',
                date: '2021-12-12',
                passengerLocalTime: '15:50',
            },
            aircraftType: {
                iata: '320',
            },
            serviceTypeCode: {
                iata: 'J',
            },
            segmentInfo: {
                numberOfStops: 0,
                intermediateAirports: {
                    iata: [],
                },
            },
            oagFingerprint: '3e7f9a370a488ae469083fe50b066245a52f9400f102a9665a98b7f6dafd258f',
            codeshare: {
                jointOperationAirlineDesignators: [],
                comments010: [],
            },
        },
        {
            carrierCode: {
                iata: '7B',
                icao: 'UBE',
            },
            serviceSuffix: '',
            flightNumber: 301,
            sequenceNumber: 1,
            flightType: 'Scheduled',
            departure: {
                airport: {
                    iata: 'IEV',
                },
                terminal: 'A',
                date: '2021-12-12',
                passengerLocalTime: '14:40',
            },
            arrival: {
                airport: {
                    iata: 'EVN',
                },
                terminal: '',
                date: '2021-12-12',
                passengerLocalTime: '19:20',
            },
            aircraftType: {
                iata: '738',
            },
            serviceTypeCode: {
                iata: 'J',
            },
            segmentInfo: {
                numberOfStops: 0,
                intermediateAirports: {
                    iata: [],
                },
            },
            oagFingerprint: 'ebdb93505052b77e0e89980bd7913734b1b917bb5615504a1c6379922e346fad',
            codeshare: {
                jointOperationAirlineDesignators: [],
                comments010: [],
            },
        },
        {
            carrierCode: {
                iata: 'W6',
                icao: 'WZZ',
            },
            serviceSuffix: '',
            flightNumber: 6289,
            sequenceNumber: 1,
            flightType: 'Scheduled',
            departure: {
                airport: {
                    iata: 'IEV',
                },
                terminal: 'A',
                date: '2021-12-12',
                passengerLocalTime: '14:45',
            },
            arrival: {
                airport: {
                    iata: 'POZ',
                },
                terminal: '',
                date: '2021-12-12',
                passengerLocalTime: '15:35',
            },
            aircraftType: {
                iata: '320',
            },
            serviceTypeCode: {
                iata: 'J',
            },
            segmentInfo: {
                numberOfStops: 0,
                intermediateAirports: {
                    iata: [],
                },
            },
            oagFingerprint: '35615616ea0cfd04150b1b08e953277e6ccfc8052cbb735868f6f97c1447b34f',
            codeshare: {
                jointOperationAirlineDesignators: [],
                comments010: [],
            },
        },
        {
            carrierCode: {
                iata: 'W6',
                icao: 'WZZ',
            },
            serviceSuffix: '',
            flightNumber: 6113,
            sequenceNumber: 1,
            flightType: 'Scheduled',
            departure: {
                airport: {
                    iata: 'IEV',
                },
                terminal: 'A',
                date: '2021-12-12',
                passengerLocalTime: '17:55',
            },
            arrival: {
                airport: {
                    iata: 'BER',
                },
                terminal: '0',
                date: '2021-12-12',
                passengerLocalTime: '19:10',
            },
            aircraftType: {
                iata: '320',
            },
            serviceTypeCode: {
                iata: 'J',
            },
            segmentInfo: {
                numberOfStops: 0,
                intermediateAirports: {
                    iata: [],
                },
            },
            oagFingerprint: '1ee23b98a0f612e690719f411a75b13de80cbe9aeb96f2273a77d9b6f08e1682',
            codeshare: {
                jointOperationAirlineDesignators: [],
                comments010: [],
            },
        },
        {
            carrierCode: {
                iata: '7B',
                icao: 'UBE',
            },
            serviceSuffix: '',
            flightNumber: 321,
            sequenceNumber: 1,
            flightType: 'Scheduled',
            departure: {
                airport: {
                    iata: 'IEV',
                },
                terminal: 'A',
                date: '2021-12-12',
                passengerLocalTime: '18:00',
            },
            arrival: {
                airport: {
                    iata: 'TBS',
                },
                terminal: '',
                date: '2021-12-12',
                passengerLocalTime: '22:40',
            },
            aircraftType: {
                iata: '738',
            },
            serviceTypeCode: {
                iata: 'J',
            },
            segmentInfo: {
                numberOfStops: 0,
                intermediateAirports: {
                    iata: [],
                },
            },
            oagFingerprint: 'eb04f8cced2dbf629c5c0a8d97b55197071bf6833972ae984722a354d33af267',
            codeshare: {
                jointOperationAirlineDesignators: [],
                comments010: [],
            },
        },
        {
            carrierCode: {
                iata: 'W6',
                icao: 'WZZ',
            },
            serviceSuffix: '',
            flightNumber: 6265,
            sequenceNumber: 1,
            flightType: 'Scheduled',
            departure: {
                airport: {
                    iata: 'IEV',
                },
                terminal: 'A',
                date: '2021-12-12',
                passengerLocalTime: '19:10',
            },
            arrival: {
                airport: {
                    iata: 'SKG',
                },
                terminal: '',
                date: '2021-12-12',
                passengerLocalTime: '21:25',
            },
            aircraftType: {
                iata: '320',
            },
            serviceTypeCode: {
                iata: 'J',
            },
            segmentInfo: {
                numberOfStops: 0,
                intermediateAirports: {
                    iata: [],
                },
            },
            oagFingerprint: '1298d0dbc79398572f1dace5bf77ada866021ef61bd24533dc9eff2240503a1d',
            codeshare: {
                jointOperationAirlineDesignators: [],
                comments010: [],
            },
        },
        {
            carrierCode: {
                iata: 'W6',
                icao: 'WZZ',
            },
            serviceSuffix: '',
            flightNumber: 6041,
            sequenceNumber: 1,
            flightType: 'Scheduled',
            departure: {
                airport: {
                    iata: 'IEV',
                },
                terminal: 'A',
                date: '2021-12-12',
                passengerLocalTime: '19:20',
            },
            arrival: {
                airport: {
                    iata: 'MXP',
                },
                terminal: '1',
                date: '2021-12-12',
                passengerLocalTime: '21:05',
            },
            aircraftType: {
                iata: '320',
            },
            serviceTypeCode: {
                iata: 'J',
            },
            segmentInfo: {
                numberOfStops: 0,
                intermediateAirports: {
                    iata: [],
                },
            },
            oagFingerprint: 'b11542146c34a3fa48ae427be3f0ac3f3e371d425016c0192de7be96d6c0ea24',
            codeshare: {
                jointOperationAirlineDesignators: [],
                comments010: [],
            },
        },
        {
            carrierCode: {
                iata: 'M9',
                icao: 'MSI',
            },
            serviceSuffix: '',
            flightNumber: 204,
            sequenceNumber: 1,
            flightType: 'Scheduled',
            departure: {
                airport: {
                    iata: 'IEV',
                },
                terminal: 'D',
                date: '2021-12-12',
                passengerLocalTime: '20:30',
            },
            arrival: {
                airport: {
                    iata: 'OZH',
                },
                terminal: '',
                date: '2021-12-12',
                passengerLocalTime: '21:50',
            },
            aircraftType: {
                iata: 'AN4',
            },
            serviceTypeCode: {
                iata: 'J',
            },
            segmentInfo: {
                numberOfStops: 0,
                intermediateAirports: {
                    iata: [],
                },
            },
            oagFingerprint: '0306a99217fdfb60bc053d8b60c2909384c397f083c9fc42638b56e6231dd952',
            codeshare: {
                jointOperationAirlineDesignators: [],
                comments010: [],
            },
        },
        {
            carrierCode: {
                iata: 'M9',
                icao: 'MSI',
            },
            serviceSuffix: '',
            flightNumber: 258,
            sequenceNumber: 1,
            flightType: 'Scheduled',
            departure: {
                airport: {
                    iata: 'IEV',
                },
                terminal: 'D',
                date: '2021-12-12',
                passengerLocalTime: '20:40',
            },
            arrival: {
                airport: {
                    iata: 'ODS',
                },
                terminal: '',
                date: '2021-12-12',
                passengerLocalTime: '22:00',
            },
            aircraftType: {
                iata: 'AN4',
            },
            serviceTypeCode: {
                iata: 'J',
            },
            segmentInfo: {
                numberOfStops: 0,
                intermediateAirports: {
                    iata: [],
                },
            },
            oagFingerprint: '61f318bc5028ab0712abf963b6c464f4f1d4a958c908dcee4a9840793712f141',
            codeshare: {
                jointOperationAirlineDesignators: [],
                comments010: [],
            },
        },
    ],
    arrival: [
        {
            carrierCode: {
                iata: 'W6',
                icao: 'WZZ',
            },
            serviceSuffix: '',
            flightNumber: 6224,
            sequenceNumber: 1,
            flightType: 'Scheduled',
            departure: {
                airport: {
                    iata: 'CPH',
                },
                terminal: 'L',
                date: '2021-12-11',
                passengerLocalTime: '21:10',
            },
            arrival: {
                airport: {
                    iata: 'IEV',
                },
                terminal: 'A',
                date: '2021-12-12',
                passengerLocalTime: '00:25',
            },
            aircraftType: {
                iata: '320',
            },
            serviceTypeCode: {
                iata: 'J',
            },
            segmentInfo: {
                numberOfStops: 0,
                intermediateAirports: {
                    iata: [],
                },
            },
            oagFingerprint: '5012c0a6f0c4402320b75abc4c3f52dbeaee4bea3a619f8c359065b08534bde4',
            codeshare: {
                jointOperationAirlineDesignators: [],
                comments010: [],
            },
        },
        {
            carrierCode: {
                iata: 'LO',
                icao: 'LOT',
            },
            serviceSuffix: '',
            flightNumber: 755,
            sequenceNumber: 1,
            flightType: 'Scheduled',
            departure: {
                airport: {
                    iata: 'WAW',
                },
                terminal: '',
                date: '2021-12-11',
                passengerLocalTime: '22:45',
            },
            arrival: {
                airport: {
                    iata: 'IEV',
                },
                terminal: '0',
                date: '2021-12-12',
                passengerLocalTime: '01:20',
            },
            aircraftType: {
                iata: 'E90',
            },
            serviceTypeCode: {
                iata: 'J',
            },
            segmentInfo: {
                numberOfStops: 0,
                intermediateAirports: {
                    iata: [],
                },
            },
            oagFingerprint: '71b1a0ed5058f26c210d599277c87733952aaba4631a8d79818d7fb0e6b31211',
            codeshare: {
                jointOperationAirlineDesignators: [],
                comments010: [],
            },
        },
        {
            carrierCode: {
                iata: 'W6',
                icao: 'WZZ',
            },
            serviceSuffix: '',
            flightNumber: 2473,
            sequenceNumber: 1,
            flightType: 'Scheduled',
            departure: {
                airport: {
                    iata: 'BUD',
                },
                terminal: '2B',
                date: '2021-12-12',
                passengerLocalTime: '06:10',
            },
            arrival: {
                airport: {
                    iata: 'IEV',
                },
                terminal: 'A',
                date: '2021-12-12',
                passengerLocalTime: '08:50',
            },
            aircraftType: {
                iata: '32Q',
            },
            serviceTypeCode: {
                iata: 'J',
            },
            segmentInfo: {
                numberOfStops: 0,
                intermediateAirports: {
                    iata: [],
                },
            },
            oagFingerprint: 'fccece54fb52351dd9d778fdf4de914f6288cd0cb176f9ec38eb6457b8714f72',
            codeshare: {
                jointOperationAirlineDesignators: [],
                comments010: [],
            },
        },
        {
            carrierCode: {
                iata: 'W6',
                icao: 'WZZ',
            },
            serviceSuffix: '',
            flightNumber: 1567,
            sequenceNumber: 1,
            flightType: 'Scheduled',
            departure: {
                airport: {
                    iata: 'WAW',
                },
                terminal: '',
                date: '2021-12-12',
                passengerLocalTime: '06:40',
            },
            arrival: {
                airport: {
                    iata: 'IEV',
                },
                terminal: 'A',
                date: '2021-12-12',
                passengerLocalTime: '09:10',
            },
            aircraftType: {
                iata: '32Q',
            },
            serviceTypeCode: {
                iata: 'J',
            },
            segmentInfo: {
                numberOfStops: 0,
                intermediateAirports: {
                    iata: [],
                },
            },
            oagFingerprint: '7ec18b469de67f09fa70d3ec6964ad338362b8bb65bd11b6bcf929420f985707',
            codeshare: {
                jointOperationAirlineDesignators: [],
                comments010: [],
            },
        },
        {
            carrierCode: {
                iata: 'W6',
                icao: 'WZZ',
            },
            serviceSuffix: '',
            flightNumber: 6128,
            sequenceNumber: 1,
            flightType: 'Scheduled',
            departure: {
                airport: {
                    iata: 'VIE',
                },
                terminal: '0',
                date: '2021-12-12',
                passengerLocalTime: '07:50',
            },
            arrival: {
                airport: {
                    iata: 'IEV',
                },
                terminal: 'A',
                date: '2021-12-12',
                passengerLocalTime: '10:45',
            },
            aircraftType: {
                iata: '320',
            },
            serviceTypeCode: {
                iata: 'J',
            },
            segmentInfo: {
                numberOfStops: 0,
                intermediateAirports: {
                    iata: [],
                },
            },
            oagFingerprint: '3733819343e63d239c1ba68447e12e35fe70f2909ba62a3d2cd27223973fb448',
            codeshare: {
                jointOperationAirlineDesignators: [],
                comments010: [],
            },
        },
        {
            carrierCode: {
                iata: 'W6',
                icao: 'WZZ',
            },
            serviceSuffix: '',
            flightNumber: 6116,
            sequenceNumber: 1,
            flightType: 'Scheduled',
            departure: {
                airport: {
                    iata: 'NUE',
                },
                terminal: '',
                date: '2021-12-12',
                passengerLocalTime: '08:05',
            },
            arrival: {
                airport: {
                    iata: 'IEV',
                },
                terminal: 'A',
                date: '2021-12-12',
                passengerLocalTime: '11:20',
            },
            aircraftType: {
                iata: '320',
            },
            serviceTypeCode: {
                iata: 'J',
            },
            segmentInfo: {
                numberOfStops: 0,
                intermediateAirports: {
                    iata: [],
                },
            },
            oagFingerprint: '4c447001d7713f9d2a8a6368d470fea0414619d4f6f6ca1f8fe1a8a6ffc6c614',
            codeshare: {
                jointOperationAirlineDesignators: [],
                comments010: [],
            },
        },
        {
            carrierCode: {
                iata: 'W6',
                icao: 'WZZ',
            },
            serviceSuffix: '',
            flightNumber: 6050,
            sequenceNumber: 1,
            flightType: 'Scheduled',
            departure: {
                airport: {
                    iata: 'NAP',
                },
                terminal: '',
                date: '2021-12-12',
                passengerLocalTime: '13:45',
            },
            arrival: {
                airport: {
                    iata: 'IEV',
                },
                terminal: 'A',
                date: '2021-12-12',
                passengerLocalTime: '17:25',
            },
            aircraftType: {
                iata: '320',
            },
            serviceTypeCode: {
                iata: 'J',
            },
            segmentInfo: {
                numberOfStops: 0,
                intermediateAirports: {
                    iata: [],
                },
            },
            oagFingerprint: 'b0d8c4aa8b7c850507b504f6e65797bbb390ec7ae60395c46a286df002505b50',
            codeshare: {
                jointOperationAirlineDesignators: [],
                comments010: [],
            },
        },
        {
            carrierCode: {
                iata: '7B',
                icao: 'UBE',
            },
            serviceSuffix: '',
            flightNumber: 104,
            sequenceNumber: 1,
            flightType: 'Scheduled',
            departure: {
                airport: {
                    iata: 'ODS',
                },
                terminal: '',
                date: '2021-12-12',
                passengerLocalTime: '16:00',
            },
            arrival: {
                airport: {
                    iata: 'IEV',
                },
                terminal: 'A',
                date: '2021-12-12',
                passengerLocalTime: '17:00',
            },
            aircraftType: {
                iata: '738',
            },
            serviceTypeCode: {
                iata: 'J',
            },
            segmentInfo: {
                numberOfStops: 0,
                intermediateAirports: {
                    iata: [],
                },
            },
            oagFingerprint: 'e3f93594489a8a3d5633601be3e528778913aaf1938b4ad1493ac4a4ddfa3c5c',
            codeshare: {
                jointOperationAirlineDesignators: [],
                comments010: [],
            },
        },
        {
            carrierCode: {
                iata: 'W6',
                icao: 'WZZ',
            },
            serviceSuffix: '',
            flightNumber: 6290,
            sequenceNumber: 1,
            flightType: 'Scheduled',
            departure: {
                airport: {
                    iata: 'POZ',
                },
                terminal: '',
                date: '2021-12-12',
                passengerLocalTime: '16:05',
            },
            arrival: {
                airport: {
                    iata: 'IEV',
                },
                terminal: 'A',
                date: '2021-12-12',
                passengerLocalTime: '18:50',
            },
            aircraftType: {
                iata: '320',
            },
            serviceTypeCode: {
                iata: 'J',
            },
            segmentInfo: {
                numberOfStops: 0,
                intermediateAirports: {
                    iata: [],
                },
            },
            oagFingerprint: '63c3c07e5b8db66071ce1300856d0cfd1624ab50d3220ba8d9a0651932a0f910',
            codeshare: {
                jointOperationAirlineDesignators: [],
                comments010: [],
            },
        },
        {
            carrierCode: {
                iata: 'W6',
                icao: 'WZZ',
            },
            serviceSuffix: '',
            flightNumber: 6286,
            sequenceNumber: 1,
            flightType: 'Scheduled',
            departure: {
                airport: {
                    iata: 'TLL',
                },
                terminal: '',
                date: '2021-12-12',
                passengerLocalTime: '16:20',
            },
            arrival: {
                airport: {
                    iata: 'IEV',
                },
                terminal: 'A',
                date: '2021-12-12',
                passengerLocalTime: '18:40',
            },
            aircraftType: {
                iata: '320',
            },
            serviceTypeCode: {
                iata: 'J',
            },
            segmentInfo: {
                numberOfStops: 0,
                intermediateAirports: {
                    iata: [],
                },
            },
            oagFingerprint: '977817a351ea536505113edcca3ebdd7cdc09899b310d8d106cfb0e8e28ab740',
            codeshare: {
                jointOperationAirlineDesignators: [],
                comments010: [],
            },
        },
        {
            carrierCode: {
                iata: 'M9',
                icao: 'MSI',
            },
            serviceSuffix: '',
            flightNumber: 266,
            sequenceNumber: 1,
            flightType: 'Scheduled',
            departure: {
                airport: {
                    iata: 'LWO',
                },
                terminal: '',
                date: '2021-12-12',
                passengerLocalTime: '17:05',
            },
            arrival: {
                airport: {
                    iata: 'IEV',
                },
                terminal: 'D',
                date: '2021-12-12',
                passengerLocalTime: '18:25',
            },
            aircraftType: {
                iata: 'AN4',
            },
            serviceTypeCode: {
                iata: 'J',
            },
            segmentInfo: {
                numberOfStops: 0,
                intermediateAirports: {
                    iata: [],
                },
            },
            oagFingerprint: '73034f669e9709bc833430802471cbc5d7ab7007526be592b524211664b7731a',
            codeshare: {
                jointOperationAirlineDesignators: [],
                comments010: [],
            },
        },
        {
            carrierCode: {
                iata: 'M9',
                icao: 'MSI',
            },
            serviceSuffix: '',
            flightNumber: 257,
            sequenceNumber: 1,
            flightType: 'Scheduled',
            departure: {
                airport: {
                    iata: 'ODS',
                },
                terminal: '',
                date: '2021-12-12',
                passengerLocalTime: '18:30',
            },
            arrival: {
                airport: {
                    iata: 'IEV',
                },
                terminal: 'D',
                date: '2021-12-12',
                passengerLocalTime: '19:50',
            },
            aircraftType: {
                iata: 'AN4',
            },
            serviceTypeCode: {
                iata: 'J',
            },
            segmentInfo: {
                numberOfStops: 0,
                intermediateAirports: {
                    iata: [],
                },
            },
            oagFingerprint: 'd77dffd12ef223f56f565578540ef87aedd980d30a074658fd373be67f95ee28',
            codeshare: {
                jointOperationAirlineDesignators: [],
                comments010: [],
            },
        },
        {
            carrierCode: {
                iata: 'W6',
                icao: 'WZZ',
            },
            serviceSuffix: '',
            flightNumber: 6114,
            sequenceNumber: 1,
            flightType: 'Scheduled',
            departure: {
                airport: {
                    iata: 'BER',
                },
                terminal: '0',
                date: '2021-12-12',
                passengerLocalTime: '19:40',
            },
            arrival: {
                airport: {
                    iata: 'IEV',
                },
                terminal: 'A',
                date: '2021-12-12',
                passengerLocalTime: '22:45',
            },
            aircraftType: {
                iata: '320',
            },
            serviceTypeCode: {
                iata: 'J',
            },
            segmentInfo: {
                numberOfStops: 0,
                intermediateAirports: {
                    iata: [],
                },
            },
            oagFingerprint: '2e28b5080f55abc3ebc7b316055c59761f071d4eec385c1e04e08602a92bb27d',
            codeshare: {
                jointOperationAirlineDesignators: [],
                comments010: [],
            },
        },
        {
            carrierCode: {
                iata: '7B',
                icao: 'UBE',
            },
            serviceSuffix: '',
            flightNumber: 302,
            sequenceNumber: 1,
            flightType: 'Scheduled',
            departure: {
                airport: {
                    iata: 'EVN',
                },
                terminal: '',
                date: '2021-12-12',
                passengerLocalTime: '20:20',
            },
            arrival: {
                airport: {
                    iata: 'IEV',
                },
                terminal: 'A',
                date: '2021-12-12',
                passengerLocalTime: '21:20',
            },
            aircraftType: {
                iata: '738',
            },
            serviceTypeCode: {
                iata: 'J',
            },
            segmentInfo: {
                numberOfStops: 0,
                intermediateAirports: {
                    iata: [],
                },
            },
            oagFingerprint: '1c22e16a88aca199272c5ca29c063b5e2dd6b9c63214b9738eac3eb267d26bed',
            codeshare: {
                jointOperationAirlineDesignators: [],
                comments010: [],
            },
        },
        {
            carrierCode: {
                iata: 'W6',
                icao: 'WZZ',
            },
            serviceSuffix: '',
            flightNumber: 6266,
            sequenceNumber: 1,
            flightType: 'Scheduled',
            departure: {
                airport: {
                    iata: 'SKG',
                },
                terminal: '',
                date: '2021-12-12',
                passengerLocalTime: '21:55',
            },
            arrival: {
                airport: {
                    iata: 'IEV',
                },
                terminal: 'A',
                date: '2021-12-12',
                passengerLocalTime: '23:55',
            },
            aircraftType: {
                iata: '320',
            },
            serviceTypeCode: {
                iata: 'J',
            },
            segmentInfo: {
                numberOfStops: 0,
                intermediateAirports: {
                    iata: [],
                },
            },
            oagFingerprint: '750dae8ab668d4a8a86b9ac7bdc5423f278c10b5c9b75d55bf8b5589dad90595',
            codeshare: {
                jointOperationAirlineDesignators: [],
                comments010: [],
            },
        },
    ],
}

const FlightsTable = ({ flightsDep, flightsArr }) => {
    console.log(flightsDep, flightsArr)
    const { pathname } = useLocation()
    let flightList = []
    let isDeparture = null

    // if (pathname === '/departures' && flightsDep) {   // for API
    //     flightList = flightsDep
    //     isDeparture = true
    // }

    // if (pathname === '/arrivals' && flightsArr) {
    //     flightList = flightsArr
    //     isDeparture = false
    // }

    if (pathname === '/departures') {
        //  for test
        flightList = flightListDEMO.departure

        isDeparture = true
    }

    if (pathname === '/arrivals') {
        flightList = flightListDEMO.arrival
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
                            <th className="header__item flightnum">Flight</th>
                            <th className="header__item details"></th>
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
                                    className="flight-table__line__flight"
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
                                    <th className="flight-table__item details">
                                        <a href="#" className="flight-details">
                                            Flight details
                                        </a>
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

// FOR API Airport Sikorsky

// import React from 'react'
// import { useLocation } from 'react-router-dom'
// import { connect } from 'react-redux'

// import moment from 'moment'

// import './flighttable.scss'

// import { terminalStyles, getFlightStatus } from './tableutils'

// import * as flightListSelector from '../../../gateway/selectors'

// const FlightsTable = ({ flightsDep, flightsArr }) => {
//     const { pathname } = useLocation()
//     let flightList = []

//     if (pathname === '/departures' && flightsDep) {
//         flightList = flightsDep
//     }

//     if (pathname === '/arrivals' && flightsArr) {
//         flightList = flightsArr
//     }

//     return (
//         <table className="flight-table">
//             {flightList.length ? (
//                 <>
//                     <thead>
//                         <tr className="flight-table__line__header">
//                             <th className="header__item terminal">Terminal</th>
//                             <th className="header__item loctime">Local time</th>
//                             <th className="header__item destination">Destination</th>
//                             <th className="header__item status ">Status</th>
//                             <th className="header__item airline">Airline</th>
//                             <th className="header__item flightnum">Flight</th>
//                             <th className="header__item details"></th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {flightList.map(flight => {
//                             const {
//                                 term,
//                                 timeDepShedule,
//                                 timeTakeofFact,
//                                 status,
//                                 timeToStand,
//                                 timeLandFact,
//                             } = flight

//                             const destinationDep = flight['airportToID.city_en']
//                             const destinationArr = flight['airportFromID.city_en']

//                             const infoData = flight.codeShareData

//                             return (
//                                 <tr className="flight-table__line__flight" key={flight.ID}>
//                                     <th className="flight-table__item terminal">
//                                         <span
//                                             className="flight-terminal"
//                                             style={terminalStyles(term)}
//                                         >
//                                             {term}
//                                         </span>
//                                     </th>
//                                     <th className="flight-table__item loctime">
//                                         {moment(timeDepShedule || timeToStand).format('H:mm')}
//                                     </th>
//                                     <th className="flight-table__item destination">
//                                         {destinationDep || destinationArr}
//                                     </th>
//                                     <th className="flight-table__item status">
//                                         {getFlightStatus(status, timeTakeofFact || timeLandFact)}
//                                     </th>
//                                     <th className="flight-table__item airline">
//                                         {infoData.map(airplaneInfo => {
//                                             const logo = airplaneInfo.airline.en.logoSmallName
//                                             const key = airplaneInfo.airline.en.id
//                                             const { name } = airplaneInfo.airline.en
//                                             return (
//                                                 <div className="airline__company" key={key}>
//                                                     <img
//                                                         src={logo}
//                                                         alt={name}
//                                                         className="airline__company__logo"
//                                                     />
//                                                     <span className="airline__company__title">
//                                                         {name}
//                                                     </span>
//                                                 </div>
//                                             )
//                                         })}
//                                     </th>
//                                     <th className="flight-table__item flight-num">
//                                         {infoData.map(airplaneInfo => {
//                                             const flightNum = airplaneInfo.codeShare
//                                             const key = airplaneInfo.airline.en.id

//                                             return <span key={key}>{flightNum}</span>
//                                         })}
//                                     </th>
//                                     <th className="flight-table__item details">
//                                         <a href="#" className="flight-details">
//                                             Flight details
//                                         </a>
//                                     </th>
//                                 </tr>
//                             )
//                         })}
//                     </tbody>
//                 </>
//             ) : (
//                 <tbody className="nothing-found">
//                     <tr>
//                         <th>
//                             <span>No Flight</span>
//                         </th>
//                     </tr>
//                 </tbody>
//             )}
//         </table>
//     )
// }

// const mapState = state => ({
//     flightsDep: flightListSelector.depFlightListSelector(state),
//     flightsArr: flightListSelector.arrFlightListSelector(state),
// })

// export default connect(mapState, null)(FlightsTable)
