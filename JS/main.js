// تحميل المكونات
function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

loadComponent("header", "components/header.html");
loadComponent("services", "components/services.html");
loadComponent("partners", "components/partners.html");
loadComponent("downloads", "components/downloads.html");
loadComponent("footer", "components/footer.html");

// تشغيل AOS
AOS.init({
    duration: 1000,
    once: true
});
