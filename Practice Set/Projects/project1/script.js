const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")


buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        switch(e.target.id){
            case "grey":
                body.style.backgroundColor = e.target.id
            case "red":
                body.style.backgroundColor = e.target.id
            case "blue":
                body.style.backgroundColor = e.target.id
            case "pink":
                body.style.backgroundColor = e.target.id
        }
    })
})