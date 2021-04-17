
function dayOrNight() {
    if(document.querySelector('#nightToDay').value == 'night'){
        document.querySelector('body').style.backgroundColor='black';
        document.querySelector('body').style.color='white';
        document.querySelector('#nightToDay').value = 'day';
    } else {
        document.querySelector('body').style.backgroundColor='white';
        document.querySelector('body').style.color='black';
        document.querySelector('#nightToDay').value = 'night';
    };
};