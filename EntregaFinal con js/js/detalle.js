// OBTENER ID DE LA URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// ELEMENTOS DEL DOM
const title = document.getElementById("prod-title");
const img = document.getElementById("prod-img");
const desc = document.getElementById("prod-description");
const price = document.getElementById("prod-price");
const brand = document.getElementById("prod-brand");
const name = document.getElementById("prod-name");
const bigPrice = document.getElementById("prod-price-big");
const longDesc = document.getElementById("prod-longdesc");
const reviewsContainer = document.getElementById("reviews");
const buyBtn = document.getElementById("buy-btn");

// SI NO HAY ID → ERROR
if (!id) {
    title.textContent = "Producto no encontrado";
    throw new Error("No se encontró ID de producto en la URL");
}

// CARGAR DETALLES DEL PRODUCTO
fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())
    .then(prod => {
        title.textContent = prod.title;
        img.src = prod.thumbnail;
        desc.textContent = prod.description;
        price.textContent = `$${prod.price}`;

        brand.textContent = prod.brand;
        name.textContent = prod.title;
        bigPrice.textContent = `$${prod.price}`;
        longDesc.textContent = prod.description;

        // Actualizar botón de compra
        buyBtn.href = `./carrito.html?id=${prod.id}`;
    })
    .catch(err => console.error("Error cargando producto:", err));


// CARGAR RESEÑAS DEL PRODUCTO
fetch(`https://dummyjson.com/comments/post/${id}`)
    .then(res => res.json())
    .then(data => {
        let html = "";

        data.comments.forEach(c => {
            html += `
                <div class="comment">
                    <h4>${c.user.fullName}</h4>
                    <p>${c.body}</p>
                </div>
            `;
        });

        reviewsContainer.innerHTML = html;
    })
    .catch(err => {
        console.log("Sin reseñas reales, cargando vacías");
        reviewsContainer.innerHTML = "<p>Este producto aún no tiene reseñas.</p>";
    });
