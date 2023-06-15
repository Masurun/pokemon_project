const startBtn = document.getElementById("start");
const pokeImg = document.getElementById("pokeImg");
const min = 1;
const max = 721;
startBtn.addEventListener('click', function() {
let randnum = 1 + Math.floor( Math.random() * 100 );
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/" + String(randnum));
xhr.responseType = 'json';
xhr.send();
xhr.onload = function() {
  let responseObj = xhr.response;
  let responsePokeImg =           responseObj.sprites.front_default;
  pokeImg.src = responsePokeImg;
};
})