var sobre = document.getElementById('sobre-popup');
sobre.classList.remove('open-sobre');
var isOpen = false;
var delayInMilliseconds = 300;

function openSobre() {
    if(isOpen == true) {
        sobre.classList.remove('open-sobre');
        sobre.classList.add('closed-sobre');
        setTimeout(function() {
            sobre.classList.remove('closed-sobre');
          }, delayInMilliseconds);
        isOpen = false;
    } else if(isOpen == false) {
        sobre.classList.add('open-sobre');
        isOpen = true;
    }
}

function closeSobre() {
    sobre.classList.remove('open-sobre');
}

function reload() {
    window.location.reload()
}

document.getElementById("sobre").addEventListener("click", openSobre);
document.getElementById("reload").addEventListener("click", reload);