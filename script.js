

// VISUALIZADOR POPUP

const contacto = document.querySelector('#contacto')
const section2 = document.querySelector('.section2')
const section1 = document.querySelector('.section1')
contacto.addEventListener('click',()=>{
    const popUp = document.querySelector('#popUp')
    if(popUp.style.display==='flex'){
        popUp.style.display='none'
        popUp.style.opacity = '0';
    }else{
        popUp.style.display='flex'
        popUp.style.opacity = '1';
    }
})
section2.addEventListener('click',()=>{

    const popUp = document.querySelector('#popUp')
    if(popUp.style.display=='flex'){
        popUp.style.display='none'
    }
})
section1.addEventListener('click',()=>{

    const popUp = document.querySelector('#popUp')
    if(popUp.style.display=='flex'){
        popUp.style.display='none'
    }
})
addEventListener('scroll', () => {
  
    if (popUp.style.display === 'flex') {
        popUp.style.display = 'none';
    }
});

// FUNCIONALIDAD BOTONES COPIAR Y ENVIAR DEL POPUP

document.querySelector('#popUpButton1').addEventListener('click', () => {
    const inputText = document.querySelector('#popUpInput1')
    inputText.select();
    navigator.clipboard.writeText(inputText.value);
    alert('Copiado');
});
document.querySelector('#popUpButton2').addEventListener('click', () => {
    const inputText = document.querySelector('#popUpInput2')
    inputText.select();
    navigator.clipboard.writeText(inputText.value);
    alert('Copiado');
});