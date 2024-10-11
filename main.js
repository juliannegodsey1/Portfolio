document.addEventListener('DOMContentLoaded', function () {
    function smoothScroll(anchor) {
        const targetId = anchor.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        const offset = 82; 

        const elementPosition = targetSection.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
        });
    }

    const allLinks = document.querySelectorAll('.navbar a, footer .list a');

    allLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            if (this.getAttribute('href').startsWith("#")) {
                e.preventDefault(); 

                smoothScroll(this);

                allLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');

                if (this.closest('footer')) {
                    const correspondingNavLink = document.querySelector(`.navbar a[href="${this.getAttribute('href')}"]`);
                    if (correspondingNavLink) {
                        correspondingNavLink.classList.add('active');
                    }
                }
            } else if (this.hasAttribute('download')) {
                return;
            } else {
                window.location.href = this.href;
            }
        });
    });

    const logoLink = document.getElementById("name-logo");
    logoLink.addEventListener("click", function(event) {
        event.preventDefault(); 
        allLinks.forEach(link => link.classList.remove('active'));

        smoothScroll(logoLink); 
    });
});
