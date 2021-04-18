/*JavaScript for adding products to page */
const url = "http://kristianportfolio.eu/wp-json/wc/store/products"
var containerOne = document.querySelector(".one");
var containerTwo = document.querySelector(".two");
var containerThree = document.querySelector(".three");
var containerFour = document.querySelector(".four");
var containerFive = document.querySelector(".five");
var containerSix = document.querySelector(".six");




async function makeApiCall() {
    try{
        const response = await fetch(url);

        const retrieved = await response.json();
        console.log(retrieved);

       // Code for first game
        containerOne.innerHTML = "<a href='gamePageOne.html'>" + '<img src=' + retrieved[0].images[0].src + " class='gameCover'>" + "</a>" + '<p class="gameTitle">Title: ' 
        + retrieved[0].name + '</p>' + '<p class="gamePrice">Price: £' + retrieved[0].prices.price + "</p>" + '<div class="purchaseButton">Purchase</div>';
        
       // Code for Second Game
       containerTwo.innerHTML = "<a href='gamePageTwo.html'>" + '<img src=' + retrieved[1].images[0].src + " class='gameCover'>" + "</a>" + '<p class="gameTitle">Title: ' 
       + retrieved[1].name + '</p>' + '<p class="gamePrice">Price: £' + retrieved[1].prices.price + "</p>" + '<div class="purchaseButton">Purchase</div>';
        
       // Code for Third Game
       containerThree.innerHTML = "<a href='gamePageThree.html'>" + '<img src=' + retrieved[2].images[0].src + " class='gameCover'>" + "</a>" + '<p class="gameTitle">Title: ' 
       + retrieved[2].name + '</p>' + '<p class="gamePrice">Price: £' + retrieved[2].prices.price + "</p>" + '<div class="purchaseButton">Purchase</div>';

       // Code for Fourth Game
       containerFour.innerHTML = "<a href='gamePageFour.html'>" + '<img src=' + retrieved[3].images[0].src + " class='gameCover'>" + "</a>" + '<p class="gameTitle">Title: ' 
       + retrieved[3].name + '</p>' + '<p class="gamePrice">Price: £' + retrieved[3].prices.price + "</p>" + '<div class="purchaseButton">Purchase</div>';

       // Code for Fifth Game
       containerFive.innerHTML = "<a href='gamePageFive.html'>" + '<img src=' + retrieved[4].images[0].src + " class='gameCover'>" + "</a>" + '<p class="gameTitle">Title: ' 
       + retrieved[4].name + '</p>' + '<p class="gamePrice">Price: £' + retrieved[4].prices.price + "</p>" + '<div class="purchaseButton">Purchase</div>';

       // Code for Sixth Game
       containerSix.innerHTML = "<a href='gamePageSix.html'>" + '<img src=' + retrieved[5].images[0].src + " class='gameCover'>" + "</a>" + '<p class="gameTitle">Title: ' 
       + retrieved[5].name + '</p>' + '<p class="gamePrice">Price: £' + retrieved[5].prices.price + "</p>" + '<div class="purchaseButton">Purchase</div>';



    }


    catch (error) {
    console.log(error);    
 } 
}
makeApiCall();


/*JavaScript for add to cart feature 
let carts = document.querySelectorAll(".purchaseButton");

let products = [
    {
    name: "Call of Duty Modern Warfare",
    tag: "CallofDutyCover",
    price: 499,
    inCart: 0
    },
    {
        name: "Minecraft",
        tag: "MinecraftCover",
        price: 399,
        inCart: 0
    },
    {
        name: "Super Smash Bros Ultimate",
        tag: "SmashBrosCover",
        price: 599,
        inCart: 0
    },
    {
        name: "Call of Duty Modern Warfare",
        tag: "CallofDutyCover",
        price: 499,
        inCart: 0
    },
    {
        name: "Minecraft",
        tag: "MinecraftCover",
        price: 399,
        inCart: 0
    },
    {
        name: "Super Smash Bros Ultimate",
        tag: "SmashBrosCover",
        price: 599,
        inCart: 0
    }
];

for (let i = 0; i < carts.length; i++){
    carts[i].addEventListener("click", () => {
        cartAmount(products[i]);
        totalCost(products[i])
    })
}

function onLoadCartAmount() {
    let productAmount  = localStorage.getItem("cartAmount");

    if(productAmount) {
        document.querySelector("#cart span").textContent = productAmount;
    }
}

function cartAmount(product){
    
    let productAmount  = localStorage.getItem("cartAmount");
    console.log(productAmount);
    
    productAmount = parseInt(productAmount);
 
    if( productAmount){
        localStorage.setItem("cartAmount", productAmount + 1);
        document.querySelector("#cart span").textContent = productAmount + 1;
    } else {
        localStorage.setItem("cartAmount", 1);
        document.querySelector("#cart span").textContent = 1;
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){
        
        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
        
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    
    
    
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product){
    //console.log("The products price is", product.price);
    let cartCost = localStorage.getItem("totalCost");
    
    console.log("My cartCost is", cartCost);

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }

}
*/


//onLoadCartAmount();
//displayCart();