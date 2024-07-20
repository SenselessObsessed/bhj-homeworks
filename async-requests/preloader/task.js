const card = document.querySelector('.card')

const xht = new XMLHttpRequest();

xht.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xht.send();

xht.addEventListener('readystatechange', function() {
    if(this.readyState === this.DONE) {
        card.querySelector('.loader').classList.remove('loader_active');
        const items = card.querySelector('#items');

        let answer = JSON.parse(xht.responseText).response.Valute;
        for(i in answer) {
            items.insertAdjacentHTML('beforeend', `
            <div class="item">
                <div class="item__code">
                    ${answer[i].CharCode}
                </div>
                <div class="item__value">
                    ${answer[i].Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
            </div>
            `)
        }
    }
})