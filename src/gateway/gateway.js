// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '8989a64740msh871ac0f5fa913c4p1e6ac0jsn5330f6aea84d',
//         'X-RapidAPI-Host': 'flight-info-api.p.rapidapi.com',
//     },
// }

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
