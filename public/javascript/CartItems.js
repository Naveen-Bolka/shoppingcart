function bodyLoad(){
    loadCategories();
    loadProducts("https://fakestoreapi.com/products");
    getCartCount();
}

function loadCategories(){
    fetch("https://fakestoreapi.com/products/categories")
    .then(function(res){
        return res.json();
    }).then(function(category){
        category.unshift("all");
        category.map(function(list){
            var option =document.createElement("option");
            option.text=list.toUpperCase();

            option.value=list;
            document.getElementById("lstCategories").appendChild(option);
        })
    })
}

function loadProducts(url){
    document.querySelector("main").innerHTML=" ";
    
    fetch(url).then(res=>res.json())
    .then((products)=>{
        products.map((product)=>{
            var div=document.createElement("div");
            div.style.width="200px";
            div.innerHTML=`
           <div class="card m-1">
            <img src=${product.image} height="140px" class="card-img-top">
            <div class="card-header" style="height:140px">
                <div>${product.title}</div>
                </div>
                <div class="card-body ">
                    <dl>
                      <dt>Price</dt>
                      <dd>${product.price}</dd>
                      <dt>Rating </dt>
                      <dd>${product.rating.rate}<span class="bi bi-star-fill text-success"></span>[${product.rating.count}]</dd>  
                    </dl>
                </div>
                <div class="card-footer">
                    <button onclick="AddClick(${product.id})" class="btn btn-danger w-100"><span class="bi bi-cart4"></span>Add to cart</button>
                </div>
            </div>`;

                    document.querySelector("main").appendChild(div);
        })               
    })
}

var cartItems=[];
function getCartCount(){
    document.getElementById("lblCount").innerHTML=cartItems.length;
}

function AddClick(id){
    fetch(`http://fakestoreapi.com/products/${id}`)
    .then(function (res){
        return res.json();
    }).then(function(product){
            cartItems.push(product);
            getCartCount();
            allProduts();
    })
}



var totalPrice=0;


function showCart(){
    document.querySelector("tbody").innerHTML=" ";
    cartItems.map(function (item){
        var tr=document.createElement("tr");
        var tdTitle=document.createElement("td");
        var tdImage=document.createElement("td");
        var tdPrice=document.createElement("td");
        var pic=document.createElement("img");
        var tdRemove=document.createElement("td");

        totalPrice=parseFloat(totalPrice+item.price,1);
        tdTitle.innerHTML=item.title;
        tdPrice.innerHTML=item.price;
        pic.src=item.image;
        pic.width=100;
        pic.height=100;
        
        
        tdImage.appendChild(pic);
        tr.appendChild(tdTitle);
        tr.appendChild(tdImage);
        tr.appendChild(tdPrice);             

        document.querySelector("tbody").appendChild(tr);
        document.getElementById("totalPrice").innerHTML=`<button class="btn btn-dark w-100">Total Amount &#8377;${totalPrice}</button>`;
    })
}

function categoryChanged(){
    var categoryName=document.getElementById("lstCategories").value;
    if(categoryName=="all"){
        loadProducts("http://fakestoreapi.com/products");
    }
    else{
        loadProducts(`http://fakestoreapi.com/products/category/${categoryName}`);
    }
}

function ClickChange(name){
    if(name=="all"){
        loadProducts("http://fakestoreapi.com/products");
    }
    else{
        loadProducts(`http://fakestoreapi.com/products/category/${name}`);
    }

}
