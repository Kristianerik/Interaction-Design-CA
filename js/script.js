/*JavaScript for adding products to page */
const url = "http://kristianportfolio.eu/wp-json/wc/store/products"
var contentArea = document.querySelector(".contentInput");

async function makeApiCall() {
    try{
        const response = await fetch(url);

        const retrieved = await response.json();
        console.log(retrieved);

        contentArea.innerHTML = '<img src= ' + retrieved[0].images[0].src + ' class="userIcon">' + '<h1 class="contentText">Title: ' + retrieved[0].name + "</h1>" 
        + '<h1 class="contentText">Price: £' + retrieved[0].prices.price + "</h1>" + '<h1 class="contentText">Rating: ' + retrieved[0].average_rating + "</h1>";
    }


    catch (error) {
    console.log(error);    
 } 
}
makeApiCall();