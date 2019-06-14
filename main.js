const items = document.querySelectorAll('.tab-item')
const contents = document.querySelectorAll('.tab-content-item')

//console.log(items)

function selectItem() {
    removeBord()
    removeText()

    let ele = document.querySelector(`#${this.id}-content`)
    ele.classList.add('show')

    this.classList.add('tab-border')
}
items.forEach(item => item.addEventListener('click', selectItem))

function removeBord() {
    items.forEach(item => item.classList.remove('tab-border'))
}

function removeText() {
    contents.forEach(item => item.classList.remove('show'))
}