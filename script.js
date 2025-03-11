const users = {
  seller456: "Intro123",
  dancabello: "J5*asdRD.s",
  root: "dochouse",
};

let currentUser = null;
let cart = [];
let products = [];
let username = "";

// Función de login
function login() {
  // const username = document.getElementById("username").value;
  // const password = document.getElementById("password").value;
  // const username = "seller456";
  // const password = "Intro123";
  // const username = "dancabello";
  // const password = "J5*asdRD.s";
  username = "root";
  const password = "dochouse";

  if (users[username] === password) {
    currentUser = username;
    document.getElementById("login-message").innerText = "Login exitoso";
    loadProducts();
    toggleForms();

    // Controlar lo que ve cada tipo de Usuario
    if (username === "seller456") {
      document.getElementById("cart").style.display = "block";
      const buyingBtns = document.getElementsByClassName("buying-btns");
      for (let i = 0; i < buyingBtns.length; i++) {
        buyingBtns[i].style.display = "block";
      }
    }
    if (username === "dancabello") {
      document.getElementById("add-product-form").style.display = "block";
    }
    if (username === "root") {
      displayDeleteBtns();
      displayUsersList();
    }
  } else {
    document.getElementById("login-message").innerText =
      "Usuario o contraseña incorrectos";
  }
}

