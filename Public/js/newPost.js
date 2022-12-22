const postTitle = document.querySelector("#title");
const postContent = document.querySelector("#content");
const createForm = document.querySelector("#create-form");

const createPostForm = async (e) => {
  e.preventDefault();

  const newTitle = postTitle.value;
  const newContent = postContent.value;

  if (newTitle && newContent) {
    const response = await fetch("/api/post", {
      method: "POST",
      body: JSON.stringify({
        newTitle,
        newContent
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      window.location.reload();
    } else {
      alert("Post was not created");
    }
  }
};

createForm.addEventListener("submit", createPostForm);
