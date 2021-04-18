/*JavaScript for adding products to page */
const url = "http://kristianportfolio.eu/wp-json/wc/store/products"
var contentArea = document.querySelector(".contentInput");

async function makeApiCall() {
    try{
        const response = await fetch(url);

        const retrieved = await response.json();
        console.log(retrieved);

        contentArea.innerHTML = '<img src= ' + retrieved[4].images[0].src + ' class="userIcon">' + '<h1 class="contentText">Title: ' + retrieved[4].name + "</h1>" 
        + '<h1 class="contentText">Price: £' + retrieved[4].prices.price + "</h1>" + '<h1 class="contentText">Rating: ' + retrieved[4].average_rating + "</h1>";
    }


    catch (error) {
    console.log(error);    
 } 
}
makeApiCall();