import { loadnavbar } from "../../navbar.js";

function GetWomenProduct ()
{
    let menProuct = JSON.parse(localStorage.getItem("products"));
    return menProuct.filter((element) => element.gender == "Women" || element.gender == "Unisex")
}
window.addEventListener("load", function () {
    loadnavbar();
    let containerForProducts = this.document.getElementById("productList");
    let data = GetWomenProduct ();

    containerForProducts.innerHTML = "";
    data.forEach(product => {
        containerForProducts.innerHTML += 
        `
        <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="product card p-3 shadow-sm rounded position-relative">
                <img src="${product.images[0]}" alt="Product 1" class="img-fluid rounded" style="height: 300px; object-fit: cover;">
                <h5>${product.name}</h5>
                <p>$${product.price}</p>

                <!-- Overlay that appears on hover -->
                <div class="overlay d-flex align-items-center justify-content-center">
                    <button class="btn btn-light btn-lg">View Details</button>
                </div>
            </div>
        </div>
        `
    });

})
