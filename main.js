document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            targetSection.scrollIntoView({ behavior: 'smooth' });

            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            this.classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const footerLinks = document.querySelectorAll('footer .list a');

    footerLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            targetSection.scrollIntoView({ behavior: 'smooth' });

            footerLinks.forEach(link => {
                link.classList.remove('active');
            });

            this.classList.add('active');
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var aboutMeLink = document.getElementById("about-me-link");
    var aboutMeTab = document.querySelector(".navbar a[href='#home']");

    aboutMeLink.addEventListener("click", function(event) {
        event.preventDefault(); 

        var navLinks = document.querySelectorAll(".navbar a");
        navLinks.forEach(function(link) {
            link.classList.remove("active");
        });

        aboutMeTab.classList.add("active");
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var projectFooterLink = document.getElementById("project-footer-link");
    var projectTab = document.querySelector(".navbar a[href='#projects']");

    projectFooterLink.addEventListener("click", function(event) {
        event.preventDefault(); 

        var navLinks = document.querySelectorAll(".navbar a");
        navLinks.forEach(function(link) {
            link.classList.remove("active");
        });

        projectTab.classList.add("active");
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var resumeFooterLink = document.getElementById("resume-footer-link");
    var resumeTab = document.querySelector(".navbar a[href='#resume']");

    resumeFooterLink.addEventListener("click", function(event) {
        event.preventDefault(); 

        var navLinks = document.querySelectorAll(".navbar a");
        navLinks.forEach(function(link) {
            link.classList.remove("active");
        });

        resumeTab.classList.add("active");
    });
});




document.addEventListener("DOMContentLoaded", function() {
    var logoLink = document.getElementById("name-logo");
    var aboutMeTab = document.querySelector(".navbar a[href='#home']");

    logoLink.addEventListener("click", function(event) {
        event.preventDefault(); 

        var navLinks = document.querySelectorAll(".navbar a");
        navLinks.forEach(function(link) {
            link.classList.remove("active");
        });

        aboutMeTab.classList.add("active");
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var contactFooterLink = document.getElementById("contact-footer-link");

    contactFooterLink.addEventListener("click", function(event) {
        event.preventDefault(); 

        var emailAddress = "mailto:juliannegodseyy@gmail.com";
        window.location.href = emailAddress;
    });
});