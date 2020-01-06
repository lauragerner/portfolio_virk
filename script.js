window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}


function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hide");

    let erSkjult = document.querySelector("#menu").classList.contains("hide");

    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
    } else {

        document.querySelector("#menuknap").textContent = "✗";
    }
}
