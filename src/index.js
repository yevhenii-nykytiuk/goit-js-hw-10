
import { fetchBreeds, fetchCatByBreed } from './script/cat-api';



const catSelectOptions = document.querySelector(".breed-select");
const catInfo = document.querySelector(".cat-info");
const loadData = document.querySelector(".loader");
const errorData = document.querySelector(".error");


fetchBreeds().then((catName) => {
  
  
  const catOptions = catName.map((catOption) => {
    
    const breed = catOption;
      let option = document.createElement('option');
      option.value = breed.id;
      option.innerHTML = breed.name;
    catSelectOptions.append(option);
    
   
  })

  return catOptions;

}).catch((error) => {

  console.log(error)
  
  catSelectOptions.style.display = "none";
  errorData.classList.add("error-data");
  
});








catSelectOptions.addEventListener("change", (e) => {

  
  const breedId = e.currentTarget.value;
  const selectBreedId = catSelectOptions.value;

  loadData.classList.add("loader-data");
  errorData.classList.remove("error-data");
  catInfo.innerHTML = ""

  fetchCatByBreed(breedId).then((catDescription) => {

    if (selectBreedId) {

      return catDescription.forEach(element => {

        const breedsEl = element.breeds[0];
        const imagesUrl = element.url;
        catInfo.innerHTML = createMarkup(imagesUrl, breedsEl);

        loadData.classList.remove("loader-data");

      });
      
    } else {

      catInfo.innerHTML = "";
      
    }
  }).catch((error) => {
    console.log(error) 
  })
  
})



function createMarkup(url, { name, description, temperament }) {

  return `<div style="display: flex; column-gap: 15px; padding-top: 10px;">
           <div>
            <img src="${url}" width="600" height="460">
           </div>
           <div>
             <h1>${name}</h1>
             <p>${description}</p>
             <p>${temperament}</p>
           </div>
         </div>`;
}























  

  








