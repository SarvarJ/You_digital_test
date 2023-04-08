
const   documentBody = document.querySelector('body'),
        modalWindow = document.querySelector('.modal-window'),
        modalCover = document.querySelector('.modal-cover'),
        registerButton = document.querySelector('#registerButton'),
        registrationForm = document.querySelector('#registrationForm'),
        uploadImage = document.querySelector('#uploadImage'),
        imagePreview = document.querySelector('#imagePreview'),
        cancelUpload = document.querySelector('#cancelUpload'),
        closeForm = document.querySelector('#closeForm'),
        eventTypes = ['click', 'change'] 

const hideModalWindow = () => {
    modalWindow.setAttribute('hidden', '')
    modalCover.setAttribute('hidden', '')
}

const showModalWindow = () => {
    modalWindow.removeAttribute('hidden')
    modalCover.removeAttribute('hidden')
}

const eventHandler = event => {
    switch (event.type) {
        case "click":
            clickHandler(event)
            break
        case "change":
            changeHandler(event)
            break
        default:
            return
    }
}

const clickHandler = event => {
    switch (event.target) {
        case modalCover:
            hideModalWindow()
            break 
        case closeForm:
            hideModalWindow()
            break
        case cancelUpload:
            imagePreview.src = ''
            cancelUpload.style.display = 'none'
            break
        case registerButton:
            showModalWindow()
            break
    }
}

const changeHandler = event => {
    
    switch (event.target) {
        case uploadImage:
            uploadImageHandler(event.target)
            break 
        default:
            return
    }
}

const uploadImageHandler = target => {
    if (target.files && target.files[0]) {
        let reader = new FileReader()
        reader.onload = e => {
            imagePreview.src = e.target.result
        }
        reader.readAsDataURL(target.files[0])

        cancelUpload.style.display = 'block'
    }
}

eventTypes.forEach(type =>
    documentBody.addEventListener(type, eventHandler)
)

