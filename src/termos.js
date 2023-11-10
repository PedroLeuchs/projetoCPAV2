async function pilares(){
    var resposta = await fetch("https://pecgm0gy.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22pilares%22%5D%7B%0A++%22descricao%22%3Adescricao%2C%0A++%22listaPilar%22%3AlistaPilar%2C%0A%7D",{
        method: "GET"
    });
    var minharesposta = await resposta.json();
    var descricao = document.querySelector('p.descricao')
    descricao.innerText = `${minharesposta.result[0].descricao}`
    var ol = document.querySelector("ol");
    minharesposta.result[0].listaPilar.forEach((element, index) => {
        var item = document.createElement(`li`)
        item.classList.add(index)
        item.innerText = `${minharesposta.result[0].listaPilar[index]}`
        ol.appendChild(item)
    });
}
pilares();

async function estatuto(){
    var resposta = await fetch("https://pecgm0gy.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22estatutoCPA%22%5D%7B%0A++%22estatutoCPA%22%3AestatutoCPA%2C%0A++%22conteudoAvaliado%22%3AconteudoAvaliado%2C%0A++%22importanciaAvaliar%22%3AimportanciaAvaliar%2C%0A%7D",{
        method: "GET"
    });
    var minharesposta = await resposta.json();
    var estatutoCPA = document.querySelector('p.comissaoCPA')
    estatutoCPA.innerText = `${minharesposta.result[0].estatutoCPA}`
    var conteudoAvaliado = document.querySelector('p.conteudoAvaliado')
    conteudoAvaliado.innerText = `${minharesposta.result[0].conteudoAvaliado}`
    var importanciaAvaliar = document.querySelector('p.ImportanciaDeAvaliar')
    importanciaAvaliar.innerText = `${minharesposta.result[0].importanciaAvaliar}`
}
estatuto();