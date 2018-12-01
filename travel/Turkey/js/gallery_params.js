$(function () {

    var photos = createPhotos('img/', 1, 9);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
