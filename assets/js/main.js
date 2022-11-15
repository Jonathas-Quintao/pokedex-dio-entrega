const pokemonName = document.querySelector('.name');
const pokemonNumber = document.querySelector('.number');
const pokemonImage = document.querySelector('.image');
const pokemonHeigth = document.querySelector('.tamanho')
const pokemonWeight = document.querySelector('.peso')
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
    const APIResponse =  await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data =  await APIResponse.json();
    return data;
}

const renderPokemon = async (pokemon) => {

    const data = await fetchPokemon(pokemon);

    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    pokemonHeigth.innerHTML = data.height;
    pokemonWeight.innerHTML = data.weight;

}

buttonPrev.addEventListener('click', () =>{
   if(searchPokemon > 1){ searchPokemon -= 1
    renderPokemon(searchPokemon)
   }
})
buttonNext.addEventListener('click', () =>{
    searchPokemon += 1
    renderPokemon(searchPokemon)
})


renderPokemon(searchPokemon)