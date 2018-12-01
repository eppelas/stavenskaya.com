$(function () {

    var photos = createPhotos('img/', 1, 20);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
