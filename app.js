
const toggle = document.getElementById("sun");
const body = document.querySelector("body");

toggle.addEventListener('click', function() {

    body.classList.toggle('light-mode');
    if (this.classList.contains('fa-moon')) {

        this.classList.replace('fa-moon', 'fa-sun');
    } else {

        this.classList.replace('fa-sun', 'fa-moon');
    }
});