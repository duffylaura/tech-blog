//function to allow user to edit one of their posts
async function editFormHandler(event) {
    event.preventDefault();
    //grab values of the title and content of the post
    const title = document.querySelector("#edit-title").value;
    const content = document.querySelector("#edit-content").value;
    //variable id set to the url converted to a string and split by dashes so we can get the post id from the url and make sure the correct post is updated
    const id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 1
    ];
  
    const response = await fetch(`/api/post/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title,
        content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.replace(`/dashboard`);
    } else {
      alert("Edit failed!");
    }
  }
  
  document
    .querySelector("#edit-button")
    .addEventListener("click", editFormHandler);
  