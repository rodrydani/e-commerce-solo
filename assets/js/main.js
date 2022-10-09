const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: 'assets/images/featured1.png',
      category: 'hoodies',
      quantity: 10
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: 'assets/images/featured2.png',
      category: 'shirts',
      quantity: 15
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: 'assets/images/featured3.png',
      category: 'shirts',
      quantity: 20
    }
  ]

  document.addEventListener ("DOMContentLoaded", ()=>{
    console.log("dom cargado");
  })

  const themeIcon= document.getElementById("moon-btn");

  themeIcon.addEventListener ("click",()=>{
     document.body.classList.toggle("dark");
     if( themeIcon.classList.contains("bx-moon") ){
      themeIcon.classList.replace("bx-moon", "bx-sun")
  }else{
      themeIcon.classList.replace("bx-sun", "bx-moon")
  }
 
  });
  
  //----LOADER

  const loadComponent = () => {
    const loader = document.getElementById( "loader" )

    setTimeout(() => {
        loader.classList.add( "hide" )
    }, 3000);
}

//------MENU BURGER
document.addEventListener( "DOMContentLoaded", () =>{
    loadComponent() 
})

const menuBtn= document.getElementById("menu-btn");
const menu= document.querySelector(".nav-menu");
menuBtn.addEventListener("click",()=>{
 if(menu.classList.contains("visible")){
  menu.classList.remove("visible");
 }else{
  menu.classList.add("visible");
 }
});


//---- MENU CAMBIO
const ubicacionPrincipal=window.scrollY
const headerMenu=document.getElementById("header");

window.addEventListener("scroll",function() {
  const ubicacionActual=window.scrollY;
  console.log(ubicacionActual);
  if (ubicacionPrincipal>=ubicacionActual){
    headerMenu.classList.remove('scrollear');
  }else{
    headerMenu.classList.add('scrollear');
  }
})



