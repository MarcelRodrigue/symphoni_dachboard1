const loader=document.querySelector('.loader');
const main=document.querySelector('#page-wrapper');



window.addEventListener('load', ()=>{
    setTimeout(()=>{loader.style.opacity=0;loader.style.display = "none";main.style.display = "block";}, 1000)
})