import pokemonData from "./pokemon.json" assert { type: "json" }

const startBtn = document.getElementById("start");
const pokeImg = document.getElementById("pokeImg");
const removeBtn = document.getElementById("classRemove");
const pokeName = document.getElementById("pokemonName");
const hiddenPokeName = document.getElementById("hiddenPokename");
const hiddenPokeJsonId = document.getElementById("hiddenPokeJsonId");
const answerInput = document.getElementById("answerInput");
const answerBtn = document.getElementById("answerBtn");
const hakaseTxt = document.getElementById("hakaseTxt");
// const max = 721;
//カントー
const max = 151;

startBtn.addEventListener('click', function() {
  if(startBtn.textContent === "スタート"){
    startBtn.textContent = '次のポケモン';
  }
  if(pokeName.textContent !== ''){
    pokeName.textContent = '';
  }
answerInput.value = "";
hakaseTxt.textContent = "このポケモンの名前は何かな？";
if(!pokeImg.classList.contains('mosaic')){
  pokeImg.classList.add('mosaic');
}
let randnum = 1 + Math.floor( Math.random() * max );
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/" + String(randnum));
xhr.responseType = 'json';
xhr.send();
xhr.onload = function() {
  let responseObj = xhr.response;
  let responsePokeImg = responseObj.sprites.front_default;
  pokeImg.src = responsePokeImg;
  hiddenPokeName.value = pokemonData[randnum - 1]['ja'];
  hiddenPokeJsonId.value = String(randnum - 1);
};
})

removeBtn.addEventListener('click', function() {
  if(pokeImg.classList.contains('mosaic')){
    pokeImg.classList.remove('mosaic');
    pokeName.textContent = hiddenPokeName.value;
  }
});


answerBtn.addEventListener('click', function() {
  if(answerInput.value ===  hiddenPokeName.value){
    hakaseTxt.textContent = "正解じゃ";
    pokeImg.classList.remove('mosaic');
    hiddenPokeName.value = pokemonData[hiddenPokeJsonId.value]['ja'];
    pokeName.textContent = hiddenPokeName.value;
  }else{
    hakaseTxt.textContent = "ウォッホン!よく聞こえなかったのでな。もう一度尋ねるぞ";
  }
});