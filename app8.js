const stars8 = document.querySelectorAll('.bi-star-fill.star8');
stars8.forEach(function(star8, index){
    star8.addEventListener('click', function() {
        for (let i = 0; i <= index; i++) {
            stars8[i].classList.add('checked');
        }
        for (let i = index + 1; i < stars8.length; i++) {
            stars8[i].classList.remove('checked');
        }
    })
});