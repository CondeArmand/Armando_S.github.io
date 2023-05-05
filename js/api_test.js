const client_id = 'eq4mmsg7sdy337q1p6kyuagr2dyggo'
const client_secret = 'x7mg1r2aheruhgcea0dtawwx02aq6p'
const access_token = 'lj390xrfmkuuy8ybj2esu1z5w'

const url = 'https://api.igdb.com/v4/games'

const options = {
    method: 'POST',
    headers: {
        'Client-ID': client_id,
        'Authorization': 'Bearer ' + access_token,
    },
    body: 'fields name, cover, genres, platforms, rating, rating_count, summary; where rating_count > 5; sort rating desc; limit 10;'
}



function getGames() {
    fetch(url, options)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}



