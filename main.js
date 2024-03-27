document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.querySelectorAll(".tab-content .tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.querySelectorAll(".tab .tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    var selectedTab = document.getElementById(tabName);
    selectedTab.style.display = "block";
    evt.currentTarget.classList.add("active");

    selectedTab.scrollIntoView({ behavior: 'smooth', block: 'start' });
}



document.addEventListener('DOMContentLoaded', function () {
    const contactButton = document.querySelector('.contact');

    contactButton.addEventListener('click', function (event) {
        event.preventDefault();

        const contactSection = document.querySelector('#contact');

        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
});
