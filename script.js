const form = document.querySelector('.form')

form.addEventListener('submit', event => {
    event.preventDefault()

    //создать пустую форму и заполнить ее теми же полями,
    //что и .form
    console.log(form)
    const formData = new FormData(form)
    console.log(formData)
    
    fetch('https://60376bfd5435040017722533.mockapi.io/form', {
        method: 'POST',
        body: formData
    })
    .then(response => { 
        //проверка статуса ответа
        console.log(response.status)
        if (response.status != 201) {
            return Promise.reject()
        }
        response.json()
    })
    .then(data => { console.log(data) })
    .catch(error => {
        alert("Произошла ошибка! Попробуйте отправить позже")
        console.log(error)
    })
    .finally(() => { form.reset() })
})