# Pokédex Web

Uma Pokédex simples feita com **HTML, CSS e JavaScript puro**. Digite o nome de um Pokémon, e o app busca os dados na [PokéAPI](https://pokeapi.co/) e mostra o sprite dele na tela. Dá pra ver o Pokémon de frente, de costas e na versão shiny.

## Autor

|            |                                             |
| ---------- | ------------------------------------------- |
| **Nome**   | Jorge Augusto Flores Meert                  |
| **RM**     | 572179                                      |
| **Curso**  | Engenharia de Software, FIAP                |
| **GitHub** | [jorgemeert](https://github.com/jorgemeert) |

## Funcionalidades

- Busca de Pokémon pelo nome (ex.: `pikachu`, `charizard`, `gengar`)
- Troca de visual com os botões `<` (costas) e `>` (frente)
- Botão **Ver Shiny** para mostrar a versão rara do Pokémon
- Mensagem de erro quando o nome digitado não existe
- Layout responsivo, com visual de aparelho de Pokédex

## Como funciona

O projeto faz uma requisição **GET** com `fetch` para o endpoint:

```
https://pokeapi.co/api/v2/pokemon/{nome}
```

O fluxo, em `script.js`:

1. O clique em **Procurar** lê o nome digitado no campo.
2. `await fetch(...)` faz o pedido e espera a resposta (função `async`).
3. `resposta.ok` verifica se deu certo. Se não, mostra o erro na tela.
4. `await resposta.json()` converte o corpo da resposta em objeto JS.
5. Os links dos sprites (`front_default`, `back_default`, `front_shiny`) são guardados em variáveis e usados no `src` da `<img>`.
6. O `try/catch` trata falhas de rede.

## Tecnologias

- HTML5
- CSS3 (grid, flexbox, variáveis CSS)
- JavaScript (`fetch`, `async/await`, manipulação do DOM)
- [PokéAPI](https://pokeapi.co/) (gratuita, sem chave)

## Como rodar

1. Clone o repositório:
   ```bash
   git clone https://github.com/jorgemeert/trabalho_api_web.git
   ```
2. Abra a pasta do projeto.
3. Abra o `index.html` no navegador (ou use a extensão **Live Server** do VS Code).

Não precisa instalar nada nem criar chave de API. É preciso ter internet para a requisição funcionar.

## Estrutura

```
trabalho_web/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Aprendizados

- Como funcionam **Promises** e por que `fetch` e `.json()` precisam de `await`
- Escopo de variáveis (`let` x `const`) e por que um `addEventListener` dentro de outro evento se acumula
- Tratamento de erros com `try/catch` e `resposta.ok`
- Uso de Prettier e leitura de logs para achar erros de sintaxe

## Créditos

Dados e imagens fornecidos pela [PokéAPI](https://pokeapi.co/). Pokémon e seus nomes são marcas da Nintendo, The Pokémon Company e Game Freak; este projeto é apenas educacional.
