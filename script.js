let btnRight = document.querySelector('.right');
let btnLeft = document.querySelector('.left');
let sliderBox = document.querySelector('.slider_box');
let marginActual = 0;
const marginMax1 = -141;
const marginMax2 = 1;

btnLeft.style.display = 'none';

btnRight.addEventListener('click',()=>{
  if (marginActual > marginMax1) {
    marginActual -= 140;
    sliderBox.style.marginLeft = marginActual + 'px';
    btnLeft.style.display = 'block';

    if (marginActual < marginMax1) {
      btnRight.style.display = 'none';
    }
  } else {
    console.log("Se llego al maximo para mostrar");
  }
});

btnLeft.addEventListener('click',()=> {
  if (marginActual < marginMax2){
    marginActual += 140;
    sliderBox.style.marginLeft = marginActual + 'px';
    btnRight.style.display = 'block';
    
    if (marginActual == 0) {
      btnLeft.style.display = 'none';
    }
  } else {
    console.log("Se llego al maximo para mostrar");
  }
})