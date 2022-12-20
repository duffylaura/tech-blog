const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#signupUsername").value.trim();
  const email = document.querySelector("#signupEmail").value.trim();
  const password = document.querySelector("#signupPW").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    //if response is a  not success 
    if (!response.ok) {
      console.log(await response.json());
      return;
    } else {
      document.location.replace("/");
    }
  }
  };

//when the user clicks the sign up button the signup function is triggered
document
  .querySelector("#signupBtn")
  .addEventListener("click", signupFormHandler);
