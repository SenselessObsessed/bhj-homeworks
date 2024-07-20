const area = document.getElementById('editor');
const btn = document.getElementById('reset')

area.addEventListener('input', function() {
    window.localStorage.setItem('editor', area.value)
})

window.addEventListener('load', function() {
    area.value = window.localStorage.getItem('editor')
})

btn.addEventListener('click', function() {
    area.value = ''
    window.localStorage.removeItem('editor')
})