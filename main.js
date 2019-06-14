const items = document.querySelectorAll('.tab-item')
//const contents = document.querySelectorAll('.tab-content-item')

//console.log(items)

function selectItem() {
    removeBord()

    this.classList.add('tab-border')
}
items.forEach(item => item.addEventListener('click', selectItem))

function removeBord() {
    items.forEach(item => item.classList.remove('tab-border'))
}