const stars6 = document.querySelectorAll('.bi-star-fill.star6');
stars6.forEach(function(star6, index){
    star6.addEventListener('click', function() {
        for (let i = 0; i <= index; i++) {
            stars6[i].classList.add('checked');
        }
        for (let i = index + 1; i < stars6.length; i++) {
            stars6[i].classList.remove('checked');
        }
    })
});