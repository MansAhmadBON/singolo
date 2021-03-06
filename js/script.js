window.onload = function () {
    const D = document;

    const services = D.querySelector('.services');
    const portfolio = D.querySelector('.portfolio');
    const aboutUs = D.querySelector('.aboutUs');
    const quote = D.querySelector('.quote');

    const navList = D.querySelector('.nav__list');
    const navLinks= D.querySelectorAll('.nav__link');
    const navLinkHove = D.querySelector('.nav__link-home');
    const navLinkServices = D.querySelector('.nav__link-services');
    const navLinkPortfolio = D.querySelector('.nav__link-portfolio');
    const navLinkAbout = D.querySelector('.nav__link-about');
    const navLinkContact = D.querySelector('.nav__link-contact');
    const headerMobBtn = D.querySelector('.headerMob__btn');
    const headerMobOpen = D.querySelector('.headerMobOpen');
    const headerMobOpenBtnClose = D.querySelector('.headerMobOpen__btnClose');
    const headerMobTitle = D.querySelector('.headerMobTitle');
    const mobNavList = D.querySelector('.mobNav__list');

    const sliderItems = D.querySelectorAll('.slider__item');
    const btnPrev = D.querySelector('.slider__ctrl-left');
    const btnNext = D.querySelector('.slider__ctrl-right');
    const sliderSection = D.querySelector('.sliderSection');
    const phoneVerticalItem1 = D.querySelector('.imgBox__img-vertival');
    const displayVerticalPhoneItem1 = D.querySelector('.phoneVerticalDisplay-item1');
    const phoneHorizontalItem1 = D.querySelector('.imgBox__img-gor');
    const displayHorizontalPhoneItem1 = D.querySelector('.phoneHorizontalDisplay-item1');
    const phoneItem2 = D.querySelector('.phone-big');
    const phoneDisplayItem2 = D.querySelector('.phoneDisplay');


    const portfolioBtnsBox = D.querySelector('.portfolio__ctrls');
    const portfolioBtns = D.querySelectorAll('.portfolio__btn');
    const portfolioBoxs = D.querySelectorAll('.portfolio__columnsBox');
    const portfolioItems = D.querySelectorAll('.portfolio__item');
    const portfolioAll = D.querySelector('.portfolio__columnsBox-all');
    const portfolioWeb = D.querySelector('.portfolio__columnsBox-web');
    const portfolioGraphic = D.querySelector('.portfolio__columnsBox-graphic');
    const portfolioArt = D.querySelector('.portfolio__columnsBox-art');

    const form = D.querySelector('.quoteForm');
    const inputFormSubject = D.querySelector('.quoteForm__input-subject');
    const textAreaForm = D.querySelector('.quoteForm__textArea');
    const btnFormSubmit = D.querySelector('.quoteForm__btn');
    const modalWindow = D.querySelector('.modalWindowWrapper');
    const modalWindowBtn = D.querySelector('.modalWindow__btn');
    const modalWindowTarget = D.querySelector('.modalWindow__content');


    const removeNavActiveClass = () => navLinks.forEach(el => el.classList.remove('nav__link-active'));
    const addNavActiveClass = el => el.classList.add('nav__link-active');
    const scrollToTheTarget = coordinateY => window.scrollTo(0, coordinateY.offsetTop - 90);
    const removePortfolioItemClass = () => portfolioItems.forEach(el => el.classList.remove('portfolio__item-active'));
    const removePortfilioActiveClass = () => portfolioBoxs.forEach(el => el.classList.remove('portfolio__columnsBox-active'));

    function changeStatePortfolioBtns(newActiveBtn){
        portfolioBtns.forEach(el => el.classList.remove('portfolio__btn-active'));
        newActiveBtn.classList.add('portfolio__btn-active');
    }
    function changeBackgroundSlider(sliderItems, currentSlideIndex) {
        const slideClassName = sliderItems[currentSlideIndex].className.split(' ')[1];
        if(slideClassName === 'slider__item-2'){
            sliderSection.classList.add('sliderSection-slide-2')
        } else {
            sliderSection.classList.remove('sliderSection-slide-2')
        }
    }
    
    const toggleClassPhone = (display, activeClass) => display.classList.toggle(activeClass);

    navLinks.forEach(a => a.addEventListener('click',  e => e.preventDefault()));


    //Header

    //При переходе и скролле, активным должен становиться элемент меню того блока, на котором находится текущая позиция.
    D.addEventListener('scroll', onScroll);

    function onScroll(event){
        const currentPosition = window.scrollY;
        const sectionsPage = D.querySelectorAll('.sectionPage');
        const links = D.querySelectorAll('.nav__list a');

        sectionsPage.forEach(section => {

            if(section.offsetTop - 100 <= currentPosition && (section.offsetTop + section.offsetHeight) > currentPosition){
                links.forEach(a => {
                    a.classList.remove('nav__link-active');

                    if(section.getAttribute('id') === a.getAttribute('href').substring(1)){
                        a.classList.add('nav__link-active');
                    }

                })
            }
        });
    }
    //меню с переключением. Активным остается выбранный элемент меню, предыдущий становится неактивным. Страница должна при этом переходить по якорям в заданную позицию с плавной анимацией.
    function handleClicked(e){
        const targetClass = e.target.className.split(' ')[1];
        switch (targetClass) {
            case 'nav__link-home':
                scrollToTheTarget(sliderSection);
                removeNavActiveClass();
                addNavActiveClass(navLinkHove);
                break;
            case 'nav__link-services':
                scrollToTheTarget(services);
                removeNavActiveClass();
                addNavActiveClass(navLinkServices);
                break;
            case 'nav__link-portfolio':
                scrollToTheTarget(portfolio);
                removeNavActiveClass();
                addNavActiveClass(navLinkPortfolio);
                break;
            case 'nav__link-about':
                scrollToTheTarget(aboutUs);
                removeNavActiveClass();
                addNavActiveClass(navLinkAbout);
                break;
            case 'nav__link-contact':
                scrollToTheTarget(quote);
                removeNavActiveClass();
                addNavActiveClass(navLinkContact);
                break;
            default: break;
        }
    }

    navList.addEventListener('click', handleClicked);
    mobNavList.addEventListener('click', handleClicked);

    //Slider. Переключение слайдов
    let currentSlideIndex = 0;

    btnNext.addEventListener('click', function () {
        sliderItems[currentSlideIndex].classList.remove('slider__item-active');

        currentSlideIndex++;
        if(currentSlideIndex > sliderItems.length - 1){
            currentSlideIndex = 0;
        }

        sliderItems[currentSlideIndex].classList.add('slider__item-active');
        changeBackgroundSlider(sliderItems, currentSlideIndex);
    });

    btnPrev.addEventListener('click', function () {
        sliderItems[currentSlideIndex].classList.remove('slider__item-active');

        currentSlideIndex--;
        if(currentSlideIndex < 0){
            currentSlideIndex = sliderItems.length - 1;
        }

        sliderItems[currentSlideIndex].classList.add('slider__item-active');
        changeBackgroundSlider(sliderItems, currentSlideIndex);

    });


    //Slider. Активация экранов телефонов
    phoneVerticalItem1.addEventListener('click',() => toggleClassPhone(displayVerticalPhoneItem1, 'phoneVerticalDisplay-active'));
    phoneHorizontalItem1.addEventListener('click',  () => toggleClassPhone(displayHorizontalPhoneItem1, 'phoneHorizontalDisplay-active'));
    phoneItem2.addEventListener('click', () => toggleClassPhone(phoneDisplayItem2, 'phoneDisplay-active'));


    //Portfolio. Переключение табов
    portfolioBtnsBox.addEventListener('click', function (e) {
        const elem = e.target;
        const targetClass = elem.className.split(' ')[1];
        switch (targetClass) {
            case 'portfolio__btn-all':
                changeStatePortfolioBtns(elem);
                removePortfilioActiveClass();
                portfolioAll.classList.add('portfolio__columnsBox-active');
                break;
            case 'portfolio__btn-web':
                changeStatePortfolioBtns(elem);
                removePortfilioActiveClass();
                portfolioWeb.classList.add('portfolio__columnsBox-active');
                break;
            case 'portfolio__btn-grafic':
                changeStatePortfolioBtns(elem);
                removePortfilioActiveClass();
                portfolioGraphic.classList.add('portfolio__columnsBox-active');
                break;
            case 'portfolio__btn-art':
                changeStatePortfolioBtns(elem);
                removePortfilioActiveClass();
                portfolioArt.classList.add('portfolio__columnsBox-active');
                break;
            default: break;
        }
    });


    // Portfolio. Взаимодействие с картинками
    portfolioBoxs.forEach(portfolio => {
        portfolio.addEventListener('click', function (e) {
            const elem = e.target;
            removePortfolioItemClass();
            if( elem.className.split(' ')[0] === 'portfolio__item') elem.classList.add('portfolio__item-active');
        });
    });


    //form
    form.addEventListener('submit',e => e.preventDefault());

    btnFormSubmit.addEventListener('click', function () {
        const valueInpSubject = (inputFormSubject.value !== '') ? `Тема: ${inputFormSubject.value}` : 'Без темы';
        const valueTextArea = (textAreaForm.value !== '') ? `Описание: ${textAreaForm.value}` : 'Без описания';

        modalWindow.classList.add('modalWindowWrapper-active');

        const modalWindowContent = document.createElement('div');
        modalWindowContent.innerHTML = `
                                       <h4 class="modalWindow__title">письмо отправлено</h4>
                                       <p class="modalWindow__text modalWindow__valueInpSubject">${valueInpSubject}</p>
                                       <p class="modalWindow__text modalWindow__valueTextArea">${valueTextArea}</p>
                                    `;

        modalWindowTarget.append(modalWindowContent);
    });

    modalWindowBtn.addEventListener('click', function (e) {
        modalWindowTarget.innerHTML = '';
        modalWindow.classList.remove('modalWindowWrapper-active');
    });



    //Open block 'mob navigation'
    headerMobBtn.addEventListener('click', function () {
        headerMobOpen.classList.add('headerMobOpen-active');
        headerMobBtn.classList.add('headerMob__btn-opacity0');
        headerMobTitle.classList.add('headerMobTitle-opacity0');
    });

    headerMobOpenBtnClose.addEventListener('click', function () {
        headerMobOpen.classList.remove('headerMobOpen-active');
        headerMobBtn.classList.remove('headerMob__btn-opacity0');
        headerMobTitle.classList.remove('headerMobTitle-opacity0');
    });
};