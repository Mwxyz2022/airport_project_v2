const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '533452ea6emsh493608de8cf1fc2p1b12c3jsn0ce2e3da1870',
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
