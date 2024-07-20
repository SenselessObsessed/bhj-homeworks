const form = document.getElementById('form')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const formatForm = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.upload.onprogress = function(e) {
        let total = e.total;
		let loaded = e.loaded;
		let progress = loaded / total;

        form.closest('.card').querySelector('#progress').value = progress
    }
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formatForm);
})