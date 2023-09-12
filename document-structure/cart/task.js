// Получение всех элементов с классом "product"
const productElements = document.querySelectorAll('.product');

// Получение контейнера для корзины
const cartProducts = document.querySelector('.cart__products');

// Обработчик клика на кнопки увеличения/уменьшения количества товаров
productElements.forEach(product => {
  const quantityValue = product.querySelector('.product__quantity-value');
  const addToCartButton = product.querySelector('.product__add');

  addToCartButton.addEventListener('click', () => {
    const productId = product.getAttribute('data-id');
    const productImage = product.querySelector('.product__image').src;
    const productCount = parseInt(quantityValue.textContent);

    if (productCount > 0) {
      // Проверка, что количество товара больше 0

      // Поиск товара в корзине по data-id
      const existingCartItem = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);

      if (existingCartItem) {
        // Если товар уже есть в корзине, увеличиваем его количество
        const existingCount = parseInt(existingCartItem.querySelector('.cart__product-count').textContent);
        existingCartItem.querySelector('.cart__product-count').textContent = existingCount + productCount;
      } else {
        // Если товара нет в корзине, добавляем новый элемент
        const cartProduct = document.createElement('div');
        cartProduct.classList.add('cart__product');
        cartProduct.setAttribute('data-id', productId);
        cartProduct.innerHTML = `
          <img class="cart__product-image" src="${productImage}">
          <div class="cart__product-count">${productCount}</div>
        `;
        cartProducts.appendChild(cartProduct);
      }
    }

    // Сброс количества товара в исходное значение (1)
    quantityValue.textContent = '1';
  });

  // Обработчики кнопок увеличения и уменьшения количества товара
  const quantityControlInc = product.querySelector('.product__quantity-control_inc');
  const quantityControlDec = product.querySelector('.product__quantity-control_dec');

  quantityControlInc.addEventListener('click', () => {
    const currentValue = parseInt(quantityValue.textContent);
    if (!isNaN(currentValue)) {
      quantityValue.textContent = currentValue + 1;
    }
  });

  quantityControlDec.addEventListener('click', () => {
    const currentValue = parseInt(quantityValue.textContent);
    if (!isNaN(currentValue) && currentValue > 1) {
      quantityValue.textContent = currentValue - 1;
    }
  });
});
