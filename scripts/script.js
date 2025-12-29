function renderBooks() {
  let content = document.getElementById("content");
  content.innerHTML = "";

  for (let indexBook = 0; indexBook < books.length; indexBook++) {
    content.innerHTML += FirstBookTemplate(indexBook);

    let commentsRef = document.getElementById(`comments-${indexBook}`);
    commentsRef.innerHTML = "";

    for (
      let indexComment = 0;
      indexComment < books[indexBook].comments.length;
      indexComment++
    ) {
      commentsRef.innerHTML += pushCommentRow(indexBook, indexComment);
    }
  }
}

function pushCommentRow(indexBook, indexComment) {
  const c = books[indexBook].comments[indexComment];

  return `
    <div class="comment-row">
      <div class="comment-name">${c.name}</div>
      <div class="comment-text">${c.comment}</div>
    </div>
  `;
}

function addComment(bookIndex) {
  const inputRef = document.getElementById(`pushComment-${bookIndex}`);
  const text = inputRef.value.trim();

  if (text === "") return;

  books[bookIndex].comments.push({
    name: "Du",
    comment: text,
  });

  inputRef.value = "";
  renderBooks();
}

function addLike(index) {
  if (books[index].liked === false) {
    books[index].likes++;
    books[index].liked = true;
  } else {
    books[index].likes--;

    books[index].liked = false;
  }
  document.getElementById(`likeCount-${index}`).innerHTML = books[index].likes;
}