// Cargar productos (simulados)
function loadProducts() {
  products = [
    {
      nombre: "Eco-Cepillo Dental",
      descripcion:
        "Cepillo de bambú biodegradable con cerdas de carbón activado.",
      precio: 5.99,
      cantidad: 100,
      imagen: undefined,
    },
    {
      nombre: "Botella de Agua Auto-Limpiable",
      descripcion: "Botella con luz UV integrada para purificar el agua.",
      precio: 29.99,
      cantidad: 50,
      imagen: undefined,
    },
    {
      nombre: "Pluma de Borrado Instantáneo",
      descripcion: "Pluma que borra tinta con un solo clic, sin dejar rastro.",
      precio: 9.99,
      cantidad: 200,
      imagen: undefined,
    },
    {
      nombre: "Mochila Solar Cargadora",
      descripcion:
        "Mochila con panel solar integrado para cargar dispositivos móviles.",
      precio: 79.99,
      cantidad: 25,
      imagen: undefined,
    },
    {
      nombre: "Audífonos de Traducción Simultánea",
      descripcion: "Audífonos que traducen idiomas en tiempo real.",
      precio: 149.99,
      cantidad: 10,
      imagen: undefined,
    },
    {
      nombre: "Almohada de Masaje Inteligente",
      descripcion:
        "Almohada que se adapta a tu cuerpo y proporciona masajes personalizados.",
      precio: 69.99,
      cantidad: 30,
      imagen: undefined,
    },
    {
      nombre: "Lámpara de Escritorio con Carga Inalámbrica",
      descripcion: "Lámpara que carga tu teléfono mientras ilumina tu espacio.",
      precio: 49.99,
      cantidad: 40,
      imagen: undefined,
    },
    {
      nombre: "Guantes de Realidad Virtual Táctiles",
      descripcion:
        "Guantes que te permiten sentir objetos en la realidad virtual.",
      precio: 199.99,
      cantidad: 5,
      imagen: undefined,
    },
    {
      nombre: "Cámara de Seguridad con Reconocimiento Facial",
      descripcion: "Cámara que identifica a las personas y envía alertas.",
      precio: 89.99,
      cantidad: 15,
      imagen: undefined,
    },
    {
      nombre: "Robot Aspirador con Mapeo Inteligente",
      descripcion:
        "Aspirador que limpia tu casa de forma autónoma, creando mapas.",
      precio: 249.99,
      cantidad: 8,
      imagen: undefined,
    },
    {
      nombre: "Bicicleta Eléctrica Plegable",
      descripcion: "Bicicleta que se pliega para facilitar su transporte.",
      precio: 599.99,
      cantidad: 3,
      imagen: undefined,
    },
    {
      nombre: "Reloj Inteligente con Monitor de Sueño",
      descripcion: "Reloj que analiza tu sueño y te ayuda a mejorarlo.",
      precio: 129.99,
      cantidad: 20,
      imagen: undefined,
    },
    {
      nombre: "Impresora 3D de Bolsillo",
      descripcion:
        "Impresora que cabe en tu bolsillo y te permite imprimir objetos pequeños.",
      precio: 349.99,
      cantidad: 2,
      imagen: undefined,
    },
    {
      nombre: "Kit de Cultivo Hidropónico Casero",
      descripcion: "Kit para cultivar tus propias hierbas y verduras en casa.",
      precio: 59.99,
      cantidad: 25,
      imagen: undefined,
    },
    {
      nombre: "Drone con Cámara 4K y Estabilización",
      descripcion: "Drone que graba videos y toma fotos de alta calidad.",
      precio: 499.99,
      cantidad: 6,
      imagen: undefined,
    },
    {
      nombre: "Proyector Holográfico Portátil",
      descripcion: "Proyector que crea hologramas en cualquier superficie.",
      precio: 299.99,
      cantidad: 12,
      imagen: undefined,
    },
    {
      nombre: "Mesa de Escritorio Ajustable con Memoria",
      descripcion:
        "Mesa que se ajusta a tu altura y guarda tus posiciones favoritas.",
      precio: 399.99,
      cantidad: 4,
      imagen: undefined,
    },
    {
      nombre: "Silla Ergonómica con Calefacción",
      descripcion: "Silla que se adapta a tu cuerpo y te mantiene caliente.",
      precio: 279.99,
      cantidad: 9,
      imagen: undefined,
    },
    {
      nombre: "Purificador de Aire con Aromaterapia",
      descripcion:
        "Purificador que elimina las impurezas del aire y libera aromas.",
      precio: 119.99,
      cantidad: 18,
      imagen: undefined,
    },
    {
      nombre: "Altavoz Inteligente con Pantalla Táctil",
      descripcion: "Altavoz que te permite controlar tu hogar y ver videos.",
      precio: 169.99,
      cantidad: 11,
      imagen: undefined,
    },
    {
      nombre: "Gafas de Realidad Aumentada con GPS",
      descripcion: "Gafas que te muestran información sobre el mundo real.",
      precio: 229.99,
      cantidad: 7,
      imagen: undefined,
    },
    {
      nombre: "Maleta Inteligente con Seguimiento GPS",
      descripcion: "Maleta que te permite saber dónde está en todo momento.",
      precio: 189.99,
      cantidad: 13,
      imagen: undefined,
    },
    {
      nombre: "Cargador Solar Portátil para Laptop",
      descripcion:
        "Cargador que te permite cargar tu laptop en cualquier lugar.",
      precio: 139.99,
      cantidad: 17,
      imagen: undefined,
    },
    {
      nombre: "Teclado Virtual Proyectado",
      descripcion: "Teclado que se proyecta en cualquier superficie.",
      precio: 99.99,
      cantidad: 22,
      imagen: undefined,
    },
    {
      nombre: "Ratón Ergonómico con Escáner",
      descripcion: "Ratón que escanea documentos y los convierte en texto.",
      precio: 79.99,
      cantidad: 28,
      imagen: undefined,
    },
    {
      nombre: "Libreta Inteligente con Digitalización",
      descripcion: "Libreta que digitaliza tus notas y dibujos.",
      precio: 69.99,
      cantidad: 32,
      imagen: undefined,
    },
    {
      nombre: "Traductor de Idiomas de Bolsillo",
      descripcion: "Dispositivo que traduce idiomas en tiempo real.",
      precio: 149.99,
      cantidad: 10,
      imagen: undefined,
    },
    {
      nombre: "Medidor de Calidad del Aire Portátil",
      descripcion: "Dispositivo que mide la calidad del aire y te alerta.",
      precio: 89.99,
      cantidad: 15,
      imagen: undefined,
    },
    {
      nombre: "Báscula Inteligente con Análisis Corporal",
      descripcion:
        "Báscula que analiza tu composición corporal y te da consejos.",
      precio: 129.99,
      cantidad: 20,
      imagen: undefined,
    },
    {
      nombre: "Dispensador de Comida Inteligente para Mascotas",
      descripcion: "Dispositivo que alimenta a tu mascota automáticamente.",
      precio: 169.99,
      cantidad: 11,
      imagen: undefined,
    },
    {
      nombre: "Termómetro Inteligente sin Contacto",
      descripcion: "Termómetro que mide la temperatura sin tocar la piel.",
      precio: 59.99,
      cantidad: 25,
      imagen: undefined,
    },
    {
      nombre: "Kit de Primeros Auxilios Inteligente",
      descripcion: "Kit que te guía en caso de emergencia.",
      precio: 79.99,
      cantidad: 28,
      imagen: undefined,
    },
    {
      nombre: "Candado Inteligente con Huella Dactilar",
      descripcion: "Candado que se abre con tu huella dactilar.",
      precio: 49.99,
      cantidad: 30,
      imagen: undefined,
    },
  ];
  displayProducts();
}

