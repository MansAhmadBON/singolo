window.onload = function () {
    const navList = document.querySelector('.nav__list');

    const navLinks= document.querySelectorAll('.nav__link');

    const navLinkHove = document.querySelector('.nav__link-home');
    const navLinkServices = document.querySelector('.nav__link-services');
    const navLinkPortfolio = document.querySelector('.nav__link-portfolio');
    const navLinkAbout = document.querySelector('.nav__link-about');
    const navLinkContact = document.querySelector('.nav__link-contact');


    function removeActiveClass(){
        navLinks.forEach(el => el.classList.remove('nav__link-active'));
    }

    function addActiveClass(el){
        el.classList.add('nav__link-active');
    }


    navList.addEventListener('click', function (e) {
        const targetClass = e.target.className.split(' ')[1];
        switch (targetClass) {
            case 'nav__link-home':
                removeActiveClass();
                addActiveClass(navLinkHove);
                break;
            case 'nav__link-services':
                removeActiveClass();
                addActiveClass(navLinkServices);
                break;
            case 'nav__link-portfolio':
                removeActiveClass();
                addActiveClass(navLinkPortfolio);
                break;
            case 'nav__link-about':
                removeActiveClass();
                addActiveClass(navLinkAbout);
                break;
            case 'nav__link-contact':
                removeActiveClass();
                addActiveClass(navLinkContact);
                break;
            default: break;
        }
    })
};