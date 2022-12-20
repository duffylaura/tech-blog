//navbar burger
const navburger = document.querySelector(".navbar-burger");

// Only see on mobile 
function togNav() {
    var nav = document.getElementById("navbar-mobile");
    nav.classList.toggle('is-active');
};
navburger.addEventListener("click", togNav);

//Logout button JS // tagged with #logoutBtn id on the main.hbs
const logout = async () => {
    const response = await fetch("/api/users/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
  
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("logout unsuccessful");
    }
  };
  
  document.querySelector("#logoutBtn").addEventListener("click", logout);
  