const items = [
   {
      id: 1,
      name: 'Hoodies',
      price: 14.0,
      image: 'assets/images/featured1.png',
      category: 'Hoodies',
      quantity: 10,
   },
   {
      id: 2,
      name: 'Shirts',
      price: 24.0,
      image: 'assets/images/featured2.png',
      category: 'Shirts',
      quantity: 15,
   },
   {
      id: 3,
      name: 'Sweatshirts',
      price: 24.0,
      image: 'assets/images/featured3.png',
      category: 'Sweatshirts',
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
  
   if (ubicacionPrincipal >= ubicacionActual) {
      headerMenu.classList.remove('scrollear')
   } else {
      headerMenu.classList.add('scrollear')
   }
})

/*=================VISTA CARRITO DE COMPRAS========================*/
const caart = document.getElementById('cart-container')
const shopIcon = document.getElementById('cart-shop')
const shopCloseIcon = document.getElementById('close-cart')

//Cuando ocurre un click sobre el icono de la tienda, quita la clase hide al elemento 'cart'
//para volverlo visible

shopIcon.addEventListener('click', () => {
  caart.classList.add('hide')
})
//Cuando detecta un click sobre el icono de cerrar, añade de nuevo la clase 'hide' al elemento 'cart' para ocultarlo
shopCloseIcon.addEventListener('click', () => {
  caart.classList.remove('hide')
})

/* ----------------------MOSTRAR LISTADO DE PRODUCTOS--------------------------- */
// contenedor.innerHTML = "html"
/*const showProducts = () => {
   const productContainer = document.getElementById('section-buzo')

   let fragment = ``

   items.forEach((producto) => {
      fragment += `
      <div class="div-buzo">
       <div class="product-card" id="${producto.id}">
       <div class="cart__box" >
       <img src="${producto.image}" alt="" class="img-buzo-lista">
     </div class="text-descript-info"> 
           <p>${producto.name}</p>
           <p>$${producto.price}</p>
           <button class="button-buzo">
           +
           </button>
       </div>
      </div> 
        `
   })

   productContainer.innerHTML = fragment

   cartFunctionality()
}*/

/* ---------------------AÑADE FUNCIONALIDAD A LOS BOTONES EN LOS PRODUCTOS--------------------------- */
const cart = []
let contCarrito=0;
let contItems=0;
function cartFunctionality() {
  
   const btns = document.querySelectorAll('.button-buzo')
   const counter=document.getElementById("cart-counter")
   const countItems=document.getElementById("count--items")
  
   btns.forEach((button) => {
     
      button.addEventListener('click', (e) => {
         
         const id = parseInt(e.target.parentElement.id)
        
         
       
   const selectedProduct = items.find((item) => item.id === id)
       
        let index= cart.indexOf(selectedProduct)
     
   
         if (index !== -1) {
          
            if (cart[index].quantity <= cart[index].cantidad) {
               alert('No hay stock')
            } else {
               cart[index].cantidad++
               contCarrito++
                contItems++
            }
         } else {
            selectedProduct.cantidad = 1
            cart.push(selectedProduct)
            contCarrito=contCarrito+1
                contItems=contItems+1
         }
        
      
         showProductsInCart(cart)
         counter.innerHTML=contCarrito
         countItems.innerHTML=contItems
         console.log(counter);
      })
     
   })
}


function showProductsInCart(cart) {
   console.log(cart)
   const getTotal=document.getElementById("cart--total")
   let counterPrice=0;
   const elementCart=document.getElementById("elements-cart")
 
   const carrito=document.getElementById("show-products")
   let carro=" "
   cart.forEach((x) => {
      
       carro += `
       <article class="producto-aside">
              <img class="img-cart"  src=" ${x.image}" alt="">
               <div class="text-conten" id="${x.id}">
                   <p><span class="price-color">$${x.price}</span> <span>stock:${x.quantity}</span> cant:${x.cantidad}</p>
                   <h4>${x.name}</h4>
                 <div class="cont-btn-sumaresta">
                 <button class="btn-inside-cart">+</button>
                  <button class="btn-inside-cart">-</  button>
                  <button class="btn-trash">
                  <i class='bx bx-trash'></i>
                  </button>
                 </div> 
               </div>
               
       </article>
   `
   
   })
   
   carrito.innerHTML=carro
   if (carro.length>1){
      elementCart.classList.add('open')
   }

  
  cart.forEach((y)=>{
     counterPrice+= y.price * y.cantidad
  })
  counterPrice="$"+counterPrice
  getTotal.innerHTML=counterPrice
}

/*--------------boton-filter---------------*/
/*function showOneProduct(cart){
 
   const productId=document.getElementById
   ("section-buzo")
   const Bn = document.querySelectorAll(".Bn")
  Bn.forEach((i)=>{
   
   i.addEventListener("click",(e)=>{
     
   console.log(e.id);


   })

  }) 
}*/
const productos = () => {
   const sectionProduct = document.getElementById("section-buzo")

   const Bn = document.querySelectorAll(".Bn")
   let fragment = " "
   Bn.forEach((i) => {
       i.addEventListener("click", () => {
           fragment=" "
           items.forEach(product => {
               if (product.category === i.id) {
                   fragment += `
                   <div class="div-buzo-solo">
                   <div class="div-buzo">
                    <div class="product-card" id="${product.id}">
                    <div class="cart__box" >
                    <img src="${product.image}" alt="" class="img-buzo-lista">
                  </div class="text-descript-info"> 
                        <p>${product.name}</p>
                        <p>$${product.price}</p>
                        <button class="button-buzo">
                        +
                        </button>
                    </div>
                   </div> 
                   </div> 
                     `
               } else if (i.id === "All" ) {
                   fragment += `
                   <div class="div-buzo">
                    <div class="product-card" id="${product.id}">
                    <div class="cart__box" >
                    <img src="${product.image}" alt="" class="img-buzo-lista">
                  </div class="text-descript-info"> 
                        <p>${product.name}</p>
                        <p>$${product.price}</p>
                        <button class="button-buzo">
                        +
                        </button>
                    </div>
                   </div> 
                     `
               
               }
           })
           
       sectionProduct.innerHTML = fragment
       cartFunctionality()
       })
       
   })
items.forEach(product => {
           fragment += `
           <div class="div-buzo">
            <div class="product-card" id="${product.id}">
            <div class="cart__box" >
            <img src="${product.image}" alt="" class="img-buzo-lista">
          </div class="text-descript-info"> 
                <p>${product.name}</p>
                <p>$${product.price}</p>
                <button class="button-buzo">
                +
                </button>
            </div>
           </div> 
             `
   })

sectionProduct.innerHTML = fragment
cartFunctionality()
}

document.addEventListener('DOMContentLoaded', () => {
   loadComponent()
   /*showProducts()*/
   productos ()

})

