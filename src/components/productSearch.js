let ProductSearch = [];
(async()=>{
    fetch("https://api.mercadolibre.com/sites/MLM/search?q=coleccionables")
    .then(response => response.json())
    .then(products => {
      ProductSearch = products.results;
    
    });
    
 })();
export {ProductSearch};
