function renderBooks() {
  let content = document.getElementById("content");
  for (let indexBook = 0; indexBook < books.length; indexBook++) {
    content.innerHTML += FirstBookTemplate(indexBook);

    let comment = document.getElementById("Kommentar" + [indexBook]);

    for (
      let indexComment = 0;
      indexComment < books[indexBook].comments.length;
      indexComment++
    ) {
      comment.innerHTML += pushComment(indexBook, indexComment);
    }

    let commentName = document.getElementById("commenNAME" + [indexBook]);
    for (
      let indexName = 0;
      indexName < books[indexBook].comments.length;
      indexName++
    ) {
      commentName.innerHTML += pushName(indexBook, indexName);
    }
        
  }

}

function pushComment(indexBook, indexComment) {
  return `
  <p>:${books[indexBook].comments[indexComment].comment}</p>`;
}

function pushName(indexBook, indexName) {
  return `<p>${books[indexBook].comments[indexName].name}</p>`;
}


function addComment() {
  let writeCommentRef = document.getElementById("pushComment").value;
  let demoRef = document.getElementById("demo");

  demoRef.innerHTML += `<p>${writeCommentRef}</p>`;
  document.getElementById("pushComment").value = "";
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
