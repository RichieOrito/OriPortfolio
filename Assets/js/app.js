const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function pageTransition(){
    //Button click active class
    //get rid of a class that is not active
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            //select current btn
            let currentBtn = document.querySelectorAll('.active-btn');
            //if a btn is not selected(active-btn) let it be replaced with an empty string
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += 'active-btn';
        })
    }
    //Section Active
    allSections.addEventListener('click', (e) =>{
        //dataset is referring to to whatever i've clicked(data-id)
        //whatever element i've clicked on(the buttons) am targeting its data-set which is the data-id
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the other btns
            //looping through the container of the buttons for each individual btn.
            //if we are not clicking on a btn we get rid of the active class
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active-btn')
           })
            //Adding active to whatever btn I have clicked.
            e.target.classList.add('active-btn')

            //hide other sections
            //when clicking the active button I want set the display and transition back to default
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}

pageTransition();