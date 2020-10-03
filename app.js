
var button = document.getElementById("btn")
var input = document.getElementById("input")
var form = document.getElementById('form')
var invalid = document.getElementById("invalid")
var error = document.getElementById("error")


error.style.display = "none"
invalid.style.display = "none"
button.addEventListener('click',function(e){
    e.preventDefault()
    if (input.value === "") {
        error.style.display = "block"
        invalid.style.display = "block"
    }
    else{
        error.style.display = "none"
        invalid.style.display = "none"
    }
    if (input.value.includes('#','-','!','/','?') || input.value.includes('-','-','!','/','?') || input.value.includes('!','-','!','/','?') || input.value.includes('/','-','!','/','?') || input.value.includes('?','-','!','/','?')) {
        error.style.display = "block"
        invalid.style.display = "block"
    }
    else{
        error.style.display = "none"
        invalid.style.display = "none"  
    }
    if (!(input.value.includes('@'))) {
        error.style.display = "block"
        invalid.style.display = "block"
    }
})