async function dadoAsync() {
  var resposta = await fetch(
    "https://3isnmxo2.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%27faq%27%5D%7B%0A++%22id%22%3A+_id%2C%0A++++pergunta%2C%0A++++resposta%0A%7D",
    {
      method: "GET",
    }
  );

  var minharesposta = await resposta.json();
  console.log(minharesposta.result[0].pergunta);

  minharesposta.result.forEach((element, index) => {
    var divcard = document.createElement("div");
    divcard.classList.add("card");
    var divcardheader = document.createElement("div");
    divcardheader.classList.add("card-header");
    divcardheader.id = ` id - ${index}`;

    var divmb0 = document.createElement("div");
    divmb0.classList.add("mb-0");

    var h5 = document.createElement("h5");
    h5.style =
      "width: 100%;text-align: left;padding: 0px;padding-left: 30px;padding-right: 30px;font-weight: 400;font-size: 15px;letter-spacing: 1px;color: #3B566E;text-decoration: none !important;-webkit-transition: all 0.3s ease 0s;-moz-transition: all 0.3s ease 0s;-o-transition: all 0.3s ease 0s;transition: all 0.3s ease 0s;cursor: pointer;padding-top: 20px;padding-bottom: 20px;";
    h5.innerHTML = `<span style="display: inline-block;width: 20px;height: 20px;line-height: 14px;float: left;-webkit-border-radius: 100px;-moz-border-radius: 100px;border-radius: 100px;text-align: center;background: #EB0045;color: #fff;font-size: 12px;margin-right: 20px;align-items: center;justify-content: center;" class="badge" >${
      index + 1
    }</span> ${minharesposta.result[index].pergunta} `;

    divcard.appendChild(divcardheader);
    divcardheader.appendChild(divmb0);
    divmb0.appendChild(h5);

    var divfaqcollapse = document.createElement("div");
    divfaqcollapse.id = "faqCollapse";
    divfaqcollapse.classList.add("collapse");

    var divcardbody = document.createElement("div");
    divcardbody.classList.add("card-body");

    var p = document.createElement("p");
    p.innerText = `${minharesposta.result[index].resposta}`;

    divcard.appendChild(divfaqcollapse);
    divfaqcollapse.appendChild(divcardbody);
    divcardbody.appendChild(p);

    h5.onclick = function () {
      if (divfaqcollapse.style.display == "flex") {
        divfaqcollapse.style.display = "none";
      } else {
        divfaqcollapse.style.display = "flex";
      }
    };

    var faq = document.querySelector(".faq");
    faq.appendChild(divcard);
  });
}
dadoAsync();
