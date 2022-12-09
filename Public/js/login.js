const loginFormHandler = async (event) => {
    event.preventDefault();
    const email = document.querySelector("#email-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();
  
    if (email && password) {
      const response = await fetch("/api/user-routes/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert("Login failed.");
        console.log(await response.json());
      }
    }
  };
  
  document.querySelector("#loginBtn").addEventListener("click", loginFormHandler);