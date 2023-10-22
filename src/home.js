const APIqrCode =
  "https://3isnmxo2.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22qrcode%22%5D%7B%0A++%22name%22%3A+name%2C%0A++++%22imagem%22%3A+imagem.asset-%3Eurl%0A%7D";

fetch(APIqrCode)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Erro de HTTP! Código: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    searchImage(data);
  })
  .catch((error) => {
    console.error("Ocorreu um erro:", error);
  });

function searchImage(data) {
  const divImage = document.querySelector(".ItemImgCapaCPA");
  const img = document.createElement("img");
  const srcimg = data.result[0].imagem;
  img.setAttribute("class", "ImgCapaCPA");
  img.setAttribute("src", srcimg);

  divImage.appendChild(img);
}

apiDiretrizes =
  "https://3isnmxo2.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22diretrizes%22%5D%7B%0A%22ordem%22%3A+ordem%2C%0A++%22titulo%22%3A+titulo%2C%0A++%22descricao%22%3A+descricao%0A%7D";

fetch(apiDiretrizes)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Erro de HTTP! Código: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    data.result.sort((a, b) => a.ordem - b.ordem);
    searchDiretrizes(data);
  })
  .catch((error) => {
    console.error("Ocorreu um erro:", error);
  });

function searchDiretrizes(data) {
  for (let index = 0; data.result[index] != null; index++) {
    const ordemData = data.result[index].ordem;
    const tituloData = data.result[index].titulo;
    const descricaoData = data.result[index].descricao;

    createCardDiretrizes(ordemData, tituloData, descricaoData);
  }
}

function createCardDiretrizes(ordemData, tituloData, descricaoData) {
  const divCards = document.querySelector(".TabsConteudo");
  const Card = document.createElement("div");
  const NumeroCard = document.createElement("div");
  const TextoCard = document.createElement("div");

  TextoCard.style.textAlign = "justify";

  const TextoTituloCard = document.createElement("div");
  const TextoConteudoCard = document.createElement("div");

  Card.setAttribute("class", "Card");
  NumeroCard.setAttribute("class", "NumeroCard");
  TextoCard.setAttribute("class", "TextoCard");
  TextoTituloCard.setAttribute("class", "TextoTituloCard");
  TextoConteudoCard.setAttribute("class", "TextoConteudoCard");

  const ordem = ordemData;
  const titulo = tituloData;
  const descricao = descricaoData;

  divCards.appendChild(Card);
  Card.appendChild(NumeroCard);
  Card.appendChild(TextoCard);
  TextoCard.appendChild(TextoTituloCard);
  TextoCard.appendChild(TextoConteudoCard);

  NumeroCard.innerText = `0${ordem}`;
  TextoTituloCard.innerHTML = titulo;
  TextoConteudoCard.innerHTML = descricao;
}

apiObjetivos =
  "https://3isnmxo2.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22objetivos%22%5D%7B%0A++%22descricao%22%3A+descricao%2C%0A++%22topico%22%3A+topico%0A%7D";

fetch(apiObjetivos)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Erro de HTTP! Código: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    //    data.result.sort((a, b) => a.topico - b.topico);
    searchObjetivos(data);
  })
  .catch((error) => {
    console.error("Ocorreu um erro:", error);
  });

function searchTopicsObjetivos(data, index2) {
  for (let index = index2; data.result[0].topico[index] != null; index++) {
    const topico = data.result[0].topico[index];
    return topico;
  }
}

function searchObjetivos(data) {
  const descricao = data.result[0].descricao;

  createObjetivos(descricao, data);
}

