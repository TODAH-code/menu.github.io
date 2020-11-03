function closeFilter() {
    document.getElementById('mobile-filter').style.width = '0%'
}
function openFilter() {
    document.getElementById('mobile-filter').style.width = '100%'
}

function how(event) {
    var el = event.target
    var ul = el.nextElementSibling
    var display = ul.style.display == 'none' ? 'block' : 'none'

    ul.style.display = display

}
document.body.addEventListener('click', how)