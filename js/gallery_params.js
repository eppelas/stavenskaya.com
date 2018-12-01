$(function () {

    var photos = createPhotos('img/preview/', 001, 100);
    $('.maingallery').append(photos);
    $('img').unveil(200);

});
