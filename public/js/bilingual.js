const ser = document.querySelector("#ser");
const eng = document.querySelector("#eng");

ser.onclick = function () {
    if (window.location.pathname == "/") {
        window.location.pathname = "/ser"
    }
    if (window.location.pathname == "/projects") {
        window.location.pathname = "/ser/projekti"
    }
    if (window.location.pathname == "/contact") {
        window.location.pathname = "/ser/kontakt"
    }
    if (window.location.pathname == "/about") {
        window.location.pathname = "/ser/o-nama"
    }
    if (window.location.pathname == "/fields") {
        window.location.pathname = "/ser/polja"
    }
    if (window.location.pathname == "/clients") {
        window.location.pathname = "/ser/klijnti"
    }
    if (window.location.pathname == "/partners") {
        window.location.pathname = "/ser/partneri"
    }
    if (window.location.pathname == "/company") {
        window.location.pathname = "/ser/kompanija"
    }

}


eng.onclick = function () {
    if (window.location.pathname.slice(0, 4) == "/ser") {
        window.location.pathname = "/"
    }
    if (window.location.pathname == "/ser/projekti") {
        window.location.pathname = "projects"
    }
    if (window.location.pathname == "/ser/kontakt") {
        window.location.pathname = "contact"
    }
    if (window.location.pathname == "/ser/o-nama") {
        window.location.pathname = "about"
    }
    if (window.location.pathname == "/ser/polja") {
        window.location.pathname = "fields"
    }
    if (window.location.pathname == "/ser/klijnti") {
        window.location.pathname = "clients"
    }
    if (window.location.pathname == "/ser/partneri") {
        window.location.pathname = "partners"
    }
    if (window.location.pathname == "/ser/kompanija") {
        window.location.pathname = "company"
    }
}

const first = document.querySelector(".navbar-nav").firstElementChild;

if (window.location.pathname.substring(0, 4) == "/ser") {
    first.firstElementChild.innerHTML = "NASLOVNA";
    document.querySelector(".homeLink").href = "/ser";

    first.nextElementSibling.firstElementChild.innerHTML = "PROJEKTI";
    document.querySelector(".projectsLink").href = "/ser/projekti";
}