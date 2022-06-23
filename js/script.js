var booksArr; 
var showTable;

if (localStorage.getItem('books')==null) {
    booksArr = []
    localStorage.setItem('books',JSON.stringify(booksArr));
   
    }
else {
    booksArr = JSON.parse(localStorage.getItem('books'));
    
}
class Book{
    constructor(name , genre , author) {
        this.name = name;
        this.autho= author;
        this.genre = genre; }
}
if (booksArr.length < 1) {showTable = false}
else{showTable = true}
if (showTable) {
    var tableHead = document.getElementById('table');
    var tbody = document.getElementById('tbody');
    tableHead.classList.remove('d-none');
    for (let i = 0; i < booksArr.length; i++) {   
        tbody.innerHTML += `
        <tr>
        <td>${booksArr[i].name}</td>
        <td>${booksArr[i].autho}</td>
        <td>${booksArr[i].genre}</td>
        <td><button type="button" class="btn btn-danger" onclick="remove(${booksArr.indexOf(booksArr[i])})">Delete</button></td>
        </tr>
        `     
    }
}
function remove(id){
  console.log(id)
  booksArr.splice(id , 1);
  localStorage.setItem('books',JSON.stringify(booksArr));
  tbody.innerHTML = ""
  if (showTable) {
    tableHead.classList.remove('d-none');
    for (let i = 0; i < booksArr.length; i++) {   
        tbody.innerHTML += `
        <tr>
        <td>${booksArr[i].name}</td>
        <td>${booksArr[i].autho}</td>
        <td>${booksArr[i].genre}</td>
        <td><button type="button" class="btn btn-danger" onclick="remove(${booksArr.indexOf(booksArr[i])})">Delete</button></td>
        </tr>
        `     
    }

  }
 
}
Bookform = document.getElementById('Bookform');
Bookform.addEventListener('submit',function(e) {
    e.preventDefault();
    console.log('submited');
    let bookname= document.getElementById('bookname').value;
    let author= document.getElementById('author').value;
    let genre;
    if (document.getElementById('programming').checked) {
     genre = 'programming'   
    }
    else if (document.getElementById('fiction').checked) {
     genre = 'fiction'   
    }
    else if (document.getElementById('cooking').checked) {
     genre = 'cooking'   
    }
    if ((bookname.length < 1 || author.length < 1)){
        alert('please enter a genuine book')
    }
     else{
    book = new Book(bookname ,genre , author);
    console.log(book);
    booksArr.push(book);
    localStorage.setItem('books',JSON.stringify(booksArr));
    document.getElementById('tbody').innerHTML += `
    <tr>
    <td>${book.name}</td>
    <td>${book.autho}</td>
    <td>${book.genre}</td>
    <td><button type="button" class="btn btn-danger" onclick="remove(${booksArr.length - 1})">Delete</button></td>
    </tr>
    `
    }

})