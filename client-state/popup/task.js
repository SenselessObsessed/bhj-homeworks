const btn = document.querySelector('.modal__close');

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value)
}

function getCookie(name) {
    const cookies = document.cookie.split('; ')
    const result = cookies.find(item => item.startsWith(name + '='))
    return result ? decodeURIComponent(result.substring(name.length + 1)) : null
}

function removeCookie(name) {
    const date = new Date();
    const cookies = document.cookie.split('; ')
    const result = cookies.find(item => item.startsWith(name + '='))
    document.cookie = name + `=; Expires ${date.setFullYear(date.getFullYear() - 1)}`
}

btn.addEventListener('click', function() {
    btn.closest('.modal').classList.remove('modal_active');
    setCookie('closepopup', true)
})

window.addEventListener('load', function() {
    const testPopup = getCookie('closepopup');

    if(testPopup) {
        btn.closest('.modal').classList.remove('modal_active');
    }
})