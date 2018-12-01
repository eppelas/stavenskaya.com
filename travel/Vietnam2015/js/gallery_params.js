$(function () {

    var photos = createPhotos('img/', 1, 77);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
