!function(){var n="live_wpJR67WgIeFgnwZYeunzuSnlxvvjaNz9VKkhMfqtC56v0qnokG7Uo4WsB25OS66Y";function e(e){return fetch("".concat("https://api.thecatapi.com/v1/images/search","?api_key=").concat(n,"&breed_ids=").concat(e)).then((function(n){return n.json()}))}var t=document.querySelector(".breed-select"),c=document.querySelector(".cat-info");fetch("".concat("https://api.thecatapi.com/v1/breeds","?api_key=").concat(n)).then((function(n){return n.json()})).then((function(n){for(var e=0;e<n.length;e+=1){var c=n[e],o=document.createElement("option");o.value=c.id,o.innerHTML=c.name,t.append(o)}})).catch((function(n){return console.log(n)})),t.addEventListener("change",(function(n){e(n.currentTarget.value).then((function(n){return n.forEach((function(n){var e,t,o,a,r,i=n.breeds[0],u=n.url;console.log(n),c.innerHTML=(e=u,o=(t=i).name,a=t.description,r=t.temperament,'<div>\n           <div>\n            <img src="'.concat(e,'" width="600" height="440">\n           </div>\n           <div>\n             <h1>').concat(o,"</h1>\n             <p>").concat(a,"</p>\n             <p>").concat(r,"</p>\n           </div>\n         </div>"))}))})).catch((function(n){return console.log(n)}))}))}();
//# sourceMappingURL=index.d65a718f.js.map
