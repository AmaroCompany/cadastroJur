//ESTRUTURA DADOS
//Lei
//lei {id:12345, nome:"loremIpsum"};
const lei = obj.lei;
const lei String = obj.lei;

//Artigo
//artigo {lei:12345, numeroArt:1, redacaoArt:"loremIpsum"};
const artLei = obj.artLei;
const art = obj.art;
const artRedacao String = obj.artRedacao;

//Parágrafo
//paragrafo {lei:12345, numeroArt:1, numeroParagrafo:1, redacaoPar:"LoremIpsum"};
const paragLei = obj.paragLei;
const paragArt = obj.paragArt;
const paragrafo = obj.paragrafo;
const redacaoParag = obj.redacaoParag;


//Inciso
//inciso {lei:12345, numArt:1, numParag:1, numInciso:1, redacaoIn:"loremIpsum"};
const incLei = obj.incLei;
const incArt = obj.incArt;
const incParag = obj.incParag;
const inciso = obj.inciso;
const redacaoInc = obj.redacaoInc;


//Seletor de Leis
function changeTheme() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
//