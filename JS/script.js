const show = document.querySelector('span.more');

show.addEventListener('click',function(e){
const data = document.querySelector('.data');
data.classList.toggle('hide');
});