const circulo = document.querySelector('.cir');
const area = document.querySelector('.cnt')
var pxT = 0;
var pxL = 0;
document.addEventListener('keydown', (e)=>{
    switch (e.key) {
        case "ArrowLeft":
            circulo.style.left = `${pxL = Math.max(pxL-10, 0)}px`  
        break;
    
        case "ArrowUp":
            circulo.style.top=`${pxT = Math.max(pxT-10, 0)}px`
        break;

        case "ArrowRight":
            circulo.style.left=`${pxL= Math.min(pxL+10,document.documentElement.clientWidth-60)}px`
        break;

        case "ArrowDown":
            circulo.style.top=`${pxT=Math.min(pxT+10,document.documentElement.clientHeight-60)}px`
        break;

        default:
            break;
    }
})