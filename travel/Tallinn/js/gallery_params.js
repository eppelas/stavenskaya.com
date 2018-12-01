$(function () {

    var photos = createPhotos('img/', 1, 8);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
