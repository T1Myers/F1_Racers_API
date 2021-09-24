fetch('https://ergast.com/api/f1/2020/1/driverStandings.json')
    .then(res => res.json())
    .then(data => console.log(data))

// fetch('./static/person-data.json')
//     .then(res => res.json())
//     .then(data => getData(data))

// axios.get('./static/person-data.json')
//     .then(res => console.log(res.data))

fetch('https://ergast.com/api/f1/2020/1/driverStandings.json', {
    method: 'POST',
    mode: 'no-cors',
    data: {
        'position': '1',
        'giveName + familyName': 'application/json'
    },
    body: JSON.stringify(dataToSend)
})
    .then(res => res.json())
    .then(data => console.log('it works'))

