const subbtn = document.getElementById('subbtn')
const taskList = document.querySelector('table')
const InPutT = document.getElementById('Title')
const InPutA= document.getElementById('Author')
const InPutI= document.getElementById('ISBN#')
const masterTable = document.querySelector('#books')



subbtn.addEventListener("click", addbook)
taskList.addEventListener('click', deleteBook)
document.addEventListener('DOMContentLoaded', getBooks)

let table = document.getElementById('books')

function addbook(e) {
    let row = table.insertRow(-1)
    let cell1 = row.insertCell(0)
    let cell2 = row.insertCell(1)
    let cell3 = row.insertCell(2)
    let cell4 = row.insertCell(3)
    cell1.innerHTML = document.getElementById('Title').value;
    cell2.innerHTML = document.getElementById('Author').value;
    cell3.innerHTML = document.getElementById('ISBN#').value;

    const a = document.createElement('a')
    a.appendChild(document.createTextNode('X'))
    a.className = 'blue-text text-darken-2 secondary-content'
    a.setAttribute('href', '#')
    cell4.appendChild(a)
    addBookLS(InPutT.value, InPutA.value, InPutI.value)

}

function deleteBook(e){
    if(e.target.textContent === 'X'){
        if(confirm('Are you sure to delete this task?')){
            e.target.parentElement.parentNode.remove()
            let name = event.target.parentElement.parentElement.children[0].innerText
            let author = event.target.parentElement.parentElement.children[1].innerText
            let ISBN = event.target.parentElement.parentElement.children[2].innerText
            book = [name, author, ISBN]
            deleteBookLS(book)
        }
    }

}
function deleteBookLS(book) {
    let books
    console.log(book)
    if(localStorage.getItem('books') === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    books.forEach((bookLS, booksIndex) => {
        if(JSON.stringify(bookLS) === JSON.stringify(book)){
            books.splice(booksIndex, 1)
        }

    })
    localStorage.setItem('books', JSON.stringify(books))

}

function addBookLS(title, author, isbn) {
    let books
    if(localStorage.getItem('books') === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    let book = [title, author, isbn]
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
}
function getBooks(){
    let books
    if(localStorage.getItem('books') === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    books.forEach((book) => {
        const getRow = masterTable.insertRow()

        const getCell1 = getRow.insertCell()
        const getCell2 = getRow.insertCell()
        const getCell3 = getRow.insertCell()
        const getCell4 = getRow.insertCell()

        const getCross = document.createElement('a')
        getCross.appendChild(document.createTextNode('X'))
        getCross.className = 'red-text text-darken-2 secondary-content'
        getCross.setAttribute('href', '#')

        getCell1.innerHTML = book[0].toString()
        getCell2.innerHTML = book[1].toString()
        getCell3.innerHTML = book[2].toString()
        getCell4.appendChild(getCross)
    })
}