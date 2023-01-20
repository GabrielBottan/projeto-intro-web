let filme1 = {
  titulo: "Poderoso Chefão".toUpperCase(),
  sinopse:
    "Uma família mafiosa luta para estabelecer sua supremacia nos Estados Unidos depois da Segunda Guerra Mundial. Uma tentativa de assassinato deixa o chefão Vito Corleone incapacitado e força os filhos Michael e Sonny a assumir os negócios.",
  tempoEmMinutos: 175,
  anodeLancamento: 1972,
  genero: [" Mafioso", " Policial", " Drama", " Acão"],
  remake: true,
  img: "./img/19a9c712e0a440e892a6d438e9256ce3.jpg",
  href: "https://pt.wikipedia.org/wiki/The_Godfather ",
};

let filme2 = {
  titulo: "Pulp Fiction".toUpperCase(),
  sinopse:
    "Assassino que trabalha para a máfia se apaixona pela esposa de seu chefe quando é convidado a acompanhá-la, um boxeador descumpre sua promessa de perder uma luta e um casal tenta um assalto que rapidamente sai do controle.",
  tempoEmMinutos: 155,
  anodeLancamento: 1994,
  genero: [" Suspense", " Crime", " Independente", " Drama"],
  remake: true,
  img: "./img/pulp03.jpg",
  href: "https://pt.wikipedia.org/wiki/Pulp_Fiction",
};

let filme3 = {
  titulo: "Tropa de Elite".toUpperCase(),
  sinopse:
    "Nascimento, capitão da Tropa de Elite do Rio de Janeiro, é designado para chefiar uma das equipes que tem como missão apaziguar o Morro do Turano. Ele precisa cumprir as ordens enquanto procura por um substituto para ficar em seu lugar. Em meio a um tiroteio, Nascimento e sua equipe resgatam Neto e Matias, dois aspirantes a oficiais da PM. Ansiosos para entrar em ação e impressionados com a eficiência de seus salvadores, os dois se candidatam ao curso de formação da Tropa de Elite.",
  tempoEmMinutos: 115,
  anodeLancamento: 2007,
  genero: [" Ação", " Crime", " Suspense", " Ficção Policial"],
  remake: true,
  img: "./img/tropa_de_elite_2.jpg",
  href: "https://pt.wikipedia.org/wiki/Tropa_de_Elite_(filme)",
};

let media =
  (filme1.tempoEmMinutos + filme2.tempoEmMinutos + filme3.tempoEmMinutos) / 3;
console.log(
  "A media de tempo em minutos dos filmes é: ",
  media.toFixed(),
  "minutos"
);

let filme = filme1.remake && filme2.remake && filme3.remake;
console.log("Todos os filmes são remake?", filme);

let filmes = [];

if (filme1.remake && filme2.remake && filme3.remake === true) {
  filmes.push(filme1, filme2, filme3);
} else {
  confirm("Item não adicionado, não foi feito o push.");
}

console.log(filmes);

for (i in filmes) {
  filmes[i].genero = filmes[i].genero.toString();
}

for (y of filmes) {
  for (imprimir in y) {
    console.log(`${imprimir}: ${y[imprimir]}`);
  }

  console.log("----------------------");
}

function objeto(filme) {
  for (retorna of filme) {
    for (retorna2 in retorna) {
      console.log(`${retorna2}: ${retorna[retorna2].toString()}`);
    }
  }
}
objeto(filmes);

const retornaString = (filmes, Crime) => {
  let a = "";
  for (i in filmes) {
    if (filmes[i].genero.includes(Crime)) {
      a = filmes[i].genero;
      console.log(a);
    }
  }
  if (a == "") {
    alert("Item não encontrado");
  }
};
retornaString(filmes, "Mafioso");

window.addEventListener("load", function (event) {
  search(filmes, "", true);
});

const idBox = document.getElementById("id-box");

idBox.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (idBox.value == "") {
      alert("Item não encontrado");
    } else {
      if (search(filmes, idBox.value).length == 0)
        alert("Filme não encontrado");
    }
  }
});

function search(movies, inputSearch, isToShowAll = false) {
  document.getElementsByClassName("container")[0].innerHTML = "";
  let moviesFilter = [];

  movies.forEach((element) => {
    if (
      element.titulo.toUpperCase().includes(inputSearch.toUpperCase()) ||
      isToShowAll
    ) {
      moviesFilter.push(element);
      report(element);
    }
    if (idBox.value.length === 0) {
      moviesFilter.innerHTML = movieContainer;
    }
  });
  return moviesFilter;
}
let movieContainer = document.getElementsByClassName("movie");
function report(movie) {
  let movieContainer = `
  <div class="container">
   <section class="movie">
  <img
     id="img"
    src= ${movie.img}
    alt="Logo do  filme poderoso chefão"
    height="399px"
    width="290px"
  />
  <div class="movieContainer">
    <ul id="ulMovie">
      <li>
        Título:
        <a   target ="_blank" href= ${movie.href} >
          ${movie.titulo} </a
        >
      </li>
      <li>Gênero: ${movie.genero}</li>
      <li>Tempo em minutos: ${movie.tempoEmMinutos}</li>
      <li>Ano de lançamento: ${movie.anodeLancamento}</li>
      <li>Possui continuação? ${movie.remake ? "Sim" : "Não"}</li>
    </ul>
  </div>
</section>
<div>`;
  document.getElementsByClassName("container")[0].innerHTML += movieContainer;
}
