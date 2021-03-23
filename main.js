const form = document.querySelector('.form')

form.addEventListener('submit', event => {
    event.preventDefault()

    console.log(form)
    const formData = new FormData(form)
    console.log(formData)
    
    fetch('https://60376bfd5435040017722533.mockapi.io/form', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => { console.log(data) })
})