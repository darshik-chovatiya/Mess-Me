let btn = document.querySelector('button');

btn.addEventListener('click' , ()=>{
    
    let a = document.querySelector('input').value;
    let link = `https://wa.me/6351068172?text=${a}`;

    window.open(link, '_blank');
})
