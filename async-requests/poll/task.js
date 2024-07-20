const poll = document.querySelector('.poll');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

xhr.addEventListener('readystatechange', function() {
    if(this.readyState === this.DONE) {
        const data = JSON.parse(xhr.responseText).data;
        poll.insertAdjacentHTML('afterbegin', `
          <div class="poll__title" id="poll__title">
            ${data.title}
          </div>
          <div class="poll__answers poll__answers_active" id="poll__answers">
          </div>
        `)

        const answers = poll.querySelector('.poll__answers_active');
        data.answers.forEach(item => {
            answers.insertAdjacentHTML('beforeend', `
            <button class="poll__answer">
                ${item}
            </button>
            `)
        });

        const btns = Array.from(answers.getElementsByClassName('poll__answer'))
        btns.forEach(item => item.addEventListener('click', function() {
            alert('Спасибо, ваш голос засчитан!')
        }))
    }
})