$(function () {

    var photos = createPhotos('img/', 1, 39);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
