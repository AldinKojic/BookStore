function FirstBookTemplate(i) {
  return `
    
   <section>
      <article class="book-content">
    <div class="shadow-wrapper">
        <header class="book-header">
          <h2> ${books[i].name}</h2>
        </header>
        <div class="img-container">
          <img class="book-img" src="./img/book.png" alt="" />
        </div>
        <div class="meta-content">
          <div class="book-price-like">
            <p class="book-price">${books[i].price}<span class="currency-symbol">€</span></p>
            <p  onclick="incrementValue()" class="book-likes">${books[i].likes}<img class="like-symbol" src="./img/heart.png" alt="heart-symbol" ></p>
          </div>

          <div class="meta-grid">
            <div class="meta-labels">
              <p>Author</p>
              <p>Erscheinungsjahr</p>
              <p>Genre</p>
            </div>
            <div class="meta-values">
              <p>:</p>
              <p>:</p>
              <p>:</p>
            </div>
            <div class="meta-data">
                <p>${books[i].author}</p>
                <p>${books[i].publishedYear}</p>
                <p>${books[i].genre}</p>
            </div>
          </div>
        </div>
        <div id="addComment"class="comments-wrapper">
          <h3 class="comment-headline">Komentare:</h3>
          <div class="scrollable-container">
            <div class="meta-grid">
              <div class="meta-labels">
            <p>:</p>
              </div>

              <div class="meta-values">
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
              </div>
              <div class="meta-data" >
               <p>${books[i].comments}</p>
                 <div id="demo"></div>
                 </div>                                  
              </div> 
          </div>
          <div class="write-comment">
            <input
              type="text"
              id="pushComment"
              name="firstname"
              placeholder="Schreibe dein Kommentar..."
            />
            <button  onclick="addComment()" class="send-comment"><img  class="send-symbol" src="./img/send-symbol.png" alt="send-symbol"></button>
          </div>
        </div>
     </div>
      </article>
</section>
    `;
}
