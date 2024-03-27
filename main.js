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


document.addEventListener('DOMContentLoaded', function () {
    const servicesLink = document.querySelector('footer .list li:nth-child(1) a');

    servicesLink.addEventListener('click', function (event) {
        event.preventDefault();
        openTab(event, 'services');
    });
});




document.addEventListener("DOMContentLoaded", function() {
    var aboutLink = document.querySelector('footer .list li:nth-child(2) a');

    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();  

            var aboutSection = document.getElementById('about-section');

            aboutSection.scrollIntoView({ behavior: 'smooth' });
        });
    });


    document.addEventListener('DOMContentLoaded', function () {
        const contactLink = document.querySelector('footer .list li:nth-child(3) a');
    
        contactLink.addEventListener('click', function (event) {
            event.preventDefault();
    
            const contactSection = document.querySelector('#contact');
    
            contactSection.scrollIntoView({ behavior: 'smooth' });
        });
    });


   