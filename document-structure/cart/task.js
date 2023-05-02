const decElements = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
const incElements = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
const addBtn = Array.from(document.querySelectorAll('.product__add'));
const cartProducts = document.querySelector('.cart__products');

decElements.forEach((elem) => {
    elem.addEventListener('click', (event) => {
        let elemQuantity = event.srcElement.parentElement.querySelector('.product__quantity-value');
        let quantity = Number(elemQuantity.textContent);

        if (quantity > 1) {
            elemQuantity.textContent = quantity - 1;
        }
    });
} );

incElements.forEach((elem) => {
    elem.addEventListener('click', (event) => {
        let elemQuantity = event.srcElement.parentElement.querySelector('.product__quantity-value');
        let quantity = Number(elemQuantity.textContent);

        if (quantity < 101) {
            elemQuantity.textContent = quantity + 1;
        }
    });
} );

addBtn.forEach((elem) => {
    elem.addEventListener('click', (event) => {
        let productElem = event.srcElement.closest('.product');
        let productImg = productElem.querySelector('.product__image');
        let productId = productElem.getAttribute('data-id');
        let quantity = productElem.querySelector('.product__quantity-value').textContent;
        let newProduct = document.createElement('div');
        

        newProduct.classList.add('cart__product');
        newProduct.setAttribute('data-id', productId);
        newProduct.innerHTML = `<img class="cart__product-image" src=${productImg.getAttribute('src')}><div class="cart__product-count">${quantity}</div>`;

        cartProducts.appendChild(newProduct);
    })
});