const filter_events = {
    closeFilter: () => {
        document.getElementById('mobile-filter').style.height = '0%'
    },
    openFilter: () => {
        document.getElementById('mobile-filter').style.height = '100%'
    }
}

function how(event) {
    var el = event.target
    var ul = el.nextElementSibling
    if (el.nodeName == 'H4' && el.className == 'filter__title') {
        var display = ul.style.display == 'block' ? 'none' : 'block'
        ul.style.display = display

        var arrow = el.querySelector('.arrow-items')
        var rotate = arrow.style.transform == "rotate(90deg)" ? "rotate(0deg)" : "rotate(90deg)";
        arrow.style.transform = rotate

    }
}
document.body.addEventListener('click', how)