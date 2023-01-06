function create() {
    var head = document.createElement("h3")
    head.textContent="Image Element Added."
    head.style.color="green"
    head.style.marginTop="20px"
    var img = document.createElement("img")
    img.src="https://geekster.in/images/logo.svg"
    img.style.marginTop="10px"
    document.body.appendChild(head)
    document.body.appendChild(img)
}