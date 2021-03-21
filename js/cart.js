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



onLoadCartAmount();
displayCart();