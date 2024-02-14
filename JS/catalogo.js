document.addEventListener('DOMContentLoaded', function() {
    const descriptionButtons = document.querySelectorAll('.description-btn');
  
    descriptionButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        const descriptionContent = this.parentElement.querySelector('.description-content');
        descriptionContent.classList.add('active');
  
        // Agregar un retraso para ocultar el texto de descripción después de 3 segundos (3000 milisegundos)
        setTimeout(function() {
          descriptionContent.classList.remove('active');
        }, 2000);
      });
    });
  });
  
  function showProducts() {
    var productContainer = document.getElementById('productContainer');
    productContainer.classList.add('show');
  }

/////////////////////////////////////////////////////////////////////////////77
/* Funciones de carrito */

//variables
let allContainerCart = document.querySelector('.products');
let containerBuyCart = document.querySelector('.card-items');
let priceTotal = document.querySelector('.price-total')
let amountProduct = document.querySelector('.count-product');


let buyThings = [];
let totalCard = 0;
let countProduct = 0;

//functions
loadEventListeners();
function loadEventListeners(){
    allContainerCart.addEventListener('click', addProduct);
    containerBuyCart.addEventListener('click', deleteProduct);
}

function addProduct(e){
    e.preventDefault();
    if (e.target.classList.contains('btn-add-cart')) {
        const selectProduct = e.target.parentElement.parentElement; 
        readTheContent(selectProduct);
    }
}

function deleteProduct(e) {
    if (e.target.classList.contains('delete-product')) {
        const deleteId = e.target.getAttribute('data-id');

        buyThings.forEach((value, index) => {
            if (value.id == deleteId) {
                let priceReduce = parseFloat(value.price) * parseFloat(value.amount);
                totalCard -= priceReduce; 
                totalCard = totalCard.toFixed(2);
                buyThings.splice(index, 1); 
            }
        });

        countProduct--;
    }
    
    if (buyThings.length === 0) {
        priceTotal.innerHTML = 0;
        amountProduct.innerHTML = 0;
    }
    loadHtml();
}

function readTheContent(product){
    const infoProduct = {
        image: product.querySelector('img').src,
        title: product.querySelector('.title').textContent,
        price: product.querySelector('p span').textContent,
        id: product.querySelector('.btn-add-cart').getAttribute('data-id'),
        amount: 1
    }

    totalCard = parseFloat(totalCard) + parseFloat(infoProduct.price);
    totalCard = totalCard.toFixed(2);

    const exist = buyThings.some(product => product.id === infoProduct.id);
    if (exist) {
        buyThings.forEach(product => {
            if (product.id === infoProduct.id) {
                product.amount++;
            }
        });
    } else {
        buyThings.push(infoProduct);
        countProduct++;
    }
    loadHtml();
}

function loadHtml(){
    clearHtml();
    buyThings.forEach(product => {
        const {image, title, price, amount, id} = product;
        const row = document.createElement('div');
        row.classList.add('item');
        row.innerHTML = `
            <img src="${image}" alt="">
            <div class="item-content">
                <h5>${title}</h5>
                <h5 class="cart-price">${price}$</h5>
                <h6>Amount: ${amount}</h6>
            </div>
            <span class="delete-product" data-id="${id}">X</span>
        `;

        containerBuyCart.appendChild(row);
    });

    priceTotal.innerHTML = totalCard;
    amountProduct.innerHTML = countProduct;
}

function clearHtml(){
    containerBuyCart.innerHTML = '';
}

