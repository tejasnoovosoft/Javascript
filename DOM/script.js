window.onload = () => {
    const heading = document.createElement('h1')
    const textData = document.createTextNode("Load Successfully")
    heading.appendChild(textData)
    document.body.appendChild(heading)
}

const story = document.querySelector('.story')
const setText = document.querySelector('#set-text')
setText.addEventListener("click", () => {
    story.textContent = "It was a dark and stormy night..."
})

const clearText = document.querySelector('#clear-text')
clearText.addEventListener("click", () => {
    story.textContent = ""
})

const list = document.getElementById("list")
list.innerHTML += `<li><a href="#">Item ${list.children.length + 1}</a></li>`
console.log(list.innerHTML)

const list2 = document.querySelector('#list')
console.log(list2)

const button = document.querySelector('button')
button.setAttribute("name", "primary-btn")
button.setAttribute("disabled", "true")

const addItem = document.querySelector('#add-item')
addItem.addEventListener("click", () => {
    list.innerHTML += `<li><a href="#">Item ${list.children.length + 1}</a></li>`
})

const removeItem = document.querySelector('#remove-item')
removeItem.addEventListener("click", () => {
    const listItems = document.getElementsByTagName("li")
    if (listItems.length > 0) {
        const lastItem = listItems[listItems.length - 1]
        list.removeChild(lastItem)
    }
})