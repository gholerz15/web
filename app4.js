const stars4= document.querySelectorAll('.bi-star-fill.star4');
stars4.forEach(function(star4, index){
    star4.addEventListener('click', function() {
        for (let i=0; i<=index; i++){
            stars4[i].classList.add('checked');
        }
        for (let i=index+1; i<stars4.length; i++){
            stars4[i].classList.remove('checked');
        }
    })
});
