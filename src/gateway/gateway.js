const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '290e089c9amsh36a3bfa28fd9f89p1dde4ejsn3eb8cc1fe9e2',
        'X-RapidAPI-Host': 'flight-info-api.p.rapidapi.com',
    },
}

export const fetchDeparturesListData = date =>
    fetch(
        `https://flight-info-api.p.rapidapi.com/schedules?version=v1&DepartureDate=${date}&DepartureAirport=IEV`,
        options,
    )
        .then(response => {
            if (!response.ok) {
                throw new Error(
                    `Failed to fetch flights-list. Status: ${response.status} ${response.statusText}`,
                )
            }

            return response.json()
        })
        .then(response => response.data)
        .catch(error => {
            throw new Error(error.message)
        })

export const fetchArrivalsListData = date =>
    fetch(
        `https://flight-info-api.p.rapidapi.com/schedules?version=v1&ArrivalDate=${date}&ArrivalAirport=IEV`,
        options,
    )
        .then(response => {
            if (!response.ok) {
                throw new Error(
                    `Failed to fetch flights-list. Status: ${response.status} ${response.statusText}`,
                )
            }

            return response.json()
        })
        .then(response => response.data)
        .catch(error => {
            throw new Error(error.message)
        })

// sdsdsdsad

// FOR API Airport Sikorsky

// const apiUrl = 'https://api.iev.aero/api/flights'

// export const fetchFlightsListData = date =>
//     fetch(`${apiUrl}/${date}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(
//                     `Failed to fetch flights-list. Status: ${response.status} ${response.statusText}`,
//                 )
//             }

//             return response.json()
//         })
//         .then(res => res.body)
//         .catch(error => {
//             throw new Error(error.message)
//         })
