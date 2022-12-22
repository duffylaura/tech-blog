async function commentHandler(event) {
    event.preventDefault();
    const text = document.querySelector(".textarea").value.trim();
    console.log(text);
    const post_id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 1
    ];

    const response = await fetch(`/api/comment`, {
      method: "POST",
      body: JSON.stringify({
        text,
        post_id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    //if user inputs no text in the comment then un the validation function and modal popup
    console.log(response.text);
    if (!response.ok) {
      console.log(await response.json());
      commentValidation();
      return;
    } else {
      // If successful, reload location
      document.location.reload();
    }
  }
  
  //function to display an error modal if the user tries to submit a comment with no body
  const commentValidation = () => {
    const modalOKBtn = document.querySelector(".ok-btn");
    const modalEl = document.querySelector(".modal");
    modalEl.classList.add("is-active");
    modalOKBtn.addEventListener("click", function () {
      modalEl.classList.remove("is-active");
    });
  };
  
  document.querySelector("#commentBtn").addEventListener("click", commentHandler);
  
  // Delete Comment Button 

async function deleteCommentHandler(event) {
    event.preventDefault();
    const id = event.target.getAttribute("data-attribute");
    // Delete route 
    const response = await fetch(`/api/comment/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload(); //Page should reload without comment
    } else {
      deleteValidation();
    }
  }

  //Because there is a delte button for every comment need array
  function deleteBtnArray() {
    const deleteBtns = document.querySelectorAll("#deleteCommentBtn");
    console.log(deleteBtns);
    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].addEventListener("click", deleteCommentHandler);
    }
  }
  
  deleteBtnArray();
  
  //Comment Validation 
  //Display modal if the user tries to submit a comment with no body
  const deleteValidation = () => {
    const deleteModalOKBtn = document.querySelector("#deleteModalOK");
    const deleteModalEl = document.querySelector("#deleteModal");
    deleteModalEl.classList.add("is-active");
    deleteModalOKBtn.addEventListener("click", function () {
      deleteModalEl.classList.remove("is-active");
    });
  };
  