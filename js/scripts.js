document.addEventListener('DOMContentLoaded', () => {
    /*********************SCROLL INDICATOR*****************/
    window.onscroll = function() {myFunction()};

    function myFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    }
    /*************************************************/
    if(window.innerWidth <= 850){
        document.body.style.position='fixed';   
    }
    setTimeout(() => {
        let Loader = document.querySelector('.loader');
        Loader.classList.add('disAppearClass');
        document.body.style.position='';
    },3000);
    /***************************************************/
    let scrollAppear =()=> {
        var aboutSec = document.querySelector('.about-section');
        let navSec = document.querySelector('.myNav');
        document.addEventListener('scroll',()=>{
            var aboutPos = aboutSec.getBoundingClientRect().top;
            // console.log(aboutPos);
            if(aboutPos <= 100){
                navSec.classList.add('newNav');
            }else{
                navSec.classList.remove('newNav');
            }
        })
    }
    scrollAppear();
    /********************NAVIGATION MENU********************/

        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        burger.addEventListener('click', () =>{
            burger.classList.toggle('burger-change');

            navLinks.forEach((link,index) => {
                if(link.style.animation){
                    link.style.animation ='';
                }else{
                    link.style.animation= `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`;
                }             
            })
            nav.classList.toggle('nav-active');
        })

    /***************************************************/

    

})