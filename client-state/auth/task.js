const auth = document.getElementById('signin__form');
const exit = document.getElementById('exit');

const signin = auth.closest('.card').querySelector('.signin');
const welcome = auth.closest('.card').querySelector('.welcome');

auth.addEventListener('submit', function(e) {
    e.preventDefault();

    const url = 'https://students.netoservices.ru/nestjs-backend/auth';
    const form = new FormData(auth);
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('load', function() {
        const response = JSON.parse(xhr.responseText);

        if(response.success) {
            const id = response.user_id;
            window.localStorage.setItem('id', id)

            signin.classList.remove('signin_active');
            welcome.classList.add('welcome_active');

            document.getElementById('user_id').innerText = window.localStorage.getItem('id');
        }

        const inputs = Array.from(document.getElementsByTagName('input'));
        inputs.forEach(item => item.value = '');

    });

    xhr.open('POST', url);
    xhr.send(form);
})

exit.addEventListener('click', function(e) {
    e.preventDefault();

    welcome.classList.remove('welcome_active');
    signin.classList.add('signin_active');
})

