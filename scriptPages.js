function loadPage(pageName, button) {
    var mainContent = document.getElementById('main-content');
    var fixedHeight = 15;
    var xhr = new XMLHttpRequest();
    var buttons = document.querySelectorAll("nav a");

    buttons.forEach(function (btn) {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    xhr.open('GET', '../HTML/' + pageName, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            mainContent.innerHTML = xhr.responseText;

            mainContent.style.height = (mainContent.scrollHeight + fixedHeight) + 'px';
        }
    };
    xhr.send();
}

// Obtém a URL da página atual
var currentPage = window.location.href;

// Verifica a URL e define a classe "active" no botão correspondente
if (currentPage.indexOf("home.html") !== -1) {
    document.querySelector(".menu-button[href='home.html']").classList.add("active");
} else if (currentPage.indexOf("curriculum.html") !== -1) {
    document.querySelector(".menu-button[href='curriculum.html']").classList.add("active");
} else if (currentPage.indexOf("projects.html") !== -1) {
    document.querySelector(".menu-button[href='projects.html']").classList.add("active");
} else if (currentPage.indexOf("contact.html") !== -1) {
    document.querySelector(".menu-button[href='contact.html']").classList.add("active");
}


