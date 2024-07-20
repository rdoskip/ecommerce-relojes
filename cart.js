let cart = [];

function addToCart(item) {
  cart.push(item);
  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  const cartContainer = document.getElementById('cart-container');
  cartContainer.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const cartItem = document.createElement('div');
    cartItem.className = 'flex justify-between items-center p-2 border-b border-zinc-700';
    cartItem.innerHTML = `
      <div>
        <h2 class="text-lg font-bold text-zinc-800 dark:text-zinc-200">${item.name}</h2>
        <p class="text-zinc-800 dark:text-zinc-300 font-bold">$${item.price}</p>
      </div>
      <button onclick="removeFromCart(${index})" class="bg-red-500 text-white px-2 py-1 rounded-lg">Eliminar</button>
    `;
    cartContainer.appendChild(cartItem);
  });

  const totalContainer = document.getElementById('total');
  totalContainer.innerText = `Total: $${total}`;
}
