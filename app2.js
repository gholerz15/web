const stars2= document.querySelectorAll('.bi-star-fill.star2');
stars2.forEach(function(star2, index){
    star2.addEventListener('click', function() {
        for (let i=0; i<=index; i++){
            stars2[i].classList.add('checked');
        }
        for (let i=index+1; i<stars2.length; i++){
            stars2[i].classList.remove('checked');
        }
    })
});
