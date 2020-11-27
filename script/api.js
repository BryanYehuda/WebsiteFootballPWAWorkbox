const API_KEY = 'a65c4ce8fc964aa6ab9618a0da2629db'
const LEAGUE_ID = 2021

var base_url = "https://api.football-data.org/v2/";
var urlKlasemen = `${base_url}competitions/${LEAGUE_ID}/standings`
var urlTim = `${base_url}competitions/${LEAGUE_ID}/teams`

var fetchApi = url => {
  return fetch(url, {
    headers: {
      'X-Auth-Token': API_KEY
    }
  });
}

var status = response => {
  if (response.status !== 200) {
    console.log("Error : " + response.status);

    return Promise.reject(new Error(response.statusText));
  } else {
    return Promise.resolve(response);
  }
}

var json = response => {
  return response.json();
}

var error = error => {
  console.log("Error: " + error);
}

var getKlasemen = () => {
  var fetK = fetchApi(urlKlasemen)
    .then(status)
    .then(json);
  return fetK;
}

var getTim = () => {
  var fetT = fetchApi(urlTim)
    .then(status)
    .then(json);
  return fetT;
}