const productsContainer = document.querySelector(".section-products");
const commentsContainer = document.querySelector(".section-comments");

// =============================
// CARGAR PRODUCTOS
// =============================
fetch("https://dummyjson.com/products?limit=8")
  .then(response => response.json())
  .then(data => {
    const products = data.products;

    let productsHTML = "";
    products.forEach(prod => {
      productsHTML += `
        <article class="product">
          <h2>${prod.title}</h2>
          <img src="${prod.thumbnail}" alt="${prod.title}">
          <p>${prod.description.slice(0, 60)}...</p>
          <h3>$${prod.price}</h3>

          <div class="card-footer">
            <a href="./detalle.html?id=${prod.id}" class="info">Más info</a>
            <a href="./carrito.html?id=${prod.id}" class="compra">Comprar</a>
          </div>
        </article>
      `;
    });

    productsContainer.innerHTML = productsHTML;
  })
  .catch(err => console.log("Error cargando productos:", err));


// =============================
// CARGAR RESEÑAS REALES
// =============================
fetch("https://dummyjson.com/comments?limit=4")
  .then(res => res.json())
  .then(data => {
    const reviews = data.comments;

    let reviewsHTML = "";
    reviews.forEach(r => {
      reviewsHTML += `
        <div class="comment">
          <h4>${r.user.fullName}</h4>
          <p>${r.body}</p>
          <h5>Post ID: ${r.postId}</h5>
        </div>
      `;
    });

    commentsContainer.innerHTML = reviewsHTML;
  })
  .catch(err => console.log("Error cargando reseñas:", err));
