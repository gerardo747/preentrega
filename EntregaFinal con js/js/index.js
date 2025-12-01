// let saludo = ("Bienvenido, recuerde los precios se actualizan diariamente")

// alert(saludo)


const productsContainer = document.querySelector(".section-products");
const commentsContainer = document.querySelector(".section-comments");

// Llamamos a la API y procesamos los datos
fetch("https://dummyjson.com/products")
  .then(response => response.json())
  .then(data => {
    // Tomamos 4 productos con el método slice.
    const products = data.products.slice(0, 8);

    // Renderizamos los productos
    let productsHTML = "";
    for (let i = 0; i < products.length; i++) {
      const prod = products[i];
      productsHTML += `
        <article class="product">
          <h2>${prod.title}</h2>
          <img src="${prod.thumbnail}" alt="${prod.title}">
          <p>${prod.description.slice(0, 50)}</p>
          <h3>$${prod.price}</h3>
          <div class="card-footer"> <a href="./detalle.html?id=${prod.id}" class="info">Más info</a>
            <a href="./carrito.html?id=${prod.id}" class="compra">Comprar</a>
          </div>
        </article>
      `;
    }
    productsContainer.innerHTML = productsHTML;

  // Tomamos 3 reseñas
    let reviews = [];
    for (let i = 0; i < products.length; i++) {
      const prod = products[i];
      // console.log(prod);
      
      if (prod.reviews) {
        reviews = reviews.concat(prod.reviews);
      }
    }

    // Limitamos a 3 reseñas
    reviews = reviews.slice(0, 4);

    // Renderizamos las reseñas
    let reviewsHTML = "";
    for (let i = 0; i < reviews.length; i++) {
      const review = reviews[i];
      console.log(review);
      
      reviewsHTML += `
        <div class="comment">
          <h4>${review.reviewerName}</h4>
          <p>${review.comment}</p>
          <h5>Fecha: ${new Date(review.date).toLocaleDateString()}</h5>
        </div>
      `;
    }
    commentsContainer.innerHTML = reviewsHTML;
  })
  .catch(error => console.log("Error cargando la API:", error));