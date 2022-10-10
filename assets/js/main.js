const items = [
  {
     id: 1,
     name: 'Hoodies',
     price: 14.0,
     image: 'assets/images/featured1.png',
     category: 'hoodies',
     quantity: 10,
  },
  {
     id: 2,
     name: 'Shirts',
     price: 24.0,
     image: 'assets/images/featured2.png',
     category: 'shirts',
     quantity: 15,
  },
  {
     id: 3,
     name: 'Sweatshirts',
     price: 24.0,
     image: 'assets/images/featured3.png',
     category: 'shirts',
     quantity: 20,
  },
]

/* ====================DARK MODE============================*/
document.addEventListener('DOMContentLoaded', () => {
  console.log('dom cargado')
})

const themeIcon = document.getElementById('moon-btn')

themeIcon.addEventListener('click', () => {
  document.body.classList.toggle('dark')
  if (themeIcon.classList.contains('bx-moon')) {
     themeIcon.classList.replace('bx-moon', 'bx-sun')
  } else {
     themeIcon.classList.replace('bx-sun', 'bx-moon')
  }
})

/*===========================LOADER============================*/
const loadComponent = () => {
  const loader = document.getElementById('loader')

  setTimeout(() => {
     loader.classList.add('hide')
  }, 3000)
}

/*=======================MENU BURGUER============================*/

document.addEventListener('DOMContentLoaded', () => {
  loadComponent()
})

const menuBtn = document.getElementById('menu-btn')
const menu = document.querySelector('.nav-menu')
menuBtn.addEventListener('click', () => {
  if (menu.classList.contains('visible')) {
     menu.classList.remove('visible')
  } else {
     menu.classList.add('visible')
  }
})

/*===========================MENU CAMBIO============================*/
const ubicacionPrincipal = window.scrollY
const headerMenu = document.getElementById('header')

window.addEventListener('scroll', function () {
  const ubicacionActual = window.scrollY
  console.log(ubicacionActual)
  if (ubicacionPrincipal >= ubicacionActual) {
     headerMenu.classList.remove('scrollear')
  } else {
     headerMenu.classList.add('scrollear')
  }
})

/*=================VISTA CARRITO DE COMPRAS========================*/
const cart = document.getElementById('cart-container')
const shopIcon = document.getElementById('cart-shop')
const shopCloseIcon = document.getElementById('close-cart')

//Cuando ocurre un click sobre el icono de la tienda, quita la clase hide al elemento 'cart'
//para volverlo visible

shopIcon.addEventListener('click', () => {
  cart.classList.add('hide')
})
//Cuando detecta un click sobre el icono de cerrar, añade de nuevo la clase 'hide' al elemento 'cart' para ocultarlo
shopCloseIcon.addEventListener('click', () => {
  cart.classList.remove('hide')
})

/* ----------------------MOSTRAR LISTADO DE PRODUCTOS--------------------------- */
// contenedor.innerHTML = "html"
const showProducts = () => {
  const productContainer = document.getElementById('products-list')

  let fragment = ``

  items.forEach((producto) => {
     fragment += `
      <div class="product-card" id="${producto.id}">
          <img src="https://picsum.photos/200" alt="">
          <p>${producto.name}</p>
          <button class="btn-add">ADD</button>
      </div>
       `
  })

  productContainer.innerHTML = fragment

  cartFunctionality()
}

/* ---------------------AÑADE FUNCIONALIDAD A LOS BOTONES EN LOS PRODUCTOS--------------------------- */
function cartFunctionality() {
  /* Obtiene todos los botones de los productos */
  const btns = document.querySelectorAll('.btn-add')
  const cart = []

  //Añade un eventListener a cada boton para detectar un click
  btns.forEach((button) => {
     button.addEventListener('click', (e) => {
        //Obtiene el id del elemento que sufrio el click
        const id = parseInt(e.target.parentElement.id)
        //Encuentra al elemento seleccionado en el arreglo de productos
        const selectedProduct = items.find((item) => item.id === id)

        //Determina si ese producto ya fue seleccionado de forma previa. (Determina si el producto ya existe en el carrito)
        let index = cart.indexOf(selectedProduct)

        //Sí index es DISTINTO de -1 entonces el producto ya existe en el carrito. Fue seleccionado antes
        if (index !== -1) {
           //Evalua si hay suficientes productos en stock para que el cliente pueda añadir otro producto a su carrito
           if (cart[index].quantity <= cart[index].cantidad) {
              alert('No hay stock')
           } else {
              //Si la cantidad de ese producto seleccionado aun no sobrepasa la cantidad de productos disponibles en stock, añade otro producto igual al carrito
              cart[index].cantidad++
           }
        } else {
           //Ese producto aun no existe en el carrito

           //Se añade la propiedad 'cantidad' para representar cuantos productos han sido seleccionados
           selectedProduct.cantidad = 1

           //Se añade al carrito
           cart.push(selectedProduct)
        }

        console.log(cart)
        showProducts(cart)
     })
  })
}

function showProductsInCart(cart) {}

document.addEventListener('DOMContentLoaded', () => {
  loadComponent()
  showProducts()
})


