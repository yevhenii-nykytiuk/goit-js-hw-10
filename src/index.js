
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';





const catSelectOptions = document.querySelector(".breed-select");
const catInfo = document.querySelector(".cat-info");

fetchBreeds().then((catName) => {

  for (let i = 0; i < catName.length; i += 1) {
    const breed = catName[i];
    let option = document.createElement('option');
    option.value = breed.id;
    option.innerHTML = breed.name;
    catSelectOptions.append(option);
    
  }
  
  return catSelectOptions;

}).catch((error) => console.log(error));

fetchCatByBreed().then((catId) => {
  return console.log(catId);
}).catch((error) => console.log(error));












  

  








