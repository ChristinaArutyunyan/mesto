var popup = document.querySelector('.profile__edit-form');
var overlay = document.querySelector('.overlay')
var popupOpenButton = document.querySelector('.profile__edit-button');

popupOpenButton.addEventListener ('click', function() {
    overlay.classList.add('overlay--show');
})

// popup.classList.add('profile__edit-form--show');//