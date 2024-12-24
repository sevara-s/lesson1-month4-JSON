const product1 = new XMLHttpRequest();
product1.open("GET", "products.json", true);
product1.onload = function () {
  if (product1.status === 200) {
    const response = JSON.parse(product1.responseText);
    const products = response.products;
    const container = document.getElementById("product-cards");

    products.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="price">$${product.price.toFixed(2)}</div>
      `;
      container.appendChild(card);
    });
  }
};
product1.send();
