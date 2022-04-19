const baseURL = "http:///localhost:3002/coffees"

async function findAllCoffees () {
    const response = await fetch(`${baseURL}/find-coffees`)

    const coffees = await response.json()
    coffees.forEach(function(element) {
        document.querySelector('#CoffeeList').insertAdjacentHTML("beforeend",
        `
        <div class="CoffeeListItem">
            <div>
              <div class="CoffeeListItem__sabor">${element.sabor}</div>
              <div class="CoffeeListItem__preco">R$${element.preco}</div>
              <div class="CoffeeListItem__descricao">
                ${element.descricao}
              </div>
            </div>
            <img class='CoffeeListItem__foto' src="${element.foto}" alt="${element.sabor}">    
        </div>
        `)
    })
}

async function findByIdCoffees(){
    const id = document.getElementById("idCoffee").value;
  
    const response = await fetch(`${baseURL}/find-coffees/${id}`);
  
    const coffee = await response.json();
  
    const coffeeEscolhidoDiv = document.getElementById("CoffeeSelect");
  
    coffeeEscolhidoDiv.innerHTML = `<div class="CoffeeCardItem">
      <div>
        <div class=CoffeeCardItem__sabor">${coffee.sabor}</div>
        <div class="CoffeeCardItem__preco">R$ ${coffee.preco.toFixed(2)}</div>
        <div class="CoffeeCardItem__descricao">${coffee.descricao}</div>
      </div>
        <img class="PaletaCardItem__foto" src=${
          coffee.foto
        } alt=${`Paleta de ${coffee.sabor}`} />
    </div>`;
};

findAllCoffees();

function abrirModalCadastro() {
  document.querySelector(".modal-overlay").style.display = "flex";
}

function fecharModalCadastro() {
  document.querySelector(".modal-overlay").style.display = "none";
  document.querySelector("#sabor").value = "";
  document.querySelector("#preco").value = 0;
  document.querySelector("#descricao").value = "";
  document.querySelector("#foto").value = "";
}

async function createPaleta() {
  const sabor = document.querySelector("#sabor").value;
  const preco = document.querySelector("#preco").value;
  const descricao = document.querySelector("#descricao").value;
  const foto = document.querySelector("#foto").value;

  const coffee = {
    sabor,
    preco,
    descricao,
    foto,
  };

  const response = await fetch(baseURL + "/create", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify(coffee),
  });
  const newCoffee = await response.json()

  const html = `<div class="PaletaListaItem">
  <div>
    <div class="CoffeeListItem__sabor">${newCoffee.sabor}</div>
    <div class="CoffeeListItem__preco">R$ ${newCoffee.preco.toFixed(2)}</div>
    <div class="CoffeeListItem__descricao">${newCoffee.descricao}</div>
  </div>
    <img class="CoffeeListItem__foto" src=${
      newCoffee.foto
    } alt=${`Coffee de ${newCoffee.sabor}`} />
  </div>`;

  document.getElementById("CoffeeList").insertAdjacentHTML("beforeend", html);
  
  fecharModalCadastro()
};