// Mostrar productos
function displayProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  products.forEach((product, index) => {
    productList.innerHTML += `
            <div class="product">
                <img src="${product.imagen}" alt="${product.nombre}">
                <h3>${product.nombre}</h3>
                <p>Precio: ${product.precio}$</p>
                <div class="buying-btns">
                  <button onclick="addToCart(${index})">Añadir al Carrito</button>
                  <button onclick="buyProducts(${product.precio})">Comprar</button>
                </div>
                <div class="delete-product-btn">
                  <button onclick="deleteProduct(${index})">Eliminar Producto</button>
                </div>
            </div>
        `;
  });
  if (username === "root") {
    displayDeleteBtns();
  }
}

// Mostrar botones de eliminar productos para el Admin
function displayDeleteBtns() {
  const deleteBtns = document.getElementsByClassName("delete-product-btn");
  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].style.display = "block";
  }
}

// Eliminar producto de la tienda
function deleteProduct(index) {
  products.splice(index, 1);
  displayProducts();
}

// Añadir al carrito
function addToCart(index) {
  cart.push(products[index]);
  updateCart();
}

// Eliminar del carrito
function deleteFromCart(id) {
  cart.splice(id, 1);
  updateCart();
}

// Actualizar carrito
function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item, id) => {
    cartItems.innerHTML += `
    <li>
      ${item.nombre} - ${item.precio}$
      <button onclick="deleteFromCart(${id})">Eliminar</button>
    </li>
    `;
    total += item.precio;
  });
  document.getElementById("total-price").innerText = total;
  document.getElementById("buy").innerHTML = `
      <button onclick="buyProducts(${total})">Comprar Todo</button>
    `;
}

// Comprar productos
function buyProducts(total) {
  const buyingForm = document.getElementById("buying-form");
  buyingForm.style.display = "block";
  buyingForm.innerHTML = `
        <button id="close-btn" onclick="closeBuyingForm()">x</button>
        <div>
          Datos Bancarios<br>
          Número de Tarjeta<br>
          <input type= "text" placeholder=" " required /><br>
          Fecha de Caducidad<br>
          <input type= "text" placeholder=" " required /><br>
          Código de Seguridad<br>
          <input type= "text" placeholder=" " required /><br>
          Total a pagar: ${total}
        </div>
    `;
}
function closeBuyingForm() {
  const buyingForm = document.getElementById("buying-form");
  buyingForm.style.display = "none";
}

// Añadir producto (para vendedor/admin)
function addProduct() {
  const nombre = document.getElementById("product-name").value;
  const precio = parseFloat(document.getElementById("product-price").value);
  const imagen = document.getElementById("product-image").files[0];

  if (nombre && !isNaN(precio) && imagen) {
    const reader = new FileReader();
    reader.onload = function (e) {
      products.push({ nombre, precio, imagen: e.target.result });
      displayProducts();
      document.getElementById("add-product-form").reset();
    };
    reader.readAsDataURL(imagen);
  }
}

function displayUsersList() {
  const usersList = document.getElementById("users-list");
  usersList.innerHTML = "";
  for (const [key, value] of Object.entries(users)) {
    if (key === "root") {
      continue;
    }
    usersList.innerHTML += `
        <div id="${key}">
            ${key} <br>
            <button onclick="deleteUser(${key})" >Eliminar Usuario</button>
            <br>
        </div>
        `;
  }
}

function deleteUser(user) {
  document.getElementById(`${user}`).style.display = "none";
  displayUsersList();
}

// Alternar visibilidad de formularios
function toggleForms() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("product-list").style.display = "block";
}