function createObjetivos(descricao, data) {
  const ConteudoObjetivoTexto = document.querySelector(
    ".ConteudoObjetivoTexto"
  );
  const ConteudoObjetivoTextoConteudo = document.createElement("div");
  ConteudoObjetivoTextoConteudo.classList.add("ConteudoObjetivoTextoConteudo");
  ConteudoObjetivoTextoConteudo.innerHTML = descricao;

  ConteudoObjetivoTexto.appendChild(ConteudoObjetivoTextoConteudo);

  const ConteudoObjetivoTextoConteudo2 = document.createElement("div");
  ConteudoObjetivoTextoConteudo2.classList.add("ConteudoObjetivoTextoConteudo");
  ConteudoObjetivoTextoConteudo2.classList.add("ConteudoObjetivoTextoLista");
  ConteudoObjetivoTexto.appendChild(ConteudoObjetivoTextoConteudo2);

  for (let index2 = 0; data.result[0].topico[index2] != null; index2++) {
    const ConteudoObjetivoTextoListaItem = document.createElement("div");
    ConteudoObjetivoTextoListaItem.classList.add(
      "ConteudoObjetivoTextoListaItem"
    );

    const bolinha = document.createElement("div");
    bolinha.classList.add("bolinha");

    ConteudoObjetivoTextoConteudo2.appendChild(ConteudoObjetivoTextoListaItem);
    ConteudoObjetivoTextoListaItem.appendChild(bolinha);

    let ConteudoObjetivoTextoListaItemTopicos = document.createElement("div");
    ConteudoObjetivoTextoListaItemTopicos.classList.add(
      "ConteudoObjetivoTextoListaItemTopicos"
    );

    let topico = searchTopicsObjetivos(data, index2);
    ConteudoObjetivoTextoListaItemTopicos.innerHTML = topico;

    ConteudoObjetivoTextoListaItem.appendChild(
      ConteudoObjetivoTextoListaItemTopicos
    );
  }
}

const apiPontosPositivos =
  "https://3isnmxo2.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22pontosPositivos%22%5D%7B%0A++%22titulo%22%3A+titulo%2C%0A++%22descricao%22%3A+descricao%0A%7D";

fetch(apiPontosPositivos)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Erro de HTTP! Código: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    searchPontosPositivos(data);
  })
  .catch((error) => {
    console.error("Ocorreu um erro:", error);
  });

function searchPontosPositivos(data) {
  for (let index = 0; data.result[index] != null; index++) {
    const titulo = data.result[index].titulo;
    const descricao = data.result[index].descricao;

    createPontosPositivos(titulo, descricao, index);
  }
}

function createPontosPositivos(titulo, descricao, index) {
  const ConteudoPontosTextoTopicos = document.querySelector(
    ".ConteudoPontosTextoTopicos"
  );

  const ConteudoPontosTextoTopicosItem = document.createElement("div");
  ConteudoPontosTextoTopicosItem.classList.add(
    "ConteudoPontosTextoTopicosItem"
  );

  const ConteudoPontosTextoTopicosItemTit = document.createElement("div");
  ConteudoPontosTextoTopicosItemTit.classList.add(
    "ConteudoPontosTextoTopicosItemTit"
  );
  ConteudoPontosTextoTopicosItemTit.classList.add(
    "ConteudoObjetivoTextoTitulo"
  );
  ConteudoPontosTextoTopicosItemTit.innerHTML = titulo;

  const ConteudoPontosTextoTopicosItemCon = document.createElement("div");
  ConteudoPontosTextoTopicosItemCon.classList.add(
    "ConteudoPontosTextoTopicosItemCon"
  );
  ConteudoPontosTextoTopicosItemCon.classList.add(
    "ConteudoObjetivoTextoConteudo"
  );
  ConteudoPontosTextoTopicosItemCon.innerHTML = descricao;

  // Crie as variáveis topico e topicos
  let topico;
  let topicos = document.querySelectorAll(".TOPICO");

  if (index % 2 === 0) {
    topico = document.createElement("div");
    topico.classList.add("TOPICO");
    ConteudoPontosTextoTopicos.appendChild(topico);
  } else {
    // Se o índice for ímpar, adicione os elementos ao último tópico criado.
    const ultimoTopico = topicos[topicos.length - 1];
    topico = ultimoTopico;
  }

  topico.appendChild(ConteudoPontosTextoTopicosItem);
  ConteudoPontosTextoTopicosItem.appendChild(ConteudoPontosTextoTopicosItemTit);
  ConteudoPontosTextoTopicosItem.appendChild(ConteudoPontosTextoTopicosItemCon);
}
