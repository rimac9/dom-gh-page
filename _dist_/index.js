 /*
  This file is just a silly example to show everything working in the browser.
  When you're ready to start on your site, clear the file. Happy hacking!
 */

const baseURL = "https://platzi-avo.vercel.app";
const appNode = document.querySelector('#app');
//API--- Intl    1. format-fechas, 2. format-monedas
const formatPrice = (price) => {
    // api de internacionalización 
   const newPrice = new window.Intl.NumberFormat("en-EN", {  
        style: "currency",
        currency: "USD",
}).format(price);

return newPrice;
};


appNode.className = 'mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ' ;
// web api
// Conectarnos al server
window
.fetch(`${baseURL}/api/avo`)
// Procesar la respuesta, y convertirla en JSON
.then((respuesta) => respuesta.json())
// JSON --> Data -> Renderizar info browser

.then(responseJson => {
    const todosLosItems =[];
    responseJson.data.forEach((item) => {
    // crear imagen
   const imagen = document.createElement('img');
   // URL de la imagen
   imagen.src = `${baseURL}${item.image}`
   imagen.className = "h-25 w-25 m-auto rounded-lg p-10"
//    imagen.backgroundColor = "bg-lime-200"


    //crear titulo
   const title = document.createElement('h2');
        title.textContent = item.name;
    //   para dar estilo 
     // title.style = "font-size: 2rem" para dar style con style 
    
    /* 1° clases contelwin .. style en forma de objeto hay una
    propiedad para cada una de las propiedades de css 
    title.style.fontSize = "3rem" */
    //  2° en forma de clases 
    title.className = ' text-green-700 text-lg bg-yellow-400 p-2'  

    
        
    //crear precio
   const price = document.createElement('div');
        price.textContent = item.price
        price.className = 'text-green-700 text-xl mb-2'
        price.textContent = formatPrice(item.price)

        // contenedor
   const container = document.createElement('div'); 
//    container.className = "bg-lime-200	";
   container.append(imagen, title, price);
   
   container.className = 'bg-green-300 font-bold max-w-64 min-h-24 rounded-xl border-2';
   todosLosItems.push(container);
   
//    document.querySelector('#app').classList.add('grid-cols-3')
})
appNode.append(...todosLosItems)
})







console.log('Happy hacking :)')
