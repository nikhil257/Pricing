const button = document.querySelectorAll('.btn');
const container = document.querySelectorAll('.container');


button.forEach(btn=>{
    btn.addEventListener('click',()=>{
        btn.style.backgroundColor = 'blue';
    });

    
    container.forEach(cont=>{
        cont.addEventListener('mouseenter',()=>{
            cont.style.backgroundColor = 'purple';
        })
    
        cont.addEventListener('mouseleave',()=>{
            cont.style.backgroundColor = 'initial';
        })
    })
});