//Login page logic 
const loginFormHandler = async (event) => {
  event.preventDefault();
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    //if incorrect password or login, then disply modal
    if (!response.ok) {
      console.log(await response.json());
      return;
    }
    else {
      // If successful, redirect the browser to the homepage page
      document.location.replace("/");
      return;
    }
  }
};

//when the user clicks the login button the login function is triggered
document.querySelector("#loginBtn").addEventListener("click", loginFormHandler);
