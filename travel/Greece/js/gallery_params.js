$(function () {

    var photos = createPhotos('img/', 1, 68);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
