$(function () {

    var photos = createPhotos('img/', 1, 28);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
