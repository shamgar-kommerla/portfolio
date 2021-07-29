let target1= document.querySelector('.picture');
let target2 = document.querySelector('.intro');
let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4
}         

let callbackFunc = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting ){
            entry.target.classList.add('fade-in');
        }else if(!entry.isIntersecting){
            // entry.target.classList.remove('fade-in');
        }
    });
};
let observer = new IntersectionObserver(callbackFunc, options);
observer.observe(target1);
observer.observe(target2);
/*************************************************/
/********EDUCATION SECTION**********/
let target3 = document.querySelector('.education');
// console.log(target3);
let collegeDates = document.querySelectorAll('.college .date p');
let collegeNames = document.querySelectorAll('.college .place p');


let eduOptions = {
    root:null,
    rootMargin:'0px',
    threshold:0.5
}

let eduCallback = (entries, observer) =>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            collegeDates.forEach((date,index) => {
               
                date.classList.add('eduAnimation');
            })
            
            setTimeout(()=>{
                collegeNames.forEach(name =>{
                    name.classList.add('eduAnimation');
                })
            },500);
        }
    })    
};

let eduObserver = new IntersectionObserver(eduCallback,eduOptions);
eduObserver.observe(target3);
