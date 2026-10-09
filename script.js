const btnProcurar = document.getElementById('btnProcurar');
const img = document.getElementById('imgPokemon');
const volta = document.getElementById('volta');
const vai = document.getElementById('vai');
const bntShiny = document.getElementById('shiny');
const erro = document.getElementById('erro');
const infPokemon = document.getElementById('infPokemon');

let costas;
let frente;
let shiny;

btnProcurar.addEventListener('click', async function buscarDados() {
  const pokemon = document.getElementById('pokemon').value;
  infPokemon.textContent = '';
  try {
    const resposta = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
    );

    if (!resposta.ok) {
      erro.textContent = 'Digite o nome de um pokemon válido';
      volta.style.display = 'none';
      vai.style.display = 'none';
      bntShiny.style.display = 'none';
      img.removeAttribute('scr');
    } else if (resposta.status == 200) {
      erro.textContent = '';
      const dados = await resposta.json();

      volta.style.display = 'inline';
      vai.style.display = 'inline';
      bntShiny.style.display = 'inline';

      img.src = dados['sprites']['front_default'];

      frente = dados['sprites']['front_default'];
      costas = dados['sprites']['back_default'];
      shiny = dados['sprites']['front_shiny'];
      const geracao = dados.species.url;

      const respostaGeracao = await fetch(geracao);
      const dadoGeracao = await respostaGeracao.json();

      dados.types.forEach((item) => {
        infPokemon.innerHTML += `<div class='tipoPokemon'> <p>${item.type.name} </p> </div>`;
      });

      infPokemon.innerHTML += `
        <p>${dadoGeracao.generation.name}</p>
        <p> Nome : ${dados['name']}</p>
        <p> Altura : ${dados['height'] * 10}cm </p>
        <p> Peso : ${dados['weight'] / 10}kg</p>
      `;

      return (frente, costas, shiny);
    }
  } catch (erro) {
    erro.textContent = 'Digite o nome de um pokemon válido';
    volta.style.display = 'none';
    vai.style.display = 'none';
    bntShiny.style.display = 'none';
    img.removeAttribute('scr');
  }
});

volta.addEventListener('click', () => {
  img.removeAttribute('scr');
  img.src = costas;
});

vai.addEventListener('click', () => {
  img.removeAttribute('scr');
  img.src = frente;
});

bntShiny.addEventListener('click', () => {
  img.removeAttribute('scr');
  img.src = shiny;
  img.classList.add('shiny');
});
