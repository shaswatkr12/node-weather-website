

console.log('javascript loaded yes')

const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const messageone = document.querySelector('#message-1')
const messagetwo = document.querySelector('#message-2')

messagetwo.textContent = ''
weatherform.addEventListener('submit',(e) => {
    e.preventDefault()
    messageone.textContent = 'Loading..'
    const location = search.value
    fetch('/weather?address=' + location).then((response) => {
response.json().then((data) => {
    if(data.error) {
        messageone.textContent=data.error
        messagetwo.textContent = ''

    }
    else{
        messageone.textContent=data.location
        messagetwo.textContent=data.forecast
    }
    })
})
    
})