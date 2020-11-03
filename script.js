const filter_events = {
    closeFilter: () => {
        document.getElementById('mobile-filter').style.width = '0%'
    },
    openFilter: () => {
        document.getElementById('mobile-filter').style.width = '100%'
    }
}

function how(event) {
    var el = event.target
    var ul = el.nextElementSibling
    if (el.nodeName == 'H4' && el.className == 'filter__title') {
        var display = ul.style.display == 'block' ? 'none' : 'block'
        console.log(el.nodeName);
        ul.style.display = display
    }
}
document.body.addEventListener('click', how)