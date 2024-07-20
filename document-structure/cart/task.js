const card = Array.from(document.getElementsByClassName('product'));
const basket = document.querySelector('.cart__products');


card.forEach(item => item.addEventListener('click', function(e) {
    const countValue = e.currentTarget.querySelector('.product__quantity-value');
    const img = e.currentTarget.querySelector('.product__image').getAttribute('src');
    const id = e.currentTarget.dataset.id;

    const cardProduct = Array.from(basket.querySelectorAll('.cart__product'));
    const test = cardProduct.findIndex(item => item.dataset.id === id);


    if (e.target.classList.contains('product__quantity-control_inc')) {
        countValue.innerText = Number(countValue.innerText) + 1
    }
    if (e.target.classList.contains('product__quantity-control_dec') && Number(countValue.innerText) > 0) {
        countValue.innerText = Number(countValue.innerText) - 1
    }

    if (e.target.classList.contains('product__add')) {
        if(test === -1) {
        basket.insertAdjacentHTML('beforeend', `
        <div class="cart__product" data-id="${id}">
            <img class="cart__product-image" src="${img}">
            <div class="cart__product-count">${countValue.innerText}</div>
        </div>
        `)
        } else {
            cardProduct[test].querySelector('.cart__product-count').innerText = Number(cardProduct[test].innerText) + Number(countValue.innerText);
        }
    }
}))
