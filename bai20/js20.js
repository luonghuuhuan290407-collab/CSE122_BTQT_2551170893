function applyEffect(effectName, clickedButton){
    const imgElement = document.getElementById('my-image');
    imgElement.className='';
    switch(effectName){
        case 'gray':
            imgElement.classList.add('effect-gray');
            break;
        case 'xray':
            imgElement.classList.add('effect-xray');
            break;
        case 'invert':
            imgElement.classList.add('effect-invert');
            break;
        case 'fliph':
            imgElement.classList.add('effect-fliph');
            break;
        case 'glow':
            imgElement.classList.add('effect-glow');
            break;
        case 'shadow':
            imgElement.classList.add('effect-shadow');
            break;
        case 'boldshadow':
            imgElement.classList.add('effect-boldshadow');
            break;
        case 'dropshadow':
            imgElement.classList.add('effect-dropshadow');
            break;
        case 'blur':
            imgElement.classList.add('effect-blur');
            break;
        case 'wave':
            imgElement.classList.add('effect-wave');
            break;
        case 'mask':
            imgElement.classList.add('effect-mask');
            break;
        case 'alpha':
            imgElement.classList.add('effect-alpha');
            break;
        
    }
    const allButtons =document.querySelectorAll('.button-bar .btn');
    allButtons.forEach(btn=>{
        btn.classList.remove('active')
    });
}
window.onload = function(){
    const defaultBtn= document.querySelector('.button-bả .btn');
    applyEffect('gray, defaultBtn');
}