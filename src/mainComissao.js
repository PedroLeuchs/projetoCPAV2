// URL da API que você deseja consumir
//pedro: comissão

const apiPessoa =
  "https://3isnmxo2.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22pessoa%22%5D%7B%0A++%22id%22%3A_id%2C%0A++++nome%2C%0A++++sobrenome%2C%0A++++cargo%2C%0A++++%22imagem%22%3A+input_image.asset-%3Eurl%0A%7D";

fetch(apiPessoa)
  .then((response) => {
    // Verificar se a resposta da API é bem-sucedida (código de status 200)
    if (!response.ok) {
      throw new Error(`Erro de HTTP! Código: ${response.status}`);
    }
    // Converter a resposta em JSON
    return response.json();
  })
  .then((data) => {
    // Aqui você pode trabalhar com os dados da API

    const srcimg = data.result[0].imagem;
    const nome = data.result[0].nome;
    const sobrenome = data.result[0].sobrenome;
    const cargo = data.result[0].cargo;
    functionComissaoSection1Diretor(srcimg, cargo, nome, sobrenome);
  })
  .catch((error) => {
    // Em caso de erro na solicitação ou processamento dos dados
    console.error("Ocorreu um erro:", error);
  });

const apimembros =
  "https://3isnmxo2.api.sanity.io/v2021-10-21/data/query/production?query=%0A++*%5B_type%3D%3D%22membros%22%5D%7B%0A++%22id%22%3A_id%2C%0A++++nome%2C%0A++++sobrenome%2C%0A++++cargo%2C%0A++++subtitulo%2C%0A++++titulo%2C%0A++++bio%2C%0A++++%22imagem%22%3A+imagem.asset-%3Eurl%0A%7D";
// Fazer uma solicitação GET para a API usando fetch()
fetch(apimembros)
  .then((response) => {
    // Verificar se a resposta da API é bem-sucedida (código de status 200)
    if (!response.ok) {
      throw new Error(`Erro de HTTP! Código: ${response.status}`);
    }
    // Converter a resposta em JSON
    return response.json();
  })
  .then((data) => {
    // Aqui você pode trabalhar com os dados da API

    searchInformations(data);
  })
  .catch((error) => {
    // Em caso de erro na solicitação ou processamento dos dados
    console.error("Ocorreu um erro:", error);
  });

function searchInformations(data) {
  data.result.sort((a, b) => a.nome.localeCompare(b.nome));

  for (let index = 0; data.result[index] != null; index++) {
    let color = index % 2 === 0 ? "red" : "yellow";
    const srcimgm = data.result[index].imagem;
    const nome = data.result[index].nome;
    const sobrenome = data.result[index].sobrenome;
    const cargo = data.result[index].cargo;
    const subtitulo = data.result[index].subtitulo;
    const titulo = data.result[index].titulo;
    const bio = data.result[index].bio;

    membrosComissao(
      srcimgm,
      nome,
      sobrenome,
      cargo,
      subtitulo,
      titulo,
      bio,
      color
    );
  }
}

//fim comissão
function functionComissaoSection1Diretor(srcimg, cargo, nome, sobrenome) {
  const ComissaoSection1Diretor = document.querySelector(
    ".ComissaoSection1Diretor"
  );
  const ComissaoSection1DiretorImg = document.createElement("div");
  ComissaoSection1DiretorImg.classList.add("ComissaoSection1DiretorImg");
  const snip1113 = document.createElement("figure");
  snip1113.classList.add("snip1113");
  snip1113.classList.add("red");
  const img = document.createElement("img");
  const figcaption = document.createElement("figcaption");
  const h3 = document.createElement("h3");
  const span = document.createElement("span");
  const h4 = document.createElement("h4");

  ComissaoSection1Diretor.prepend(ComissaoSection1DiretorImg);
  ComissaoSection1DiretorImg.appendChild(snip1113);
  snip1113.appendChild(img);
  snip1113.appendChild(figcaption);
  span.textContent = sobrenome;
  h3.textContent = nome;
  h3.appendChild(span);
  figcaption.appendChild(h3);
  figcaption.appendChild(h4);
  h4.textContent = cargo;

  img.setAttribute("src", srcimg);
}

function membrosComissao(
  srcimgm,
  nome,
  sobrenome,
  cargo,
  subtitulo,
  titulo,
  bio,
  color
) {
  const ul = document.querySelector(".slider-container");
  const li = document.createElement("li");
  const divpart = document.createElement("div");
  divpart.classList.add("participantes");
  const divcol1 = document.createElement("div");
  const divcol2 = document.createElement("div");
  divcol1.classList.add("Colunm-1");
  divcol2.classList.add("Colunm-2");

  ul.appendChild(li);
  li.appendChild(divpart);
  divpart.appendChild(divcol1);
  divpart.appendChild(divcol2);

  // inicio div col 1
  const figure = document.createElement("figure");
  figure.classList.add("snip1113");
  figure.classList.add(color);
  const img = document.createElement("img");
  const figcaption = document.createElement("figcaption");
  const h3 = document.createElement("h3");
  const span = document.createElement("span");
  const h4 = document.createElement("h4");

  divcol1.appendChild(figure);
  figure.appendChild(img);
  figure.appendChild(figcaption);
  figcaption.appendChild(h3);
  figcaption.appendChild(h4);

  // fim div col 1

  // inicio div col 2
  const ConteudoPontosTextoSubT = document.createElement("div");
  ConteudoPontosTextoSubT.classList.add("ConteudoPontosTextoSubT");
  const ComissaoSection1ConteudoDireitaTit = document.createElement("div");
  ComissaoSection1ConteudoDireitaTit.classList.add(
    "ComissaoSection1ConteudoDireitaTit"
  );
  ComissaoSection1ConteudoDireitaTit.classList.add(
    "ComissaoSection1DiretorConteudoTit"
  );

  const ComissaoSection1ConteudoEsquerda = document.createElement("div");
  ComissaoSection1ConteudoEsquerda.classList.add(
    "ComissaoSection1ConteudoEsquerda"
  );
  ComissaoSection1ConteudoEsquerda.classList.add(
    "ComissaoSection1DiretorConteudoSub"
  );
  divcol2.appendChild(ConteudoPontosTextoSubT);
  divcol2.appendChild(ComissaoSection1ConteudoDireitaTit);
  divcol2.appendChild(ComissaoSection1ConteudoEsquerda);
  // fim div col 2

  //inicio adicionando informações

  img.setAttribute("src", srcimgm);

  figure.appendChild(figcaption);
  span.textContent = sobrenome;
  h3.textContent = nome;
  h3.appendChild(span);
  figcaption.appendChild(h3);
  figcaption.appendChild(h4);
  h4.textContent = cargo;

  ConteudoPontosTextoSubT.textContent = subtitulo;
  ComissaoSection1ConteudoDireitaTit.textContent = titulo;
  ComissaoSection1ConteudoEsquerda.textContent = bio;

  //fim adicionando informações
}
