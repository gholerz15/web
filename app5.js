const stars5= document.querySelectorAll('.bi-star-fill.star5');
stars5.forEach(function(star5, index){
    star5.addEventListener('click', function() {
        for (let i=0; i<=index; i++){
            stars5[i].classList.add('checked');
        }
        for (let i=index+1; i<stars5.length; i++){
            stars5[i].classList.remove('checked');
        }
    })
});
