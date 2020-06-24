const boxs = document.querySelectorAll('.legend-judo .athlete');


document.addEventListener("DOMContentLoaded", () => {

let option = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
};
    
const athleteIntersectionObserver = new IntersectionObserver(touching, option);
  
boxs.forEach(box => {
    athleteIntersectionObserver.observe(box);
}); 

});

function touching(entries, Observer) {
   entries.forEach(entry => {
        if( entry.isIntersecting){
            const athleteImage = entry.target
            console.log('intersecetion')
            athleteImage.firstElementChild.classList.add('appear')
            athleteImage.lastElementChild.classList.add('appear')
            Observer.unobserve(entry.target);
        }
   });
}
   