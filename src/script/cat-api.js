
const API_KEY = "live_wpJR67WgIeFgnwZYeunzuSnlxvvjaNz9VKkhMfqtC56v0qnokG7Uo4WsB25OS66Y";

const URL = "https://api.thecatapi.com/v1/breeds";

const URL2 = "https://api.thecatapi.com/v1/images/search";

function fetchBreeds() {
  return fetch(`${URL}?api_key=${API_KEY}`).then((response) => response.json());
}

function fetchCatByBreed(breedId) {
  return fetch(`${URL2}?api_key=${API_KEY}&breed_ids=${breedId}`).then((response) => response.json());
}

export { fetchBreeds, fetchCatByBreed };