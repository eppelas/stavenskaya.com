$(function () {

    var photos = createPhotos('img/', 1, 10);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
