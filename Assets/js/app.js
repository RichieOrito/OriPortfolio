const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function pageTransition(){
    //Button click active class
    //get rid of a class that is not active
    for(let i =0; i< sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            //select current btn
            let currentBtn = document.querySelectorAll('.active-btn');
            //if a btn is not selected(active-btn) let it be replaced with an empty string
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += 'active-btn'
        })
    }
}

pageTransition();