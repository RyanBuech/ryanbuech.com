const navSlide = () => 
{
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');

    burger.addEventListener('click', () => 
    {
        menu.classList.toggle('menu-active');
    });
}

navSlide();