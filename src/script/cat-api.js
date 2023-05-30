
const API_KEY = "live_wpJR67WgIeFgnwZYeunzuSnlxvvjaNz9VKkhMfqtC56v0qnokG7Uo4WsB25OS66Y";

const URL = "https://api.thecatapi.com/v1/";

function fetchBreeds() {
  return fetch(`${URL}breeds?api_key=${API_KEY}`).then((response) => {
    if (!response.ok) {
      throw new Error("Все погано");
    }
    return response.json();
  });
}

function fetchCatByBreed(breedId) {
  return fetch(`${URL}images/search?api_key=${API_KEY}&breed_ids=${breedId}`).then((response) => {
    if (!response.ok) {
      throw new Error("Все дуже погано");
    }
    return response.json();
  });
}
  


export { fetchBreeds, fetchCatByBreed };