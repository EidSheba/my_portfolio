// make the header fixed 
let head = document.querySelector(".navbar")
window.onscroll = function () {
    if (this.scrollY >= 50)
    {
        head.classList.add("active")
    }
    else
    {
        head.classList.remove("active")
        }
}