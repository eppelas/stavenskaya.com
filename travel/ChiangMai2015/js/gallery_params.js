$(function () {

    var photos = createPhotos('img/', 1, 32);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
