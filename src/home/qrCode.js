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