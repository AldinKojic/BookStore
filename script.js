function renderBooks() {
  let content = document.getElementById("content");
  for (let index = 0; index < books.length; index++) {
    content.innerHTML += FirstBookTemplate(index);

  

  
  }
}

// function renderComment(){
// let comment = document.getElementById("Kommentar")
// for (let index = 0; index < books[index].comments.comment,length; index++) {
//     comment.innerHTML += pushComment()
// }
//  }
// function pushComment(){
//     return`<p>${books[0].comments.comment}</p>`
//  }



function addComment() {
  let writeCommentRef = document.getElementById("pushComment").value;
  let demoRef = document.getElementById("demo");

  
  demoRef.innerHTML += `<p>${writeCommentRef}</p>`;
  document.getElementById("pushComment").value = "";

}
  addComment()


// function like() {
//   likeRef = document.getElementById("getLike"):
//   likeRef.innerHTML ="";

  
// }

function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 :books[i].price;
    value++;
    document.getElementById('number').value = value;
    
}



//  function addComment() {
//   let writeCommentRef = document.getElementById("pushComment").value;
//   document.getElementById("demo").innerHTML = writeCommentRef;

function commentUser() {
  const comments = books[1].comments;

  for (let i = 0; i < comments.length; i++) {
    console.log(comments[i].comment);
  }
}

// function renderComments(index) {
//   const container = document.getElementById("comments");
//   container.innerHTML = "";
//   const comments = books[index].comments;
//   for (let i = 0; i < comments.length; i++) {
//     container.innerHTML += `<p>${comments[i].comment}`;
//   }
// }
// commentUser();
// renderComments();



 