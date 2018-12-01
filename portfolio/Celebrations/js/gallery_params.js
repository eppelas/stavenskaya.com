$(function () {

    var photos = createPhotos('img/', 1, 59);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
