
import { fetchBreeds, fetchCatByBreed } from './script/cat-api';





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
}).catch((error) => console.log(error));



catSelectOptions.addEventListener("change", (e) => {
  
  const breedId = e.currentTarget.value;


  fetchCatByBreed(breedId).then((catDescription) => {
    return catDescription.forEach(element => {
      const breedsEl = element.breeds[0];
      const imagesUrl = element.url;
      console.log(element);
      catInfo.innerHTML = createMarkup(imagesUrl, breedsEl);
   });
  }).catch((error) => console.log(error));
})


function createMarkup(url, {name, description, temperament}) {
  return `<div>
           <div>
            <img src="${url}" width="600" height="440">
           </div>
           <div>
             <h1>${name}</h1>
             <p>${description}</p>
             <p>${temperament}</p>
           </div>
         </div>`;
}

















  

  








