$(function () {

    var photos = createPhotos('img/', 1, 11);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
