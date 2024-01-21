//Dark Mode

document.addEventListener("DOMContentLoaded", function() {
    let darkModeToggle = document.getElementById("darkModeToggle")
    let body = document.body

    darkModeToggle.addEventListener("click", function() {
        body.classList.toggle("dark-mode")
    })

// Tab
    let tabs = document.querySelectorAll(".tab")

    tabs.forEach(function(tab) {
        tab.addEventListener("click", function() {
            tabs.forEach(function(t) {
                t.classList.remove("tab-active")
            })

            let contents = document.querySelectorAll(".content");
            contents.forEach(function(content) {
                content.classList.remove("active")
            })

            this.classList.add("tab-active")
            contents[Array.from(tabs).indexOf(this)].classList.add("active")
        })
    })

    // Formulaire

    let form = document.querySelector("form")

    form.addEventListener("submit", function(event) {
        event.preventDefault()

        let nom = document.getElementById("nom").value
        let prenom = document.getElementById("prenom").value
        let email = document.getElementById("email").value

        if (nom.trim() === "" || prenom.trim() === "" || email.trim() === "") {
            alert("Veillez à remplir tous les champs.")
            console.log("Formulaire non valide")
            document.getElementById("nom").style.backgroundColor = "#ff1717"
            document.getElementById("prenom").style.backgroundColor = "#ff1717"
            document.getElementById("email").style.backgroundColor = "#ff1717"
        } 
        else {
            console.log(nom, prenom, email)
            alert("Formulaire soumis.")
            document.getElementById("nom").style.backgroundColor = "#4d9f00"
            document.getElementById("prenom").style.backgroundColor = "#4d9f00"
            document.getElementById("email").style.backgroundColor = "#4d9f00"
        }
    })
})

// Menu Burger

let accor = document.querySelectorAll(".accordeon")
accor.forEach(function(item){
    item.addEventListener('click', function(){
        this.classList.toggle('open')
    })
})