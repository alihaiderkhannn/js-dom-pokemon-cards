
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
// console.log(data[0]);

const pokemoncards = document.querySelector(".cards")

function renderPokemonCards() {
    /* 
    <li class="card">
        <h2 class="card--title">Bulbasaur</h2>
        <img
            width="256"
            class="card--img"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        />
        <ul class="card--text">
            <li>HP: 45</li>
            <li>ATTACK: 49</li>
            <li>DEFENSE: 49</li>
            <li>SPECIAL-ATTACK: 65</li>
            <li>SPECIAL-DEFENSE: 65</li>
            <li>SPEED: 45</li>
        </ul>
    </li>

    */

    data.forEach((pokemon) => {
        console.log(pokemon)
        const li = document.createElement("li");

        li.classList.add("card")

        const h2 = document.createElement("h2")
        h2.classList.add("card--title")
        h2.innerText = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
        
        li.appendChild(h2)

        const img = document.createElement("img")
        img.width = "256"
        img.classList.add("card--img")
        img.src = pokemon.sprites.front_default
        li.appendChild(img)

        const statlist = document.createElement("ul")
        statlist.classList.add("card--text")

        pokemon.stats.forEach((stat) => {
            const listat = document.createElement("li")
            listat.innerText = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`
            statlist.appendChild(listat)
        })

        li.appendChild(statlist)

        pokemoncards.appendChild(li)

        })

        


    }
    


renderPokemonCards()
