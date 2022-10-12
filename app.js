const subbtn = document.getElementById('subbtn')

subbtn.addEventListener("click", addbook)

let table = document.getElementById('books')

function addbook(e)  {
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
}
