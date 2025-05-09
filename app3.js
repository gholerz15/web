const stars3= document.querySelectorAll('.bi-star-fill.star3');
stars3.forEach(function(star3, index){
    star3.addEventListener('click', function() {
        for (let i=0; i<=index; i++){
            stars3[i].classList.add('checked');
        }
        for (let i=index+1; i<stars3.length; i++){
            stars3[i].classList.remove('checked');
        }
    })
});
