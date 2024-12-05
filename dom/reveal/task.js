const reveal = Array.from(document.querySelectorAll('.reveal'));

window.addEventListener('scroll', function() {
    reveal.forEach(item => {
        let bottom = item.getBoundingClientRect().bottom;
        let top = item.getBoundingClientRect().top;
        if(bottom > 0 &&  top <= this.window.innerHeight) {
            item.classList.add('reveal_active');
        } else {
            item.classList.remove('reveal_active');
        }
    })
})
