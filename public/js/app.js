const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('.message-one')
const messageTwo = document.querySelector('.message-two')



weatherForm.addEventListener('submit', (e) => {
    const location = search.value

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
                messageTwo.textContent = ''
            } else {
                document.querySelector('.weather-icon').style.display = "block"
                document.querySelector('.weather-icon').src = data.iconLink
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    }).catch(err => console.log(err))
    e.preventDefault()
})