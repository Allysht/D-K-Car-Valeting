const btn = document.getElementById("btn");

function redirectToDkCl() {
    location.replace("http://127.0.0.1:5500/dk-cl.html");
}

btn.addEventListener('click', () => {
    redirectToDkCl();
})