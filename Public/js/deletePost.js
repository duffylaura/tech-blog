//function that allows user to delete a post if it is their own post they made
async function deleteFormHandler(event) {
    event.preventDefault();
    //variable id set to the url converted to a string and split by dashes so we can get the post id from the url and make sure the correct post is deleted
    const id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 1
    ];
  
    const response = await fetch(`/api/post/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Post was not delted. Try again.");
    }
  }
  
  document
    .querySelector("#delete-button")
    .addEventListener("click", deleteFormHandler);
  