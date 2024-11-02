document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search");
    const pokemonList = document.querySelector("#pokemonList");
    
    // Adicione um listener de evento ao campo de pesquisa
    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();
        
        // Seleciona todos os Pokémon da lista
        const pokemons = pokemonList.querySelectorAll(".pokemon");
        
        // Itera sobre os Pokémon para mostrar ou esconder de acordo com a pesquisa
        pokemons.forEach(pokemon => {
            const pokemonName = pokemon.querySelector(".name").textContent.toLowerCase();
            
            // Verifica se o nome do Pokémon inclui o termo de pesquisa
            if (pokemonName.includes(searchTerm)) {
                pokemon.style.display = "block"; // Mostra o Pokémon
            } else {
                pokemon.style.display = "none"; // Esconde o Pokémon
            }
        });
    });
});
