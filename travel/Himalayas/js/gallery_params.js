$(function () {

    var photos = createPhotos('img/', 1, 37);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
