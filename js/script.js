window.onload = function () {
    const navList = document.querySelector('.nav__list');

    const navLinks= document.querySelectorAll('.nav__link');

    const navLinkHove = document.querySelector('.nav__link-home');
    const navLinkServices = document.querySelector('.nav__link-services');
    const navLinkPortfolio = document.querySelector('.nav__link-portfolio');
    const navLinkAbout = document.querySelector('.nav__link-about');
    const navLinkContact = document.querySelector('.nav__link-contact');


    const portfolioBox = document.querySelector('.portfolio__columnsBox');
    const portfolioItems = document.querySelectorAll('.portfolio__item');


    const removeNavActiveClass = () => navLinks.forEach(el => el.classList.remove('nav__link-active'));
    const addNavActiveClass = el => el.classList.add('nav__link-active');


    const removePortfolioItemClass = () => portfolioItems.forEach(el => el.classList.remove('portfolio__item-active'))

    //Header
    navList.addEventListener('click', function (e) {
        const targetClass = e.target.className.split(' ')[1];
        switch (targetClass) {
            case 'nav__link-home':
                removeNavActiveClass();
                addNavActiveClass(navLinkHove);
                break;
            case 'nav__link-services':
                removeNavActiveClass();
                addNavActiveClass(navLinkServices);
                break;
            case 'nav__link-portfolio':
                removeNavActiveClass();
                addNavActiveClass(navLinkPortfolio);
                break;
            case 'nav__link-about':
                removeNavActiveClass();
                addNavActiveClass(navLinkAbout);
                break;
            case 'nav__link-contact':
                removeNavActiveClass();
                addNavActiveClass(navLinkContact);
                break;
            default: break;
        }
    });

    // Portfolio. Взаимодействие с картинками
    portfolioBox.addEventListener('click', function (e) {
        const elem = e.target;
        removePortfolioItemClass();
        if( elem.className.split(' ')[0] === 'portfolio__item') elem.classList.add('portfolio__item-active');
    });
};