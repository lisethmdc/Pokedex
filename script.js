window.onload = () => {
    const searchBtn = document.querySelector('#searchBtn')
    const input = document.querySelector('#name-input')
    const imgScreen = document.querySelector('#screen-top')
    const botScreen = document.querySelector('#screen-bottom')
    const infoScreen = document.querySelector('#info')
    let idScreen = document.querySelector('#number')
    const typeScreen = document.querySelector('#type')


    const getPokemonData = (pokemon) => {
        
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
          .then((response) => response.json())
          .then((data) => {
              botScreen.innerText = data.name
              idScreen.innerText = `#${data.id}`
              imgScreen.innerHTML = `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png"></img>`
              typeScreen.innerText = data.types[0].type.name
              infoScreen.innerHTML = `Height: ${data.height * 10}cm <br> Weight: ${data.weight / 10}kg`
              input.value = ''        
          })     
    }
          
    
      input.addEventListener('keydown',(event) => event.key === 'Enter' && searchBtn.click());
      searchBtn.addEventListener('click', () => getPokemonData(input.value));
    }