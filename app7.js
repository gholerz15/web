const stars7 = document.querySelectorAll('.bi-star-fill.star7');
stars7.forEach(function(star7, index){
    star7.addEventListener('click', function() {
        for (let i = 0; i <= index; i++) {
            stars7[i].classList.add('checked');
        }
        for (let i = index + 1; i < stars7.length; i++) {
            stars7[i].classList.remove('checked');
        }
    })
});