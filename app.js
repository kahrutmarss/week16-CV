const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
const targetImage = document.querySelector('.CV-image img');
let i = 1;


targetImage.addEventListener('click', () => {


    targetImage.style.opacity = '0';

    setTimeout(() => {
    if(i === images.length - 0) {
        i = 0
    }


    targetImage.src = 'images/' + images[i];
    i++;

    targetImage.style.opacity = '1';

    }, 500);
    
//shift + alt = F (teeb skrpti korda)
//transition: opacity 0.3s ease-in-out; et teha animatsioon 


})
