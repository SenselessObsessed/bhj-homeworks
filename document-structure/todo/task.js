const inp = document.getElementById('task__input');
const btn = inp.closest('.tasks__control').querySelector('.tasks__add');
const list = inp.closest('.tasks').querySelector('.tasks__list');
const items = document.getElementsByClassName('task');

function addTask() {
    let inpValue = inp.value;
    if(inpValue) {
        list.insertAdjacentHTML('beforeend', `
            <div class="task">
                <div class="task__title">
                    ${inp.value}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>
        `)

        for(let i = 0; i < items.length; i += 1) {
            items[i].addEventListener('click', function(e) {
                    if(e.target.classList.contains('task__remove')) {
                        e.currentTarget.remove();
                    }
                })
            };
    }

    inp.value = '';
}

inp.addEventListener('keyup', function(e) {
    e.preventDefault()

    if(e.key === 'Enter' && inp.value !== '') {
        addTask();
    }
})

btn.addEventListener('click' , function(e) {
    e.preventDefault()

    addTask();
})