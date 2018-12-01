$(function () {

    var photos = createPhotos('main/', 001, 100);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
