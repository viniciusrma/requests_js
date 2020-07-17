/*
Requests

JavaScript é a linguagem da web devido a seus recursos assíncronos. 
AJAX, que significa JavaScript assíncrono e XML, é um conjunto de ferramentas usadas em conjunto para tirar proveito dos recursos assíncronos do JavaScript.
*/

/*
Métodos GET e POST

Solicitações GET solicitam apenas informações de outras fontes.
Os métodos POST podem introduzir novas informações para outras fontes, além de solicitá-las.

As solicitações GET podem ser gravadas usando um objeto XMLHttpRequest e JavaScript vanilla.
As solicitações POST também podem ser gravadas usando um objeto XMLHttpRequest e JavaScript vanilla.

Escrever solicitações GET e POST com objetos XHR e JavaScript vanilla requer a construção do objeto XHR usando new(1), definindo o responseType(2), criando uma função que manipulará o objeto de resposta(3) e abrindo e enviando a solicitação(4).

Para adicionar uma sequência de consultas a um terminal de URL, você pode usar '?' e inclua um parâmetro (5)

Para fornecer parâmetros adicionais, use '&' e inclua um par de valor-chave, associado por '='. (6)

Determinar como escrever corretamente as solicitações e implementá-las corretamente exige a leitura cuidadosa da documentação da API com a qual você está trabalhando.

*/

// Information to reach the API

const apiKey = '<...your api key...>';
const url = 'https:www.wheretheapiis.com/words?key=value'; // step 5
const queryParams = 'rel_jjb='; 
const additionalParams = '&topics='; // step 6

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({ destination: urlToShorten });
  const xhr = new XMLHttpRequest(); // step 1
  xhr.responseType = 'json'; // step 2
  xhr.onreadystatechange = () => {  // step 3
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
    xhr.open('POST', url); // step 4
  }
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.setRequestHeader('apikey', apiKey);
  xhr.send(data);
}

