export function loadnavbar(){
     let navv = document.getElementById("navv");
 
     let emailuser = sessionStorage.getItem("email");
  //   console.log(emailuser);
     // if no one login [session == null]
     if (!emailuser) {
       navv.style.display = "block";
       navv.innerHTML = `
            <nav class="navbar navbar-expand-lg  text-white">
  <div class="container-fluid">
    <!-- Left side -->
    <div class="navbar-nav me-auto">
      <a class="nav-link text-white" href="#">Brands</a>
      <a class="nav-link text-white" href="#">Contact Us</a>
    </div>

    <!-- Center -->
    <a class="navbar-brand mx-auto text-center text-white" href="/E-commerce/Home.html">
      LC WAGIGI
    </a>

    <!-- Right side -->
    <div class="navbar-nav ms-auto">
     
      <a class="nav-link text-white" href="#">Best Seller</a>
      <a class="nav-link text-white" href="#">New Arrival</a>
       <a class="nav-link text-white" href="/E-commerce/authentication/login/login.html" title="Sign In">
        <i class="bi bi-person"></i>
      </a>
       <a class="nav-link text-white" href="/E-commerce/Cart Design/Cart.html" title="Sign In">
        <i class="bi bi-cart3"></i>
      </a>
    </div>
  </div>
</nav>

  `;
       return;
     }

     // if user login already in session email
     // get type from this mail to know this mail admin or not
     let accounttype = getaccounttype(emailuser);
     if (accounttype === "Admin") {
       navv.style.display = "block";
       navv.innerHTML = `
  
   <nav class="navbar navbar-expand-lg text-white " >
    <div class="container-fluid">
      <!-- Left side -->
      <div class="navbar-nav me-auto">
        <a class="nav-link text-white" href="#">Best Seller</a>
        <a class="nav-link text-white" href="/E-commerce/Admin panel/home.html">Admin panel</a>
      </div>
  
      <!-- Center -->
      <a class="navbar-brand mx-auto text-center text-white" href="/E-commerce/Home.html">
      LC WAGIGI
      </a>

      <!-- Right side -->
      <div class="navbar-nav ms-auto sign-out">
        <span class="nav-link text-white">Hello <strong>${emailuser}</strong></span>
        <a id = "signout" class="nav-link text-white" href="#" title="Sign Out">
          <i class="bi bi-box-arrow-right"></i>
        </a>
      </div>
    </div>
  </nav>
  
  
  `;
     } else {
       navv.style.display = "block";
       navv.innerHTML = `
  
   <nav class="navbar navbar-expand-lg text-white " >
    <div class="container-fluid">
      <!-- Left side -->
      <div class="navbar-nav me-auto">
        <a class="nav-link text-white" href="#">Best Seller</a>
        <a class="nav-link text-white" href="#">New Arrival</a>
      </div>
  
      <!-- Center -->
      <a class="navbar-brand mx-auto text-center text-white" href="/E-commerce/Home.html">
      LC WAGIGI
      </a>

      <!-- Right side -->
      <div class="navbar-nav ms-auto sign-out">
        <span class="nav-link text-white">Hello <strong>${emailuser}</strong></span>
        <a id = "signout" class="nav-link text-white" href="#" title="Sign Out">
          <i class="bi bi-box-arrow-right"></i>
        </a>
          <a class="nav-link text-white" href="/E-commerce/Cart Design/Cart.html" title="cart">
        <i class="bi bi-cart3"></i>
      </a>
      </div>
    </div>
  </nav>
  
  `;
     }

     // handle signout event
     let signout = document.getElementById("signout");
     signout.addEventListener("click", function () {
       sessionStorage.removeItem("email");
       localStorage.setItem("currentUser", JSON.stringify(null));
       navv.style.display = "none";
       window.location.reload();
     });


}

let userss = JSON.parse(localStorage.getItem("users"));
function getaccounttype(email) {
  let type = null;
  userss.forEach((element) => {
    if (element.email == email) {
      type = element.accountType;
    }
  });
  return type;
}