$(function () {

    var photos = createPhotos('vietnam/img/', 1, 77);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
